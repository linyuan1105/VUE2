// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
console.log(router.beforeEach)
router.beforeEach((t,f,n)=>{
  console.log('全局')
  console.log(t)
  console.log(f)
  n()
})
Vue.use(Vuex)
const moduleA = {
  namespaced:true,
  state: () => ({ 
    count: 0
   }),
  mutations: { 
    increment (state) {
      // 这里的 `state` 对象是模块的局部状态
      state.count++
    }
   },
  actions: { 
    incrementIfOddOnRootSum ({ state, commit, rootState }) {
      if ((state.count + rootState.count) % 2 === 1) {
        commit('increment')
      }
    }
   },
  getters: { 
    doubleCount (state) {
      return state.count * 2
    },
    sumWithRootCount (state, getters, rootState) {
      return state.count + rootState.count
    }
   }
}

const moduleB = {
  namespace:true,
  state: () => ({ 
    count: 0
   }),
  mutations: { 
    increment (state) {
      // 这里的 `state` 对象是模块的局部状态
      state.count++
    }
   },
  actions: { 
    incrementIfOddOnRootSum ({ state, commit, rootState }) {
      if ((state.count + rootState.count) % 2 === 1) {
        commit('increment')
      }
    }
   }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})
Vue.use(VueAxios, axios)
Vue.directive('my-directive', {
  bind: function (e,a,b,c,d) {
    console.log(e,a,b,c,d, 'bind')
  },
  inserted: function (e,a,b,c,d) {
    console.log(e,a,b,c,d, 'inserted')
  },
  update: function (e,a,b,c,d) {
    console.log(e,a,b,c,d, 'update')
  },
  componentUpdated: function (e,a,b,c,d,) {
    console.log(e,a,b,c,d, 'componentUpdated')
  },
  unbind: function (e,a,b,c,d) {
    console.log(e,a,b,c,d, 'unbind')
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  store:store,
  components: { App },
  template: '<App/>'
})
