<template>
    <div>
        <!-- formulario -->
        <CreateToDoForm @submit-tarea="agregarTarea" />
        <!-- lista tareas -->
        <ToDoList :listaTareas="tareas" @elimina-tarea="eliminarTarea" @cambiar-estado="cambiarEstado" />
    </div>
</template>

<script>
import CreateToDoForm from './CreateToDoForm.vue'
import ToDoList from './ToDoList.vue'
export default {
    name: 'ToDo',
    components: { CreateToDoForm, ToDoList },
    data() {
        return {
            tareas: [
                { id: 0, title: 'Tomar mate', isDone: false },
                { id: 1, title: 'Comer completo', isDone: false },
                { id: 2, title: 'Ver futbol', isDone: false }
            ]
        };
    },
    methods: {
        agregarTarea(tarea) {
            const nuevaTarea = { id: new Date().getTime(), title: tarea, isDone: false }
            this.tareas.push(nuevaTarea)
        },

        eliminarTarea(id) {
            this.tareas = this.tareas.filter(tarea => tarea.id !== id)
        },

        cambiarEstado(id) {
            this.tareas = this.tareas.map(tarea => {
                if (tarea.id === id) {
                    return { ...tarea, isDone: !tarea.isDone }
                }
                return tarea
            })
        }
    },
};
</script>

<style scoped></style>