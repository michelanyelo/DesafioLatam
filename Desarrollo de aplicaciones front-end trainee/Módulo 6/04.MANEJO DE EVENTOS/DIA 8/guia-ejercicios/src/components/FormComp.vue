<template>
    <form @submit.prevent="addPersona" class="w-50 mx-auto">
        <div class="mb-3">
            <label for="InputName" class="form-label">Nombre: </label>
            <input type="text" class="form-control" id="InputName" v-model="namePersona">
        </div>
        <div class="mb-3">
            <label for="InputImg" class="form-label">Avatar: </label>
            <input type="text" class="form-control" id="InputImg" v-model="avatarPersona">
        </div>
        <div class="mb-3">
            <label for="InputEmail" class="form-label">Email: </label>
            <input type="text" class="form-control" id="InputEmail" v-model="emailPersona">
        </div>
        <button type="submit" class="btn btn-primary">Agregar</button>
        <button type="button" class="btn btn-secondary" @click="limpiarFormulario">Limpiar</button>
    </form>
    <UsuarioComp :personas="personas" @elimina-persona="eliminarPersona" />
</template>

<script>
import UsuarioComp from './UsuarioComp.vue';

export default {
    name: 'FormComp',
    components: { UsuarioComp },
    data() {
        return {
            namePersona: '',
            avatarPersona: '',
            emailPersona: '',
            personas: []
        };
    },
    methods: {
        addPersona() {
            const nuevaPersona = {
                id: new Date().getTime(),
                namePersona: this.namePersona,
                avatarPersona: this.avatarPersona,
                emailPersona: this.emailPersona,
            };
            this.personas.push(nuevaPersona);
            console.log('Persona registrada:', nuevaPersona);
            this.limpiarFormulario();
        },
        limpiarFormulario() {
            this.namePersona = '';
            this.avatarPersona = '';
            this.emailPersona = '';
        },
        eliminarPersona(id) {
            this.personas = this.personas.filter(persona => persona.id !== id)
        }
    }
};
</script>

<style scoped></style>
