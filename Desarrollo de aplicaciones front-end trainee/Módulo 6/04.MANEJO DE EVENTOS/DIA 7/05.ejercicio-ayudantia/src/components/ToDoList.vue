<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  <ul class="list-group mt-3" v-if="listaTareas.length > 0">
    <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(tarea, idx) in listaTareas"
      :key="tarea.id" :style="{
        textDecoration: tarea.isDone ? 'line-through' : 'none'
      }" :class="{ 'list-item-done': tarea.isDone }">
      <span>
        <strong>{{ idx + 1 }}.</strong> {{ tarea.title }}
      </span>
      <div>
        <input type="checkbox" class="form-check-input me-2" @change="cambiarEstado(tarea.id)">
        <button class="btn btn-sm btn-danger" @click="enviarId(tarea.id)">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </li>
  </ul>
  <p v-else> Tu agenda de hoy está vacía</p>
</template>

<script>
export default {
  name: 'ToDoList',
  props: {
    listaTareas: Array
  },
  emits: ['elimina-tarea', 'cambiar-estado'],
  methods: {
    enviarId(id) {
      this.$emit("elimina-tarea", id)
    },
    cambiarEstado(id) {
      this.$emit("cambiar-estado", id)
    }
  }
};
</script>

<style scoped>
.list-item-done {
  opacity: 0.5;
}
</style>
