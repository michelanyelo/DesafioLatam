<template>
    <form @submit.prevent="handleSubmit">
        <label for="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre" v-model="nombreColab" required>
        <button type="submit">Crear Colaborador</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import firebaseApp from '@/firebaseColabs'

const db = getFirestore(firebaseApp)
const nombreColab = ref('')

const handleSubmit = async () => {
    try {
        const colabRef = collection(db, 'colaboradores')
        await addDoc(colabRef, { nombre: nombreColab.value })
        nombreColab.value = ''
        alert('Colaborador creado con éxito')
    } catch (error) {
        alert('No pudimos crear al colaborador')
        console.error(error)
    }

}

</script>
<style scoped></style>