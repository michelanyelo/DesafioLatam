import { describe, it, expect, test } from "vitest";
import { mount } from "@vue/test-utils";

import ContadorComp from "@/components/ContadorComp.vue";

describe("CounterComponent", () => {
    const wrapper = mount(ContadorComp)

    it("El html se mantiene en las pruebas", () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test("Tiene un boton para aumentar contador con texto '+1'", () => {
        const btnAumentar = wrapper.find("#aumentar")

        expect(btnAumentar.text()).toBe("+1")
    })

    test("Tiene un boton para disminuir contador con texto '-1'", () => {
        const btnDisminuir = wrapper.find("#disminuir")

        expect(btnDisminuir.text()).toBe("-1")
    })

    it("Aumenta el contador en uno al hacer click en '+1'", async () => {
        const contadorAntesClick = Number(wrapper.find("#contador").text())

        const btnAumentar = wrapper.find("#aumentar")

        await btnAumentar.trigger("click")

        const contadorDespuesClick = Number(wrapper.find("#contador").text())

        expect(contadorAntesClick).toBeLessThan(contadorDespuesClick)
    })

    it("Disminuye el contador en uno al hacer click en '-1'", async () => {
        const contadorAntesClick = Number(wrapper.find("#contador").text())

        const btnDisminuir = wrapper.find("#disminuir")

        await btnDisminuir.trigger("click")

        const contadorDespuesClick = Number(wrapper.find("#contador").text())

        expect(contadorDespuesClick).toBeLessThan(contadorAntesClick)
    })
})