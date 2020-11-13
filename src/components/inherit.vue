<template>
  <div class="home">
    <mytest  :title="title" :massgae="massgae"></mytest>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      title:'title1111',
      massgae:'message111'
    }
  },
  components:{
    'mytest':{
      template:`<div>这是个h1标题{{title}}</div>`,
      props:['title'],
      inheritAttrs:false,
      data(){
        return{
          mag:'111'
        }
      },
      created:function(){
        console.log(this.$attrs)//注意这里
      }
    }
  }
}
</script>