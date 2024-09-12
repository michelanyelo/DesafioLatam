import axios from "axios";
import { ref } from "vue";

class IndicadorService {
    constructor() {
        this.indicadores = ref({});
    }

    async setIndicadores() {
        try {
            const url = 'https://mindicador.cl/api'
            const { data } = await axios.get(url);
            this.indicadores.value = data;
        } catch (error) {
            console.error(error)
        }
    }
}

export default IndicadorService