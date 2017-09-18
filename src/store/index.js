import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
		productList:[
			{
				ico:null,
				titee:null,
				details:null,
				price:null,		
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
		fetchBannerList (store, data) {
			store.commit('setBannerList', data)
		},
		fetchProductList(store){
			store.commit('setProductList', data)
		}
	}
})
export default store

