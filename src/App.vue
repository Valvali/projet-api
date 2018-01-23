<template>
  <div id="app">
    <TopBar/>
    <router-view/>
  </div>
</template>

<script>
import TopBar from './components/TopBar'
import Chat from './components/Chat'


export default {
  name: 'App',
  components:{
    'TopBar': TopBar,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body, html, .wrapper{
  height:100%;
}
</style>
