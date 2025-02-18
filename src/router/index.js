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
      path: '/my-projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/about-me',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact-me',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/my-projects/:project',
      name: 'project',
      component: () => import('../views/ProjectDetailsView.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    const appBody = document.getElementById('page')
    if (appBody) {
      appBody.scrollTo(0, 0)
    }
    return savedPosition || { top: 0 }
  }
})

export default router