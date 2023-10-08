<template>
    <div>
        <h1>Das Ergebnis ist {{ ergebnis }}.</h1>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default {
    name: 'AusgabeKomponente',
    props: {
        ergebnis: Number,
    }
}
</script>
