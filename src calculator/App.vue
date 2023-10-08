<template>
  <div id="app">
    <h1>Calculator</h1>
    <Eingabe />
  </div>
</template>

<script>
import Eingabe from './components/Eingabe.vue'

export default {
  name: 'App',
  components: {
    Eingabe
  }
}
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  font-size: 300%;
}
</style>
