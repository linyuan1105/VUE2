<template>
    <div>
        <ul>
            <li><router-link to="/trances/trances1"  activeClass="myactiveClass" event="click">trances1</router-link></li>
            <li><router-link to="/trances/trances2" event="click">trances2</router-link></li>
            <li><router-link to="/trances/trances3" event="click">trances3</router-link></li>
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
    inheritAttrs:false,
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
    height: 200px;
    width: 200px;
    border: 5px solid rebeccapurple;
}
.button{
    position: fixed;
    top: 100px;
}
</style>