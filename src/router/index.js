import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index'
import Products from '../components/products'
import Setting from '../components/setting'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: "index",
      component: Index
    },
    {
      path: '/products',
      name: "products",
      component: Products
    },
    {
      path: '/setting',
      name: "setting",
      component: Setting
    },
  ]
})
