import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useDolarStore = defineStore("dolar", () => {
    const dolar = ref(null)
    async function fetchDolar() {
        try {
            const url = 'https://mindicador.cl/api'
            const response = await axios.get(url);
            const { data } = response
            dolar.value = data.dolar
        } catch (error) {
            console.error(error)
        }
    }


    return {
        dolar,
        fetchDolar
    }
})