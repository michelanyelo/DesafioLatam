<template>
  <form @submit.prevent="enviarTarea">
    <div class="mb-3">
      <label for="newTask" class="form-label">Nueva tarea: </label>
      <input type="text" class="form-control" id="newTask" v-model="nuevaTarea">
    </div>
    <button type="submit" class="btn btn-success">Agregar tarea</button>
  </form>
</template>

<script>
export default {
  name: 'CreateToDoForm',
  data() {
    return {
      nuevaTarea: ''
    };
  },
  methods: {
    enviarTarea() {
      if (!this.nuevaTarea.trim()) return;
      this.$emit('submit-tarea', this.nuevaTarea)
      this.nuevaTarea = ''
    }
  }
};
</script>

<style scoped>

</style>