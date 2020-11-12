<template>
  <div class="hello">
    
    <router-view />
    
    <div class="line">组件分割线</div>
    <div is="slotScope">
      
    </div>
    
    <blogPost>
      <template v-slot:header>
        <h1>About Me</h1>
      </template>
      <p>Here's some page content</p>
      <template v-slot:footer>
        <p>Copyright 2016 Evan You</p>
      </template>
    </blogPost>
    
    <div class="line">组件分割线</div>
    {{name.cn}}
    {{name.en}}
    {{computedName2}}
    {{computedName}}<!--111111111111-->
    <button @click="click" v-my-directive>click</button>
    <render :icon="1" :title="12" />
    
    <div class="line">组件分割线</div>
    <slotScope
      name="linyuan"
      @grand="grand" ooo="456" :key="'sssss'" att="computedName" :attname="attname" v-bind="$attrs" v-on="$listeners">
      <template v-slot="scope">
        <h1>默认插槽</h1>
        <div>{{scope}}</div>
      </template>
      <template v-slot:body>
        <h1>body改变</h1>
      </template>
      <template v-slot:footer="scope">
        <h1>footer</h1>
        <div>{{scope}}</div>
      </template>
    </slotScope>
    
    <div class="line">组件分割线</div>
    <nameSlots>
      <template v-slot:header>
        <h1>header</h1>
      </template>
      <template v-slot:body="SlotBody">
        <h1>{{SlotBody}}</h1>
      </template>
      <template v-slot:footer>
        <h1>footer</h1>
      </template>
    </nameSlots>
    <div class="line">组件分割线</div>
    <extend>
      <template v-slot:header>
        <h1>header</h1>
      </template>
      <template v-slot:body="SlotBody">
        <h1>{{SlotBody}}</h1>
      </template>
      <template v-slot:footer>
        <h1>footer</h1>
      </template>
    </extend>
  </div>
</template>

<script>
import extend from './extend'
import nameSlots from './nameSlots'
import slotScope from './slotScope'
import blogPost from './blog-post'
import render from './render'
export default {
  comments:true,
  name: 'HelloWorld',
  components: { render,blogPost,slotScope,nameSlots,extend },
  computed:{
    computedName:function(){
      let name = this
      console.log(this)
      return 'computedName'
    },
    computedName2:()=>{
      let name = this
      console.log(this)
      return 'computedName2'
    }
  },
  watch: {
    name:[
      {
        handler:function(val,newval){
          console.log(val,newval)
        }
      },
      {
        handler:function(val,newval){
          console.log(val,newval)
        }
      }
    ]
  },
  data () {
    return {
      attname:{
        name:'attrlinyuan'
      },
      name: {
        cn: '林园'
      },
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
  },
  methods: {
    grand(){
      this.$forceUpdate()
      console.log('grand')
    },
    attrclic(){
      console.log('attr')
    },
    click() { 
      console.log(this.$attrs)
      console.log(this.$isServer)
      this.$set(this.name, 'en','linyuan')
    }
  }
}
</script>
<style scoped>
.line{
  width: 1000px;
  height:20px;
  background :red;
}
</style>
