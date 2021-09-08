import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News')
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('../views/Video')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
