// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import '../build/css/mui.css'
import '../build/css/icons-extra.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import moment from 'moment'
// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)
Vue.http.options.root='http://47.89.21.179:8080'
Vue.use(Mint)

Vue.config.productionTip = false
Vue.filter('dataFormat',function (dataStr,pattren='YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattren)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
