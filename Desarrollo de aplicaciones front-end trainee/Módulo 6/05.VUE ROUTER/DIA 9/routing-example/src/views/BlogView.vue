<template>
    <div id="myBlog">
        <RouterLink :to="anteriorEntrada">Anterior</RouterLink>
        <RouterLink :to="siguienteEntrada">Siguiente</RouterLink>

        <!-- Mostrar el título del post actual -->
        <h1>{{ tituloEntrada }}</h1>

        <ul>
            <li v-for="post in posts" :key="post.id">
                <RouterLink :to="`/blog/${post.id}`">{{ post.titulo }}</RouterLink>
            </li>
        </ul>
        <button @click="volverInicio">Volver al Inicio</button>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const entrada = ref(Number(route.params.entrada));

const posts = [
    { id: 1, titulo: 'Introducción al desarrollo web' },
    { id: 2, titulo: 'Fundamentos de Vue.js' },
    { id: 3, titulo: 'Componentes en Vue' },
    { id: 4, titulo: 'Enrutamiento con Vue Router' },
    { id: 5, titulo: 'Buenas prácticas en desarrollo frontend' }
];

const maxId = posts.length;
const tituloEntrada = computed(() => posts.find(post => post.id === entrada.value)?.titulo || 'Entrada no encontrada');
const anteriorEntrada = computed(() => `/blog/${Math.max(1, entrada.value - 1)}`);
const siguienteEntrada = computed(() => `/blog/${Math.min(maxId, entrada.value + 1)}`);
// volver al inicio
const volverInicio = () => {
    router.push({ name: 'home' })
}

// actulizar dinamicamente el front
watch(route, () => entrada.value = Number(route.params.entrada));
</script>

<style scoped></style>