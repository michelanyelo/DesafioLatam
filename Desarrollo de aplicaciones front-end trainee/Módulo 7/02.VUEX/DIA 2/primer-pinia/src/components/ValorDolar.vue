<template>
    <h1>Valor del dólar hoy</h1>
    <p>{{ dolarStore.dolar.valor }}</p>
</template>

<script>
// importar stores
import { useDolarStore } from '@/stores/dolar'
import { mapStores } from 'pinia'
export default {
    // por convencion el spread va en computed
    computed: {
        ...mapStores(useDolarStore)
    },
    created() {
        this.dolarStore.fetchDolar()
    }
};
</script>
<style scoped></style>