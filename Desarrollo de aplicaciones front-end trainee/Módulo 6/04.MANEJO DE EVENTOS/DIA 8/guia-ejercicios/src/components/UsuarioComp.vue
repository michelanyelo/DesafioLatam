<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <div class="container" v-if="personas.length > 0">
        <div class="row">
            <div class="col-md-12">
                <div class="card" v-for="(persona, idx) in personas" :key="idx" style="width: 15rem;">
                    <img :src="persona.avatarPersona" class="card-img-top" :alt="'Avatar de' + persona.namePersona">
                    <div class="card-body">
                        <h5 class="card-title">{{ idx + 1 }} | {{ persona.namePersona }}</h5>
                        <p class="card-text">{{ persona.emailPersona }}</p>
                        <button class="btn btn-sm btn-danger" @click="eliminarPersona(persona.id)">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <p v-else>No se ha encontrado ningún registro.</p>
</template>

<script>
export default {
    name: 'UsuarioComp',
    props: {
        personas: Array
    },
    emits: ['elimina-persona'],
    methods: {
        eliminarPersona(id) {
            this.$emit('elimina-persona', id)
        }
    }
};
</script>
<style scoped></style>