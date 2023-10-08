<template>
    <div>
        <h1>Ihre Eingabe bitte:</h1>
    <div>
        <input v-model.number="zahl1" type="text">
        <select v-model="operation" size="1">
            <option value="plus">+</option>
            <option value="minus">-</option>
            <option value="mal">*</option>
            <option value="geteilt">/</option>
        </select>
        <input v-model.number="zahl2" type="text">
    </div>
        <Ausgabe v-bind:ergebnis = "this.ergebnis"/>
        <button @click="berechnen">Berechnen</button>
    </div>
</template>

<script>
import operationen from './operationen.js'
import Ausgabe from './Ausgabe.vue'
export default {
    name: "EingabeKomponente",
    components: {
        Ausgabe
    },
    data: function() {
        return {
            zahl1: 0,
            zahl2: 0,
            operation: "plus",
            ergebnis: 0
        }
    },

    methods: {
        berechnen: function () {
            switch (this.operation) {
                case "plus":
                    this.ergebnis = this.zahl1 + this.zahl2;
                    break;
                case "minus":
                    this.ergebnis = this.zahl1 - this.zahl2;
                    break;
                case "mal":
                    this.ergebnis = this.zahl1 * this.zahl2;
                    break;
                case "geteilt":
                    this.ergebnis = this.zahl1 / this.zahl2;
                    break;
            }
        }
    },
    mixins: [operationen],
}
</script>