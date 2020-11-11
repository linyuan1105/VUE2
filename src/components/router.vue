<template>
    <div>
        <h1>router{{name}}</h1>
        <router-link to="/dycRouter/linyuan">linyuan</router-link>
        <router-link to="/dycRouter/xialin">xialin</router-link>
        <button @click="changeroute">changeroute</button>
        +++++++++++{{routerProps}}++++++++++++++++
    </div>
</template>
<script>
export default {
    props:['routerProps'],
    data(){
        return{
          name:''
        }
    },
    watch:{
        $route(to,from){
            this.name = to.params.routerProps
            console.log(to)
            console.log(from)
            console.log('$route')
        }
    },
    methods:{
        changeroute(){
            this.$router.push({
                name: 'router'
            })
        }
    },
    beforeRouteUpdate (to, from, next){
        this.name = to.params.name
        console.log(to)
        console.log(from)
        console.log('beforeRouteUpdate','组件守卫')
        next()
    }
}
</script>