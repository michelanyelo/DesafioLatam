import { defineStore } from "pinia"
import { $db } from "@/firebaseConfig"
import { ref } from "vue"
import { collection, onSnapshot } from "firebase/firestore"

export const useProductosStore = defineStore("productos", () => {
    const productos = ref([])
    const productosRef = collection($db, "productos")

    const fetchProductos = async () => {
        try {
            onSnapshot(productosRef, (snapshot) => {
                productos.value = snapshot.docs.map((doc) => ({ id: doc.ic, ...doc.data() }))
            })

        } catch (error) {
            console.error(error)
        }
    }

    return {
        productos,
        fetchProductos
    }
})