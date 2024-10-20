<template>
    <div>
        <ul>
            <li v-for="colab in colabs" :key="colab.id">{{ colab.nombre }}
                <button @click="handleDelete(colab.id)">Eliminar</button>
            </li>

        </ul>
    </div>
</template>

<script setup>
import { getFirestore, collection, getDocs, onSnapshot, doc, deleteDoc } from 'firebase/firestore'
import firebaseApp from '@/firebaseColabs'
import { ref, onMounted } from 'vue'

const colabs = ref([])
const db = getFirestore(firebaseApp)

// getFirestore, collection, getDocs para lectura
onMounted(async () => {
    try {
        // escucha activa
        const colabRef = collection(db, 'colaboradores')
        onSnapshot(colabRef, (snapshot) => {
            colabs.value = snapshot.docs.map((doc) => ({
                id: doc.id, ...doc.data()
            }))
        })

        // escucha pasiva
        // const querySnapshot = await getDocs(collection(db, 'colaboradores'))
        // querySnapshot.forEach((doc) => {
        //     colabs.value.push({ id: doc.id, ...doc.data() })
        // })
    } catch (error) {
        alert('No encontramos colaboradores')
        console.error(error)
    }
})

// doc y deletedoc para eliminado
const handleDelete = async (id) => {
    console.log("Eliminando usuario con id: ", id)
    try {
        const colabRef = doc(db, 'colaboradores', id)
        await deleteDoc(colabRef)
        alert("Colaborador Eliminado")
    } catch (error) {
        alert("No se ha encontrado el ID del Colaborador")
        console.error(error)
    }
}

</script>
<style scoped></style>