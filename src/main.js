// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// echarts版本要低于5,这里是4.9.0
import Echarts from 'echarts'

import VueWorker from 'vue-worker'

import { throttle2, debounce } from './utils/delay'

import auth from './utils/authority'

import websock from 'websocket'
// 导入iconfont
import './assets/icon/iconfont.css'


Vue.prototype.$throttle = throttle2
Vue.prototype.$debounce = debounce
Vue.prototype.$echarts = Echarts
// Vue.prototype.websock = websock;

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.use(VueWorker)

router.afterEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
