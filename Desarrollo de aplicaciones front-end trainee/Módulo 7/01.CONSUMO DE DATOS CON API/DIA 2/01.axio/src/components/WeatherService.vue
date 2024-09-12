<template>
    <h1>Consumiendo API Clima</h1>
    <button @click="getWeather">Obtener Clima</button>
    <p v-for="weather in weathers" :key="weather.Codigo">
        Temperatura: {{ weather.Temp }}°C -
        Comuna: {{ weather.Estacion }}
    </p>
</template>

<script>
import WeatherService from '@/services/WeatherService';

export default {
    name: 'WeatherService',
    data() {
        return {
            weathers: null
        }
    },
    methods: {
        async getWeather() {
            const ws = new WeatherService()
            await ws.fetchWeatherCountry()
            this.weathers = ws.weatherReportCountry
        }
    }
}
</script>
<style scoped></style>