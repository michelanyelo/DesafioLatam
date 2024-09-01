<script>
export default {
    name: 'TodoComponent',
    data() {
        return {
            nuevaTarea: '',
            tareas: []
        };
    },
    methods: {
        // agregarTareaAvanzado() {
        //     if (this.nuevaTarea.trim() !== '') {
        //         this.tareas.push({
        //             texto: this.nuevaTarea,
        //             completada: false
        //         });
        //         this.nuevaTarea = '';
        //     }
        // },
        agregarTarea() {
            // variable temporal para obtener la nueva tarea
            const tareaAgregar = this.nuevaTarea

            // push al arreglo de tareas
            this.tareas.push(tareaAgregar)

            // limpiamos variable de estado
            this.nuevaTarea = ''
        }
    }
}
</script>
<template>
    <form @submit.prevent="agregarTarea">
        <input type="text" v-model="nuevaTarea">
        <button type="submit">ToDo</button>
    </form>

    <ul>
        <li v-for="(tarea, idx) in tareas" :key="idx">{{ tarea }}</li>
    </ul>
</template>

<style scoped></style>