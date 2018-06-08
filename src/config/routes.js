// 引用模板
import home from '../page/home'
import login from '../page/login'
import detail from '../page/detail'

// 配置路由
export default [
  {
    path: '/',
    component: home
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/detail',
    component: detail
  }
]
