<template>
  <div id="app">
    <Liste/>
  </div>
</template>

<script>
import Liste from './components/Liste.vue'

export default {
  name: 'App',
  components: {
    Liste
  }
}
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: beige;
  margin: 0;
  padding: 0;
}

div {
  margin: 0 auto;
  width: 80%;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
}

h1, h2 {
  color: #5c5c5c;
}

h2 {
  border-bottom: 1px solid #cccccc;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #aaaaaa;
  box-sizing: border-box;
  margin-bottom: 20px;
}


ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
}

li span {
  flex: 1 0 100%;
  margin-bottom: 5px;
}

button {
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #aaaaaa;
  background-color: #8395a7;
  color: white;
  cursor: pointer;
  margin-top: 5px;
  width: 25%;
  text-align: center;
  align-items: center;
  box-sizing: border-box;
}

button:hover {
  background-color: #a4bObe;
}

button:active {
  background-color: #57606f;
}

button:focus {
  outline: none;
}

button:nth-child(2) {
  background-color: #78eO8f;
  border-color: #78eO8f;
}

button:nth-schild(3) {
  background-color: #3498db;
  border-color:#3498db;
}

button:nth-child(1) {
  background-color: #e55039;
  border-color: #e55039;
}
</style>
