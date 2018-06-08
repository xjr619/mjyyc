// 引用模板
import home from '../page/home'
import login from '../page/login'
import detail from '../page/detail'
import RegitsterInGoods from '../components/RegitsterInGoods'
import OutGoodsReceipt from '../components/OutGoodsReceipt'
import CustomerInfo from '../components/CustomerInfo'
import SettleReceipt from '../components/SettleReceipt'
import StaffInfo from '../components/StaffInfo'
import InGoodsList from '../components/InGoodsList'

// 配置路由
export default [
  {
    path: '/',
    component: home,
    children: [
      {
        path: '',
        component: InGoodsList
      },
      {
        path: '/ingoods',
        component: RegitsterInGoods
      },
      {
        path: '/outgoods',
        component: OutGoodsReceipt
      },
      {
        path: '/customer',
        component: CustomerInfo
      },
      {
        path: '/settle',
        component: SettleReceipt
      },
      {
        path: '/staff',
        component: StaffInfo
      }
    ]
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/detail',
    component: detail
  },
  {
    path: '*',
    component: home
  }
]
