// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'

// 入口文件
import App from './App.vue'

// 引用路由配置文件
import routes from './config/routes'

// vue设置插件路由vue-router
Vue.use(VueRouter)

// 使用配置文件规则
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
