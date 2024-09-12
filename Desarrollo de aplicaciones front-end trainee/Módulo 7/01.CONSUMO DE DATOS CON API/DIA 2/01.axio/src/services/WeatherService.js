import axios from "axios";
import { ref } from 'vue'

class WeatherService {
    constructor() {
        this.weatherReportCountry = ref([]) // variable de estado reactiva vacia
    }

    async fetchWeatherCountry() {
        try {
            const url = 'https://api.gael.cloud/general/public/clima'
            const { data } = await axios.get(url)
            this.weatherReportCountry.value = data
            // console.table(data)
        } catch (error) {
            console.error(error)
        }
    }
}

export default WeatherService