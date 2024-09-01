<script>
export default {
    name: 'ForForm',
    data() {
        return {
            selectedOption: '0', // Valor inicial
            dias: [
                { text: 'Selecciona un dia de la semana:', value: '0' },
                { text: 'Lunes', value: '1' },
                { text: 'Martes', value: '2' },
                { text: 'Miércoles', value: '3' },
                { text: 'Jueves', value: '4' },
                { text: 'Viernes', value: '5' },
                { text: 'Sábado', value: '6' },
                { text: 'Domingo', value: '7' }
            ],
        }
    },
    computed: {
        selectedDia() {
            // Encuentra el objeto que coincide con el valor seleccionado
            const dia = this.dias.find(dia => dia.value === this.selectedOption);
            // Retorna el texto del día si existe, de lo contrario una cadena vacía
            return dia ? dia.text : '';
        }
    }
}
</script>

<template>
    <label for="diasSelect">Selecciona un dia de la semana:</label>
    <select v-model="selectedOption" id="diasSelect">
        <option v-for="dia in dias" :key="dia.value" :value="dia.value">{{ dia.text }}</option>
    </select>
    <h2>Opción seleccionada es: {{ selectedDia }}</h2>
    <h2>Value seleccionado es: {{ selectedOption }}</h2>
</template>

<style scoped></style>
