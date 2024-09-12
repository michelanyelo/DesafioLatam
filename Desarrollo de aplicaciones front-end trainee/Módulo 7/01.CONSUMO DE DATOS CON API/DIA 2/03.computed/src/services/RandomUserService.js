import axios from "axios";
import { ref } from "vue";

class RandomUser {
    constructor() {
        this.data = ref(null);
    }

    async setData() {
        try {
            const url = 'https://randomuser.me/api?results=30'
            const { data } = await axios.get(url)
            this.data.value = data.results
        } catch (error) {
            console.error(error)
        }
    }
}

export default RandomUser