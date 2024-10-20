<script setup>
import { ref } from "vue"

const tareas = ref([])
const nuevaTarea = ref("")

const handleNuevaTarea = () => {
    tareas.value.push({
        id: self.crypto.randomUUID(),
        todo: nuevaTarea.value,
        completed: false,
        userId: 1
    })
    nuevaTarea.value = ""
}

const handleCambioEstado = (id) => {
    let tarea = tareas.value.find(tarea => tarea.id === id) // Corregido aquí
    if (tarea) {
        tarea.completed = !tarea.completed
    }
}

defineProps(["encabezado"])
</script>

<template>
    <div>
        <h2>{{ encabezado }}</h2>
        <form @submit.prevent="handleNuevaTarea">
            <input type="text" data-test="nueva-tarea" v-model="nuevaTarea">
            <button type="submit" data-test="submit">Agregar nueva tarea</button>
        </form>
        <ul>
            <li v-for="tarea in tareas" :key="tarea.id" data-test="tarea"
                :class="tarea.completed ? 'completed' : 'incomplete'">{{
                    tarea.todo }}
                <input type="checkbox" @click="handleCambioEstado(tarea.id)" :checked="tarea.completed">
            </li>
        </ul>
    </div>
</template>

<style scoped>
.completed {
    text-decoration: line-through;
    color: gray;
}
</style>
