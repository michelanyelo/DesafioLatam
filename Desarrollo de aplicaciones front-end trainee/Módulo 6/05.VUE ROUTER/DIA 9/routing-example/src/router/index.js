import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import ServicesView from '@/views/ServicesView.vue'
import BlogView from '@/views/BlogView.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  /** Arreglo con rutas */
  routes: [
    {
      path: '/', // ruta o direccion URL
      name: 'home', // nombre interno
      component: HomeView // componente que va a mostrar
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    /**
     * creamos nueva ruta con
     * parametro :entrada
     */
    {
      path: '/blog/:entrada',
      name: 'blog',
      component: BlogView
    },
    /**
     * ultimo lugar, ruta not found
     */
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    }
  ]
})

export default router
