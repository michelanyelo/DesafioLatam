<script>
export default {
    name: 'CirculosColores',
    data() {
        return {
            nuevoColor: '',
            colores: []
        };
    },
    methods: {
        agregarColor() {
            const color = this.nuevoColor
            this.colores.push(color)
            this.nuevoColor = ''
        }
    }
};
</script>
<template>
    <form @submit.prevent="agregarColor">
        <input type="text" v-model="nuevoColor" placeholder="Ingrese un color">
        <button type="submit">Agregar color</button>
    </form>
    <div v-for="(color, idx) in colores" :key="idx" :style="{ backgroundColor: color }" class="circle">
    </div>
</template>

<style scoped>

.circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
</style>