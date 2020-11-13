<template>
    <div v-bind="$attrs">
      
        <h1>  <li><router-link to="/index">index</router-link></li>
    <li>
        <router-link to="/dycRouter/linyuan">Dycindex{{$route.params.name}}</router-link>
        
    </li>
    <li>
        <router-link to="/trances">trances</router-link>
    </li>
    <li>
        <router-link to="/vuex">vuex</router-link>
    </li>
        </h1>
        {{routerProps}}
        <button @click="route">route</button></div>
</template>
<script>
export default {
    props:['routerProps'],
    mounted(){
        console.log()
    },
    methods:{
        route(){
            console.log(this.$route)
        }
    }
}
</script>