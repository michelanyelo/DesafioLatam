<script>
export default {
    nombre: 'ConditionalRender',
    data() {
        return {
            mostrarIf: true,
            mostrarShow: true,
            diasSemana: ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
        }
    }
}
</script>
<template>
    <h1>Renderizado Condicional</h1>
    <input type="checkbox" v-model="mostrarIf" />Mostrar imagen
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTdGlWNHzL9KOVU8rFnb7hKH0F2mCBVsv8WA&s" alt=""
        v-if="mostrarIf">

    <h1>Renderizado v-show</h1>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTdGlWNHzL9KOVU8rFnb7hKH0F2mCBVsv8WA&s" alt=""
        v-show="mostrarShow">

    <h1>Renderizado ciclo for</h1>
    <ul>
        <li v-for="(dia, idx) in diasSemana" :key="idx">{{ dia }}</li>
    </ul>
</template>
<style scoped></style>