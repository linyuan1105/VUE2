<template>
<div><button @click="grand">grand</button> <span v-show="false" v-text="text"></span>1
 <input v-model.number="name" />
 {{$attrs}}
 +++++++++++++++++++++{{routerProps}}+++++++++++++++++++++
</div>
    
</template>
<script>
export default {
    props:['routerProps'],
    data(){
        return{
            name:'ss',
            text: 'text'
        }
    },
    methods:{
        grand(){
            console.log(this.name)
            console.log(this)
            console.log(this.$attrs)
            console.log(this.$listeners)
            this.$emit('grand','grand')
        }
    }
}
</script>