<script>
export default {
    name: 'InstrumentosComponent',
    props: ['nombre', 'foto', 'precio'],
    data() {
        return {

        };
    },
};
</script>
<template>
    <div class="instrumento">
        <img :src="foto" alt="Foto de {{ nombre }}" class="avatar" />
        <h2>{{ nombre }}</h2>
        <p>{{ precio }}</p>
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

.instrumento {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>