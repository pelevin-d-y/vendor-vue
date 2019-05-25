import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Step1 from './views/Step1.vue'
import Step2 from './views/Step2.vue'
import Step31 from './views/Step3-1.vue'
import Step32 from './views/Step3-2.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/step1',
      name: 'step1',
      component: Step1
    },
    {
      path: '/step2',
      name: 'step2',
      component: Step2
    },
    {
      path: '/step31',
      name: 'step31',
      component: Step31
    },
    {
      path: '/step32',
      name: 'step32',
      component: Step32
    },
  ]
})
