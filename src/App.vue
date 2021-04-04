<template>
  <div id="app">
    <App-header/>
    <router-view />
    <App-footer/>
  </div>
</template>

<script>
import AppHeader from "@/components/global/AppHeader.vue";
import AppFooter from "@/components/global/AppFooter.vue";
export default {
  name:'App',
    components: {
      AppHeader,
      AppFooter
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


</style>
