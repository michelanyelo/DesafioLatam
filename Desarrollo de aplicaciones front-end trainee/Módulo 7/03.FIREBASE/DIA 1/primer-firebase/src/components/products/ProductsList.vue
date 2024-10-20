<script setup>
/**
 * Componente usando
 *  Composition API
 * 
 * getFirestore -> trae el conector de DB
 * collection -> permite leer registros o coleccines
 **/
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import firebaseApp from '@/firebaseApp'
import { ref, onMounted } from 'vue'

const productos = ref([])

onMounted(async () => {
    try {
        /** trae la base de datos, en base a nuestra configuración */
        const db = getFirestore(firebaseApp)
        /**
         * usa la db, y el nombre de colección
         * querySnapshot es una "foto" de la base de datos
         */
        const querySnapshot = await getDocs(collection(db, 'productos'))
        querySnapshot.forEach((doc) => {
            /**
             * doc.id -> id del registro
             * doc.data() -> trae la data del registro
             */
            productos.value.push({ id: doc.id, ...doc.data() })
        })
    } catch (error) {
        alert('No pudimos encontrar productos')
        console.error(error)
    }
})
</script>
<template>
    <ul>
        <li v-for="producto in productos" :key="producto.id">{{ producto.nombre }}</li>
    </ul>
</template>
