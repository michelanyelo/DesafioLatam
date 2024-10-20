import { expect, describe, it } from "vitest";
import { mount } from "@vue/test-utils";
import CardComponent from "@/components/CardComponent.vue";

describe("CardComponent", () => {
    // Codigo para definir pruebas
    // Definimos propiedades dummy
    const dummyCardProp = {
        id: "1234",
        title: "Titulo desde padre",
        text: "Testeando a lo maldito",
        name: "Juanito",
        enlaces: {
            rrss: "Juanito"
        }
    }

    // Envoltorio para el componente
    const wrapper = mount(CardComponent, {
        props: {
            user: dummyCardProp
        }
    })


    // Prueba especifica
    // it("Haver a card title defined", () => {
    //     expect(wrapper.find(".card-title").exists()).toBe(true)
    // })

    // it("Haver a text title like 'Testing!'", () => {
    //     expect(wrapper.find("h2").text()).toBe("Testing!")
    // })

    it("Tener un titulo de card definido", () => {
        expect(wrapper.find("h2").text()).toEqual(dummyCardProp.title)
    })

    // prueba para el cuerpo de la carta
    it("El cuerpo de la carta tiene texto definido", () => {
        expect(wrapper.find(".card-text").text()).toEqual(dummyCardProp.text)
    })

    // Prueba texto boton
    it("El texto del boton hacia rrss con el nombre del usuario", () => {
        expect(wrapper.find("button.rrss").text()).toEqual(`RRSS: ${dummyCardProp.name}`)
    })
})