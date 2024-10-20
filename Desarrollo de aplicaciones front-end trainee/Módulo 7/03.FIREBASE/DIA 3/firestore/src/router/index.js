import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { onAuthStateChanged } from 'firebase/auth'
import { $auth } from '@/firebaseConfig'

// Función simplificada para obtener el estado de autenticación
const getCurrentUser = () =>
  new Promise((resolve, reject) =>
    onAuthStateChanged($auth, resolve, reject)
  )

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        login: true // Rutas que requieren autenticación
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const authRequired = to.meta.login

  if (authRequired) {
    try {
      const user = await getCurrentUser() // Espera el estado de autenticación
      if (user) {
        next() // Si el usuario está autenticado, continuar con la navegación
      } else {
        next({ name: 'login' }) // Si no está autenticado, redirigir al login
      }
    } catch (error) {
      console.error('Error al comprobar autenticación:', error)
      next({ name: 'login' }) // En caso de error, redirigir al login
    }
  } else {
    next() // Si no se requiere autenticación, continuar con la navegación
  }
})

export default router
