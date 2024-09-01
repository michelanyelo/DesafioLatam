<script>
export default {
    name: 'TodoComp',
    props: ['listaTareas'],
    data() {
        return {

        };
    },
};
</script>
<template>
    <div class="tarea">
        <ul>
            <li v-for="(tarea, idx) in listaTareas" :key="idx">{{ tarea }}, indice: {{ idx }}
                <button @click="$emit('eliminarTarea', idx)">Eliminar Tarea</button>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.tarea {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>