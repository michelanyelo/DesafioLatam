import { defineStore } from "pinia";
import { ref } from 'vue'
import axios from 'axios'

export const useUfStore = defineStore("uf", () => {
    const uf = ref(null)
    async function fetchUf() {
        try {
            const url = '/api/uf.json'
            const response = await axios.get(url);
            const { data } = response
            uf.value = data
        } catch (error) {
            console.error
        }
    }

    return {
        uf,
        fetchUf
    }
})