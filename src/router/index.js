import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import router from '@/components/router'
import M404 from '@/components/M404'
import staticValue from '@/components/staticValue'
import trances from '@/components/trances'
import trances1 from '@/components/trances1'
import trances2 from '@/components/trances2'
import trances3 from '@/components/trances3'
Vue.use(Router)
const scrollBehavior = function (to, from, savedPosition) {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}

    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash

      // specify offset of the element
      if (to.hash === '#anchor2') {
        position.offset = { y: 100 }
      }

      // bypass #1number check
      if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
        return position
      }

      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return false
    }

    return new Promise(resolve => {
      // check if any matched route config has meta that requires scrolling to top
      if (to.matched.some(m => m.meta.scrollToTop)) {
        // coords will be used if no selector is provided,
        // or if the selector didn't match any element.
        position.y = to.meta.length
        console.log(to.meta)
        console.log(position)
      }

      // wait for the out transition to complete (if necessary)
      this.app.$root.$once('triggerScroll', () => {
        // if the resolved position is falsy or an empty object,
        // will retain current scroll position.
        resolve(position)
      })
    })
  }
}
export default new Router({
  mode:'history',
  scrollBehavior,
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
          meta:{
            roles:['index']
          }
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
      path:'/trances',
      name:'trances',
      component:trances,
      children:[
        {
          path:'trances1',
          name:'trances1',
          component: trances1,
          meta: { scrollToTop: true,length:1000 }
        },
        {
          path:'trances2',
          name:'trances2',
          component: trances2,
          meta: { scrollToTop: true,length:300 }
        },
        {
          path:'trances3',
          name:'trances3',
          component: trances3,
          meta: { scrollToTop: true,length:0 }
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
      meta:{
        roles:['dycindex']
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
