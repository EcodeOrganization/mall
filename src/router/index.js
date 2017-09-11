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
      name: "Index",
      component: Index
    },
    {
      path: '/Products',
      name: "Products",
      component: Products
    },
    {
      path: '/Setting',
      name: "Setting",
      component: Setting
    },
  ]
})
