<script setup>
import { ref } from "vue"
import { $auth } from "@/firebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "vue-router"

const email = ref("")
const password = ref("")
const router = useRouter()

const handleLogin = async () => {
    try {
        await signInWithEmailAndPassword($auth, email.value, password.value)

        router.push({ name: 'home' })
    } catch (error) {
        console.error(error)
    }
}
</script>

<template>
    <div>
        <h2>Inicia Sesión</h2>
        <form @submit.prevent="handleLogin">
            <label for="email">Ingresa tu Correo</label>
            <input type="email" id="email" v-model="email" required>
            <label for="password">Ingrese su Contraseña</label>
            <input type="password" id="password" v-model="password" required>

            <button type="submit">Iniciar Sesión</button>
        </form>
    </div>
</template>

<style scoped></style>