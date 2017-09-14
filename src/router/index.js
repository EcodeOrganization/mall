import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index'
import Products from '../components/products'
import Setting from '../components/setting'
import Ibanner from '../components/common/banner'


Vue.use(Router)

export default new Router({
	linkActiveClass: 'active',
	 mode: 'history',
  routes: [
    {
      path: '/',
      name: "index",
      component: Index
    },
     {
      path: '/index',
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
    {
      path: '/ibanner',
      name: "ibanner",
      component: Ibanner
    }
  ]
})
