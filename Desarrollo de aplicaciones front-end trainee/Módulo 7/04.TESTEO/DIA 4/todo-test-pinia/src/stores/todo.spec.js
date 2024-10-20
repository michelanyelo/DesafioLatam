import { useTodoStore } from "./todo";
import { setActivePinia, createPinia } from "pinia";
import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";

describe("useTodoStore", () => {

    // Activamos helper (obligatorio)
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    // Espia falso - limpiar pruebas después de cada prueba
    afterEach(() => {
        vi.resetAllMocks()
    })

    // Set de datos falsos
    const dummyTodo = [
        { id: 1, todo: "Tarea 1", completed: false, userId: '' },
        { id: 2, todo: "Tarea 2", completed: true, userId: '' },
        { id: 3, todo: "Tarea 3", completed: true, userId: '' },
        { id: 4, todo: "Tarea 4", completed: false, userId: '' },
    ]

    it("crea una tarea sin completar", () => {
        const todoStore = useTodoStore()
        const tareasAntesDe = todoStore.filteredTodos.value.slice()

        todoStore.addTodo("Tarea 5")
        todoStore.addTodo("Tarea 6")

        const tareasDespuesDe = todoStore.filteredTodos.value.slice()

        expect(tareasDespuesDe).toHaveLength(tareasAntesDe.length + 2)
        expect(tareasDespuesDe[0].completed).toBe(false)
    })

    it("filtra por tareas incompletas", async () => {
        const todoStore = useTodoStore()

        // Inyección de data falsa a fetch
        const mockedFetch = vi.spyOn(globalThis, "fetch").mockResolvedValue({
            ok: true,
            json: () => Promise.resolve({ todos: dummyTodo })
        })

        await todoStore.fetchTodos()

        const todasLasTareas = todoStore.filteredTodos.value.slice()

        todoStore.filter = "finished"

        const tareasFiltradas = todoStore.filteredTodos.value.slice()

        expect(tareasFiltradas.every(tarea => tarea.completed)).toBe(true)

        // Restaurar fetch
        mockedFetch.mockRestore()
    })

    it("filtra por tareas completas", async () => {
        const todoStore = useTodoStore()

        // Inyección de data falsa a fetch
        const mockedFetch = vi.spyOn(globalThis, "fetch").mockResolvedValue({
            ok: true,
            json: () => Promise.resolve({ todos: dummyTodo })
        })

        await todoStore.fetchTodos()

        todoStore.filter = "unfinished"

        const tareasFiltradas = todoStore.filteredTodos.value.slice()

        expect(tareasFiltradas.every(tarea => !tarea.completed)).toBe(true)

        // Restaurar fetch
        mockedFetch.mockRestore()
    })

    it("bonus: test API", async () => {
    });

})
