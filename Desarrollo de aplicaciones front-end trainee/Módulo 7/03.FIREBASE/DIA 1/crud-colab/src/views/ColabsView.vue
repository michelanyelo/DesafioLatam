<template>
    <div>
        <h1>Colaboradores</h1>
        <ColaboradoresList />

        <h2>Nuevo Colaborador</h2>
        <NewColab />
    </div>
</template>

<script setup>
import ColaboradoresList from '@/components/colaboradores/ColaboradoresList.vue';
import NewColab from '@/components/colaboradores/NewColab.vue';
</script>
<style scoped></style>