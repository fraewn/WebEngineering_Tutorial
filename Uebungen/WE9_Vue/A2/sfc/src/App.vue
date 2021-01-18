<template>
  <div id="app">
    <!-- if you want an inline menu: set 'inline' as attribute; if you want block omit attribute completely -->
    <!-- set item1 to item4 using itemi="xy" -->
    <!-- display: inline -->
    <Menu inline item1="JavaScript" item2="Java" item3="HTML" item4="CSS"/>
    <!-- display: block -->
    <Menu item1="JavaScript" item2="Java" item3="HTML" item4="CSS"/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'


export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
