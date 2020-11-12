<template>
    <div v-bind="$attrs"><h1><router-link to="/index">index</router-link>
        <router-link to="/dycRouter/linyuan">Dycindex{{$route.params.name}}</router-link>
        <router-link to="/trances">trances</router-link>
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