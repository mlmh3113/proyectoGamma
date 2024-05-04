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
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactoView.vue')
    },
    {
      path:'/blog',
      name:'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path:'/diseno-web-profesional',
      name:'diseno-web-profesional',
      component: () => import('../views/DisenoWebProfesionalView.vue')
    }

  ]
})

export default router
