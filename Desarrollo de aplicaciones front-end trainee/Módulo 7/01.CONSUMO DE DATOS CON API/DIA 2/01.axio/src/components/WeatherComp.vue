<template>
    <h1>Consumiendo API Clima</h1>
    <button @click="getWeather">Obtener Clima</button>
    <p v-for="weather in countryWeather" :key="weather.Codigo">
        Temperatura: {{ weather.Temp }}°C -
        Comuna: {{ weather.Estacion }}
    </p>
</template>

<script>
import axios from 'axios'
export default {
    name: 'WeatherComp',
    data() {
        return {
            countryWeather: []
        };
    },
    methods: {
        async getWeather() {
            try {
                const url = 'https://api.gael.cloud/general/public/clima'
                const { data } = await axios.get(url)
                this.countryWeather = data
                // console.table(data)
            } catch (error) {
                console.error(error)
            }
        }
    }
};
</script>
<style scoped></style>