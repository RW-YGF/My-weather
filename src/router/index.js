import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/details/:city',
    //path: '/details',
    name: 'Details',
    component: () => import('../views/Details.vue'),
  },
  {
    path: '/search/:city',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
