import { describe, it, expect } from "vitest";
import ToDo from "../ToDo.vue";
import { shallowMount } from "@vue/test-utils";

describe("ToDo.vue", () => {
    const wrapper = shallowMount(ToDo)

    it("No hay tareas al iniciar", () => {
        const listaTareas = wrapper.findAll("[data-test='tarea']")

        console.log(listaTareas)
        expect(listaTareas).toHaveLength(0)
    })

    // Simulando submit
    it("Agrega una nueva tarea", async () => {
        const listaTareaInicial = wrapper.findAll("[data-test='tarea']")

        expect(listaTareaInicial).toHaveLength(0)

        // Comportamiento (1)crear nueva tarea (2)ejecutar submit
        await wrapper.find("[data-test = 'nueva-tarea']").setValue("Nueva Tarea")
        await wrapper.find("[data-test = 'submit']").trigger("submit")

        expect(wrapper.findAll("[data-test = 'tarea']")).toHaveLength(1)
    })

    // Simulando cambio de estado
    it("Marca una tarea como completada", async () => {
        await wrapper.find("[data-test = 'nueva-tarea']").setValue("Nueva Tarea 1")
        await wrapper.find("[data-test = 'nueva-tarea']").setValue("Nueva Tarea 2")
        await wrapper.find("[data-test = 'submit']").trigger("submit")

        // Encontrar todos los li
        const listaTareas = wrapper.findAll("[data-test = 'tarea']")
        // Almacenar primer li
        const primeraTarea = listaTareas.at(0)
        console.log(primeraTarea.html())

        // Del primer li ubicar input check
        const checkInput = primeraTarea.find("[type='checkbox']")
        // Simular click en check
        await checkInput.trigger("click")

        expect(primeraTarea.classes()).toContain("completed")
    })

    // Simulando envio de encabezado con prop
    it("Renderiza el h2 con props", () => {
        const wrapper = shallowMount(ToDo, {
            props: {
                encabezado: "Lista de tareas"
            }
        })

        expect(wrapper.find("h2").text()).toBe("Lista de tareas")
    })
})