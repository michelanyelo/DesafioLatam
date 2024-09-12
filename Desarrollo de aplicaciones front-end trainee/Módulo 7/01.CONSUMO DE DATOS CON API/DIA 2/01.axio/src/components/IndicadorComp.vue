<template>
    <h1>Consumiendo API Indicadores</h1>
    <button @click="getIndicadores">Obtener Indicadores</button>

    <table v-if="indicadores">
        <thead>
            <tr>
                <!-- Filtra las claves que no son necesarias -->
                <th v-for="(value, key) in filteredIndicadores" :key="key">{{ key }}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td v-for="(value, key) in filteredIndicadores" :key="key">{{ value.valor }}</td>
            </tr>
        </tbody>
    </table>

</template>

<script>
import IndicadorService from '@/services/IndicadorService';

export default {
    name: 'IndicadorComp',
    data() {
        return {
            indicadores: null
        };
    },
    computed: {
        // Computed property para filtrar las claves no deseadas
        filteredIndicadores() {
            if (!this.indicadores) return {};
            // Filtrar las claves que no queremos mostrar
            const { version, autor, fecha, ...filtered } = this.indicadores;
            return filtered;
        }
    },
    methods: {
        async getIndicadores() {
            const indicadoresService = new IndicadorService();
            await indicadoresService.setIndicadores();
            this.indicadores = indicadoresService.indicadores;
            console.log(this.indicadores);
        }
    }
};
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
}

th {
    background-color: #f2f2f2;
}
</style>