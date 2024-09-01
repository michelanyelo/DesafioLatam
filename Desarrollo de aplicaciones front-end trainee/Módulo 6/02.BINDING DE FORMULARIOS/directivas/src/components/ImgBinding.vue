<script>
export default {
    name: 'ImgBinding',
    data() {
        return {
            source: '', // Asegúrate de usar "source" aquí
            alt: 'Ciudad de Grecia',
        }
    }
}
</script>
<template>
    <h1>Mi ciudad favorita:</h1>
    <p>Escribe la ruta de la imagen "src/assets/grecia.jpg"</p>
    <input type="text" v-model="source"> <!-- Aquí enlazas "source" -->
    <img :src="source" v-bind:alt="alt"> <!-- Cambia "src" por "source" -->
</template>
<style scoped></style>
