import axios from 'axios'
import { ref } from 'vue'

class GithubProfile {
    constructor() {
        this.data = ref({})
    }

    async setData() {
        try {
            const url = 'https://api.github.com/users/michelanyelo'
            const { data } = await axios.get(url)
            this.data.value = data
        } catch (error) {
            console.error(error)
        }
    }
}
export default GithubProfile


