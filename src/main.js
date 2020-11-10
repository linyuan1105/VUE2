// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
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
  router,
  components: { App },
  template: '<App/>'
})
