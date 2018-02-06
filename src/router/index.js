import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header'
import Content from '../components/content.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ContentContent',
      component: Content
    }
  ]
})
