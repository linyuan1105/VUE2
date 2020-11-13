<template>
    <div>attrs:{{$attrs}}+{{name}}+{{$listeners}}
        <button @click="attr_listener">attr_listener</button>
      <grangd routerProps="routerProps" v-on="$listeners" v-bind="$attrs"/>
        <div>default</div>
      <slot name="header">
          <h1>header</h1>
      </slot>
      <slot name="body" :age="age" :attr="attr">
          <h1>{{attr.en}}body</h1>
      </slot>
      <slot :data="VSlot"></slot>
      <slot name="footer" data="footer">
          <h1>body</h1>
      </slot>
    </div>
</template>

<script>
import grangd from './grangd'
export default {
    inheritAttrs:true,
    components:{ grangd },
    props:{
        name:{
            type:String,
            default: ()=>'string'
        }
    },
    mounted(){
        console.log(this)
        console.log(this.$attrs)
        console.log(this.$listeners)
    },
    data(){
        return {
            attr:{
                en:'属性',
                cn:'attr'
            },
            age:{
                en:12,
                ch:'十二'
            },
            VSlot:{
                name:'v-slot'
            }
        }
    },
    methods:{
        attr_listener(){
            console.log(this.$attrs)
            console.log(this.$listeners)
            console.log(this.$route)
            console.log(this.$router)
        }
    }
    
}
</script>