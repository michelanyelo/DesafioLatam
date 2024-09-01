<script>
export default {
    name: 'PersonaComponent',
    props: ['nombre', 'foto', 'descripcion'],
    data() {
        return {

        };
    },
};
</script>
<template>
    <div class="persona">
        <img :src="foto" alt="Foto de {{ nombre }}" class="avatar" />
        <h2>{{ nombre }}</h2>
        <p>{{ descripcion }}</p>
    </div>
</template>

<style scoped>
.avatar {
    background-size: cover;
    background-position: center;
    height: 200px;
    width: 200px;
    border-radius: 50%;
}

.persona {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>