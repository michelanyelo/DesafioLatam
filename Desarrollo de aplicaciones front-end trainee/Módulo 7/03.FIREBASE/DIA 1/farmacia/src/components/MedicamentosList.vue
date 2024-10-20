<script setup>
import { useMedicamentosStore } from '@/stores/medicamentos'
import { onMounted } from "vue"

const medicamentosStore = useMedicamentosStore()

onMounted(() => {
    medicamentosStore.fetchMedicamentos()
})

function handleDeleteMedicamento(id) {
    medicamentosStore.deleteMedicamento(id)
}

</script>
<template>
    <div>
        <h1>Listado de Medicamentos</h1>
        <ul>
            <li v-for="medicamento in medicamentosStore.medicamentos" :key="medicamento.id">{{ medicamento.nombre }}
                <button @click="handleDeleteMedicamento(medicamento.id)">Eliminar</button>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>