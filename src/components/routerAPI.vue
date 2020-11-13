<template>
    <div>
        <h1>RouterAPI</h1>
        <li>
            <router-link
                :to="{name:'append'}"
                active-class="myactiveClassappend"
                linkActiveClass="linkActiveClass123"
                append
                >append
            </router-link>
        </li>
        <li>
            <router-link
                :to="{name:'append2'}"
                active-class="myactiveClassappend2"
                append
                >append2
            </router-link>
        </li>
        <li>
            <button @click="click">click</button>
            <button @click="change">change</button>
        </li>
        <router-view />
        <li v-for="item in arr" :key="item">{{item}}</li>
    </div>
</template>
<script>
export default {
    inheritAttrs:false,
    data(){
        return{
            arr:[1,2,3,4]
        }
    },
    methods:{
        click(){
            this.arr[3] = 10
            console.log(this.$router)
            console.log(this.$route.matched)
            console.log(this.$router.currentRoute)
            console.log(this.$router.getMatchedComponents())
        },
        change(){
            this.$set(this.arr,'3',10)
            this.arr[3] = 10
        }
    }
}
</script>