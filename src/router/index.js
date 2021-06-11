import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/registrar',
    name: 'Registrar',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/planos',
    name: 'Plan',
    component: () => import('../views/Plan.vue')
  }
]

const router = new VueRouter({
  history,
  routes
})

export default router
