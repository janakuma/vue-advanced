<template>
  <div id="app">
    <tool-bar />

    <router-view/>
  </div>
</template>

<script>
import './assets/styles/reset.scss'
import ToolBar from './components/ToolBar.vue'
export default {
  components: {
    ToolBar,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
