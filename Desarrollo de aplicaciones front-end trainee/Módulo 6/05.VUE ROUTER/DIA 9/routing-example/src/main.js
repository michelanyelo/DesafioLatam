import './assets/main.css'

/** Importa "creador de app" */
import { createApp } from 'vue'
/** Importa "componente App" */
import App from './App.vue'
/** Importa el router */
import router from './router'

/**
 * Se crea instancia de la aplicación
 * basado en componente App
 **/
const app = createApp(App)

/** Se indica que se usará el plugin router */
app.use(router)

/**
 * Se monta la app en el div#app
 **/
app.mount('#app')
