import Vue 				from 'vue'
import VueRouter 	from 'vue-router'
import Home 			from '../components/Home'
import Signin 		from '../components/Signin'
import Signup 		from '../components/Signup'



Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{path: '/', component: Home},
		{path: '/signin', name: 'signin', component: Signin},
		{path: '/signup', name: 'signup', component: Signup},

	]
})
