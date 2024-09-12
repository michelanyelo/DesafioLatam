import axios from "axios";
import { ref } from "vue";

class Pokedata {
    constructor() {
        this.data = ref(null)
    }

    async setData() {
        try {
            const url = 'https://pokeapi.co/api/v2/pokemon/25'
            const { data } = await axios.get(url)
            this.data.value = data
        } catch (error) {
            console.error(error)
        }
    }
}

export default Pokedata