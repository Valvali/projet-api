import Vue from 'vue'
import Router from 'vue-router'
import Signin from '@/components/Signin'

import store from '@/store'
import Chat from '@/components/Chat'
import TopBar from '@/components/TopBar'


Vue.use(Router)

export const router = new Router({
  routes: [
    {
    	path: '/',
    	name: 'chat',
    	component: Chat,
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin,
    },



  ]
})

router.beforeEach((to, from, next) => {
	if(to.name != 'signin' && ! store.getters['auth/isConnected']) {
    next({name: 'signin', query: {redirect: to.fullPath}})
  }
  else if (to.name == 'signin' && store.getters['auth/isConnected']) {
  	next({name: 'home'})
  }
  else {
    next()
  }
})
