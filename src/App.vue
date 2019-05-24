<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div style="height:300px;width:600px;">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import linChart from './components/barChart/index'
export default {
  name: 'app',
  components: {
    HelloWorld:linChart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
