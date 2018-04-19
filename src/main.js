// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueJsonp from 'vue-jsonp'
import Toast from './store/toast'
import VueScroller from 'vue-scroller'

Vue.use(VueScroller)
Vue.use(Toast)

Vue.use(VueJsonp)

Vue.use(VueAxios, axios)

//懒加载
Vue.use(VueLazyLoad,{
  error:'./static/error.png',
  loading:'./static/loading.gif'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
