import Vue from 'vue'
import Vuex from 'vuex'
import api from '../services/api'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		products: {},
		cart: {},
	},
	mutations: {
		initProducts (state, products) {
			state.products = products
		},
		initCart (state, cart) {
			state.cart = cart
		},
		emptyCart (state){
			state.cart = {}
		}
	},
	getters: {
		getProductById: (state) => (id) => {
			return state.products[id]
		},
		nbProductsInCart (state) {
			return Object.keys(state.cart).length
		},
		cartAmount (state) {
			let total = 0
			if (state.cart) {
				for (let i in state.cart) {
					total += state.cart[i].prix
				}
			}
			return total.toFixed(2)
		}

	},
	actions: {
		getChannels ({commit}) {
			api.get('/products').then((response) => {
				commit('initProducts', response.data)
			}).catch((error) => {
			  console.log(error)
			})
		},
		fetchCart ({commit}) {
			api.get('/cart').then((response) => {
				commit('initCart', response.data)
			}).catch((error) => {
			  console.log(error)
			})
		},
		emptyCart ({commit}) {
			api.delete('/cart').then(response => {
				commit('emptyCart')
			})
		},
		addProductToCart({commit}, product) {
			api.post(`/cart/${product.id}`).then(response => {
				commit('initCart', response.data)
			})
		},
		listenToProduct({commit}, product) {
			api.put(`/${product.id}/buy`).then(response => {
				commit('initCart', response.data)
			})
		}
	}
})
