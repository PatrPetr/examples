<template>
    <li>
        {{ eintrag.text }} <span v-if="eintrag.datum && eintrag.zeit"> 
            (hinzugefügt am {{ eintrag.datum }} um {{ eintrag.zeit }})
        </span>
        <button @click="$emit('entfernen', eintrag.id)">Löschen</button>
        <button v-if="!istErledigt" @click="$emit('erledigt', eintrag.id)">Erledigt</button>
        <button v-if="!istErledigt && !istVerschoben && !istMorgen" @click="$emit('verschoben', eintrag.id)">Verschieben</button>    </li>
</template>

<script>
export default {
    name: 'EintragKomponente',
    props: {
        eintrag: Object,
        istErledigt: {
            type: Boolean,
            default: false
        },
        istVerschoben: {
            type: Boolean,
            default: false
        },
        istMorgen: {
            type: Boolean,
            default: false
        }
    }
}
</script>
