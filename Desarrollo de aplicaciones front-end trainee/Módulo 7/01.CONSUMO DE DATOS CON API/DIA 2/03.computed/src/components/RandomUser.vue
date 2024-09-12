<template>
    <div id="User">
        <div v-for="(foto, i) in fotosDeLosUsuarios" :key="i">
            <img :src="foto" alt="Foto de usuario">
        </div>
    </div>
</template>

<script>
import RandomUser from '@/services/RandomUserService';

export default {
    name: 'RandomUserComponent',  // Cambié el nombre del componente para evitar conflicto con el nombre del servicio
    data() {
        return {
            users: null,
        };
    },
    async mounted() {
        await this.getData();
    },
    methods: {
        async getData() {
            const randomUser = new RandomUser();
            await randomUser.setData();  // Método actualizado
            this.users = randomUser.data.value;
        }
    },
    computed: {
        fotosDeLosUsuarios() {
            return this.users ? this.users.map((usuario) => usuario.picture.large) : [];  // Verificación añadida
        }
    }
};
</script>

<style scoped></style>
