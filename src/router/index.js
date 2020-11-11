import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import router from '@/components/router'
import M404 from '@/components/M404'
import staticValue from '@/components/staticValue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path: 'index',
          name: 'index',
          component: index,
        },
        {
          path: 'router',
          name: 'router',
          beforeEnter:(to,from,next) => {
            console.log('局部守卫+++++++++++++++++')
            next()
          },
          components:{
            default: router
          } ,
          alias:'routerAlias',
          props:true
        }
      ]
    },
    {
      path: '/dycRouter/:routerProps',
      name: 'dycindex',
      components: {
          default:router,
          index: index,
          M404:M404
      },
      props:{
        default:true,
        M404:route=>({
          fnProps:route.params
        })
      }
    },
    {
      path:'/staticValue',
      component:staticValue,
      props: route=>({
        query:route.params
      })
      // props:{ //静态方式传参
      //   staticValue:'staticValue+1'
      // }
    },
    {
      path: '*',
      name: 'M404',
      components:{
        default: M404,
        index:index
      },
      props:{
        staticValue:'staticValue'
      }
    }
  ]
})
