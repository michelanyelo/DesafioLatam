<template>
    <h1>Ciclo de vida</h1>
    <div class="climas">
        <ol>
            <li v-for=" prop in clima" :key="prop.Codigo">
                <h2>{{ prop.Estacion }} ({{ prop.Codigo }})</h2>
                <p>{{ prop.Estado }}</p>
            </li>
        </ol>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'CicloVIda',
    setup() {
        // config inicial del componente
        console.log('setup')
        console.log('setup: palabra clave this', this)
        // console.log('setup: variable de estado', this.variableEstado)
    },
    beforeCreate() {
        console.log('beforeCreate')
        console.log('beforeCreate: palabra clave this', this)
        console.log('beforeCreate: variable de estado', this.variableEstado)
    },
    data() {
        console.log('data')
        console.log('data: palabra clave this', this)
        console.log('data: variable de estado', this.variableEstado)
        return {
            variableEstado: 'Hola mundo',
            clima: []
        };
    },
    created() {
        // ya esta creado el componente
        console.log('created')
        console.log('created: palabra clave this', this)
        console.log('created: variable de estado', this.variableEstado)
    },
    beforeMount() {
        console.log('beforeMount')
    },
    async mounted() {
        console.log('mounted')
        const url = 'https://api.gael.cloud/general/public/clima/'
        const { data } = await axios.get(url)
        this.clima = data
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    },
    beforeUnmount() {
        console.log('Antes del desmontado')
    },
    unmounted() {
        console.log('Ya está desmontado')
    }

};
</script>
<style scoped></style>