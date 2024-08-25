import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import('../views/ScheduleView.vue')
    },
    {
      path: '/showcase',
      name: 'showcase',
      component: () => import('../views/ShowcaseView.vue')
    },
    {
      path: '/aku',
      name: 'aku',
      component: () => import('../views/AKUView.vue')
    },
    {
      path: '/srk',
      name: 'srk',
      component: () => import('../views/SRKView.vue')
    }
  ]
})

export default router
