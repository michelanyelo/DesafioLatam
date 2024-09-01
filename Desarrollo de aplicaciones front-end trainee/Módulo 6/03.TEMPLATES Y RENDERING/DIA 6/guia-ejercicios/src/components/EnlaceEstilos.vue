<script>
export default {
    name: 'EnlaceEstilos',
    data() {
        return {
            fondo: "",
            colores: ["green", "purple", "pink", "black"],
            textSeparation: "",
            backgroundBox: "",
            hora: ""
        }
    }
}
</script>
<template>
    <div class="container">
        <label for="selectBackground">Selecciona background color texto: </label>
        <select id="selectBackground" v-model="fondo">
            <option v-for="(color, idx) in colores" :key="idx">{{ color }}</option>
        </select>
        <label for="textSpacing">Selecciona rango del letter spacing: </label>
        <input id="textSpacing" type="range" min="0" max="20" v-model="textSeparation">
        <h1 :style="{ background: fondo, letterSpacing: textSeparation + 'px' }"
            :class="{ 'text-white': ['black'].includes(fondo) }">Enlace de estilos</h1>
        <label for="colorBox">Selecciona un background color para la caja</label>
        <input type="color" id="colorBox" v-model="backgroundBox">
        <div class="box" :style="{ background: backgroundBox }"></div>
        <label for="horarios">Selecciona un horario:</label>
        <input type="time" v-model="hora">

        <div v-if="hora && hora < '12:00'" :style="{ backgroundColor: 'lightblue' }" class="etapa-dia">
            <h1>Mañana</h1>
        </div>

        <div v-else-if="hora && hora >= '12:00' && hora < '19:00'" :style="{ backgroundColor: 'lightgoldenrodyellow' }"
            class="etapa-dia">
            <h1>Tarde</h1>
        </div>

        <div v-else-if="hora && hora >= '19:00'" :style="{ backgroundColor: 'lightslategray' }" class="etapa-dia">
            <h1>Noche</h1>
        </div>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
}

.text-white {
    color: white;
}

.box {
    width: 400px;
    height: 40px;
}

.etapa-dia{
    width: 100%;
    text-align: center;
    padding: 10px;
    color: black;
}
</style>
