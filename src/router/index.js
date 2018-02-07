import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header'
import Content from '../components/content.vue'
import Profile from '../components/profile.vue'
import Test from '../components/test.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'content',
      component: Content
    },
    {
    	path:'/user/:id',
    	name:'users',
    	component: Profile
    },
    {
      path: '/tt',
      name: 'text',
      component: Test
    },
  ]
})
