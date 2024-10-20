<script setup>
import { ref } from "vue"

const contador = ref(0)

const aumentar = () => {
    contador.value++
}

const disminuir = () => {
    contador.value--
}
</script>

<template>
    <div>
        <h2>Contador</h2>
        <p id="contador">{{ contador }}</p>

        <button @click="disminuir" id="disminuir">-1</button>
        <button @click="aumentar" id="aumentar">+1</button>
    </div>
</template>

<style scoped></style>