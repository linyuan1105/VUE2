<template>
  <div id="app">
    
    <transition name="slide-left">
      
    <router-view name="index"/>
    <router-view name="M404" />
    <router-view/>
    </transition>
    <img src="./assets/logo.png">
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      transitionName:'slide-left'
    }
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
