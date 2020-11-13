<template>
    <div>
        <h3>vuex</h3>
        <li>
            <button @click="click">click</button>
        </li>
        <li>
            <button @click="clickadd">clickadd</button><span>{{double}}</span>
        </li>
        <li>{{}}</li>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed:{
        double(){
            return this.$store.getters['a/doubleCount']
        }
    },
    methods:{
        click(){
            console.log(this)
            console.log(this.$store)
            this.$store.commit('a/increment')
        },
        clickadd(){
            // this.$store.commit('increment')
        }
    }
}
</script>