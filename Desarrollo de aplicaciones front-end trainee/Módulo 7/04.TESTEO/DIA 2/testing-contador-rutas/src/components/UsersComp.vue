<script setup>
import { ref } from 'vue'

const users = ref([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 3, name: 'Bob Smith', email: 'bob@example.com' }
])
</script>

<template>
    <div>
        <ul>
            <li v-for="user in users " :key="user.id">{{ user.name }}</li>
        </ul>
    </div>
</template>

<style scoped></style>