<template>
    <div>
        <ul>
            <li><router-link to="/trances/trances1"  activeClass="myactiveClass" event="mouseover">trances1</router-link></li>
            <li><router-link to="/trances/trances2" event="mouseover">trances2</router-link></li>
            <li><router-link to="/trances/trances3" event="mouseover">trances3</router-link></li>
        </ul>
        <div>
            
        <router-view />
        <transition name="fade" mode="in-out">
        <router-view class="view"></router-view>
      </transition>
      <button @click="afterLeave" class="button">afterLeave</button>
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        this.afterLeave()
    },
    methods:{
        afterLeave () {
      this.$root.$emit('triggerScroll')
    }
    }
}
</script>
<style  scoped>
li{
    height: 500px;
    width: 200px;
    border: 5px solid rebeccapurple;
}
.button{
    position: fixed;
    top: 100px;
}
</style>