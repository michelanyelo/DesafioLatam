import { createStore } from "vuex";

export default createStore({
    state: {
        count: 0,
        nombre: "Miguel Monzon",
        carrera: "Estudiante de FrontEnd Vue JS"
    },
    mutations: {
        increment(state) {
            state.count++;
        },
    },
    actions: {},
    modules: {},
})