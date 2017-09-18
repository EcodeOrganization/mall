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
		fetchBannerList (store) {
			axios.get('api/bannerlists').then((res) => {
		 		store.commit('setBannerList', res.data)
			}).catch((err) => {
				console.log(err)
			})
		},
		fetchProductList(store){
			axios.get('api/productList').
			then((res)=>{
				store.commit('setProductList',res.data);
			}).catch((err)=>{
				console.log(err);
			})
		}
	}
})
export default store

