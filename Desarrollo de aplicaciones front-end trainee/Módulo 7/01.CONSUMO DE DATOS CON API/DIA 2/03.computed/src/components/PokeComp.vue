<template>
    <div id="myPoke">
        <!-- Mostrar el único Pokémon sin usar v-for -->
        <div v-if="pokemon">
            <img :src="pokemon.img" :alt="pokemon.nombre">
            <h3>{{ pokemon.id }} {{ pokemon.nombre }}</h3>
        </div>
    </div>
</template>

<script>
import Pokedata from '@/services/PokedataService';

export default {
    name: 'PokeComp',
    data() {
        return {
            pokemons: null
        };
    },
    async mounted() {
        await this.getData();
    },
    methods: {
        async getData() {
            const pokemonClass = new Pokedata();
            await pokemonClass.setData();
            this.pokemons = pokemonClass.data.value;
        }
    },
    computed: {
        pokemon() {
            // Verificar que los datos están disponibles y retornarlos en el formato esperado
            if (this.pokemons) {
                return {
                    nombre: this.pokemons.name,
                    img: this.pokemons.sprites.other['official-artwork'].front_default,  // Imagen oficial
                    id: this.pokemons.id
                };
            }
            return null; // Retorna null si no hay datos disponibles
        }
    }
};
</script>

<style scoped></style>
