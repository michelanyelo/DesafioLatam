<script setup>
import { ref } from "vue"
import { $auth } from "@/firebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth"

const email = ref("")
const password = ref("")

const handleRegister = async () => {
    try {
        await createUserWithEmailAndPassword($auth, email.value, password.value)
        email.value = ""
        password.value = ""
    } catch (error) {
        console.error(error)
    }
}
</script>

<template>
    <div>
        <form @submit.prevent="handleRegister" class="registro">
            <h2>Registrate</h2>
            <label for="email">Ingresa tu Correo</label>
            <input type="email" id="email" v-model="email" required>
            <label for="password">Ingrese su Contraseña</label>
            <input type="password" id="password" v-model="password" required>

            <button type="submit">Registrarse</button>
        </form>
    </div>
</template>

<style scoped></style>