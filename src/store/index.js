import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new  Vuex.Store({
	state: {
		bannerList: [
			{
				id: null,
				srco: null,
				title: null,
				href: null	
			}
		],
		productList: [
			{
				id: null,
				ico: null,
				title: null,
				price: null,
				originalCost: null,
				details: null
				/*details: {
					tet: null,
					img: []
				},
				assess: [
					{
						id: null,
						userid: null,
						userpic: null,
						nikename: null,
						content: null,
						start: null,
						date: null		
					}
				]*/	
			}
	    ]
	},
	getters: {},
	mutations: {
		setBannerList: (state, data)=> {
			state.bannerList = data
		},
		setProductList:(state,data)=>{
			state.productList = data
		}
	},
	actions: {
		//获取首页banner图
		fetchBannerList (store, data) {
			store.commit('setBannerList', data)
		},
		fetchProductList (store, data) {
			store.commit('setProductList', data)
		}
	}
})
export default store

