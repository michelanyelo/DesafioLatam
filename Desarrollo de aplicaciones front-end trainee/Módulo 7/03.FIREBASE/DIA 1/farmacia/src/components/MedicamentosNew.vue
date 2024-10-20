<script setup>
import { ref } from 'vue'
import { useMedicamentosStore } from '@/stores/medicamentos'

const nombreMedicamento = ref('')
const medicamentosStore = useMedicamentosStore()

function handleAddMedicamento() {
    medicamentosStore.addMedicamento(nombreMedicamento.value)
}

</script>
<template>
    <div>
        <form @submit.prevent="">
            <label for="nombre-medicamento">Nombre Medicamento</label>
            <input type="text" id="nombre-medicamento" v-model="nombreMedicamento" required>
            <button type="submit" @click="handleAddMedicamento">Agregar Medicamento</button>
        </form>
    </div>
</template>

<style scoped></style>