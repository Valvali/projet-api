import Vue 				from 'vue'
import VueRouter 	from 'vue-router'
import Home 			from '../components/Home'
import Signin 		from '../components/Signin'


Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{path: '/', component: Home},
		{path: '/signin', name: 'signin', component: Signin},
	]
})
