<template>
    <div>
        <h1>Meine To-Do-Liste</h1>
        <input 
        v-model="neuerEintrag"
        @keyup.enter="eintragHinzufügen" 
        type="text" 
        placeholder="Neuer Eintrag"
        >

    <h2>Heute</h2>
    <p>{{ aktuellesDatum }}</p>
    <ul>
        <Eintrag 
            v-for="eintrag in meineListe" 
            v-bind:key="eintrag.id" 
            v-bind:eintrag="eintrag" 
            @entfernen="loeschen"
            @erledigt="zuErledigtVerschieben"
            @verschoben="zuMorgenVerschieben" 
        />
    </ul>

    <h2>Erledigt</h2>
    <ul>
        <Eintrag 
            v-for="eintrag in erledigt"
            v-bind:key="eintrag.id" 
            v-bind:eintrag="eintrag" 
            @entfernen="loeschenErledigt"
            v-bind:istErledigt="true"
        />
    </ul>

    <h2>Verschoben</h2>
    <ul>
        <Eintrag 
            v-for="eintrag in verschobenAufMorgen"
            v-bind:key="eintrag.id" 
            v-bind:eintrag="eintrag" 
            @entfernen="loeschenMorgen"
            @erledigt="zuErledigtVerschieben"
            v-bind:istVerschoben="true"
        />
    </ul>
    </div>
</template>


<script>
import Eintrag from './Eintrag.vue'
export default {
    name: 'ListeKomponente',
    components: {
        Eintrag
    },
    data: function() {
        return {
            neuerEintrag: '',
            neueID: 4,
            meineListe: [
                {id: 1, text: 'Einkaufen', zeit: null},
                {id: 2, text: 'Zum Sport gehen', zeit: null},
                {id: 3, text: 'Lernen', zeit: null}
            ],
            erledigt: [],
            verschobenAufMorgen: []
        }
    },

    computed: {
        aktuellesDatum: function() {
            return this.getDatum();
        }
    },
    methods: {
        getDatum: function() {
            const jetzt = new Date();
            const tag = jetzt.getDate().toString().padStart(2, '0');
            const monat = (jetzt.getMonth() + 1).toString().padStart(2, '0');
            const jahr = jetzt.getFullYear();
            return `${tag}.${monat}.${jahr}`;
        },
        eintragHinzufügen: function() {
            const jetzt = new Date();
            const stunden = jetzt.getHours().toString().padStart(2, '0');
            const minuten = jetzt.getMinutes().toString().padStart(2, '0');
            const uhrzeit = `${stunden}:${minuten} Uhr`;
            this.meineListe.push({
                id: this.neueID,
                text: this.neuerEintrag,
                zeit: uhrzeit,
                datum: null
            });
            this.neueID++;
            this.neuerEintrag = '';
        },
        loeschen: function(id) {
            this.meineListe = this.meineListe.filter(eintrag => eintrag.id !== id);
        },

        zuErledigtVerschieben: function(id) {
            const jetzt = new Date();
            const stunden = jetzt.getHours().toString().padStart(2, '0');
            const minuten = jetzt.getMinutes().toString().padStart(2, '0');
            const uhrzeit = `${stunden}:${minuten} Uhr`;
            const datum = this.getDatum();

            let gefundenEintrag;
            let indexHaupt = this.meineListe.findIndex(eintrag => eintrag.id === id);
            if (indexHaupt !== -1) {
                gefundenEintrag = this.meineListe[indexHaupt];
                this.meineListe.splice(indexHaupt, 1);
            } else {
                let indexMorgen = this.verschobenAufMorgen.findIndex(eintrag => eintrag.id === id);
                if (indexMorgen !== -1) {
                    gefundenEintrag = this.verschobenAufMorgen[indexMorgen];
                    this.verschobenAufMorgen.splice(indexMorgen, 1);
                }
            }

            if (gefundenEintrag) {
                gefundenEintrag.zeit = uhrzeit;
                gefundenEintrag.datum = datum;  // setzen Sie das aktuelle Datum, wenn es erledigt ist
                this.erledigt.push(gefundenEintrag);
            }
        },
        zuMorgenVerschieben: function(id) {
            const jetzt = new Date();
            const stunden = jetzt.getHours().toString().padStart(2, '0');
            const minuten = jetzt.getMinutes().toString().padStart(2, '0');
            const uhrzeit = `${stunden}:${minuten} Uhr`;
            const datum = this.getDatum();

            let index = this.meineListe.findIndex(eintrag => eintrag.id === id);
            if (index !== -1) {
                let verschobenerEintrag = this.meineListe[index];
                verschobenerEintrag.zeit = uhrzeit;
                verschobenerEintrag.datum = datum;
                this.verschobenAufMorgen.push(verschobenerEintrag);
                this.meineListe.splice(index, 1);
            }
        },
        loeschenErledigt: function(id) {
            this.erledigt = this.erledigt.filter(eintrag => eintrag.id !== id);
        },
        loeschenMorgen: function(id) {
            this.verschobenAufMorgen = this.verschobenAufMorgen.filter(eintrag => eintrag.id !== id);
        }
    }
}

</script>