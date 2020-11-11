<template>
    <div><h1>404{{routerProps}}</h1>{{$route.query}}{{staticValue}}{{fnProps}}
    <button @click="click">click</button>
    <router-link to="/staticValue">staticValue</router-link>
    </div>
    
</template>
<script>
export default {
    props: ['routerProps','staticValue','fnProps'],
    mounted(){
        this.axi()
    },
    methods:{
        click(){
            this.axi()
            console.log(this)
        },
        axi(){
            this.axios.get('http://localhost:8888/').then((response) => {
              console.log(response.data)
            })
        }
    }
}
</script>