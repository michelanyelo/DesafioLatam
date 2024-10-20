import { describe, it, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import UsersComp from "@/components/UsersComp.vue";

describe("UsersComponent", () => {
    const wrapper = mount(UsersComp)

    it("El componente Users se mantiene en las pruebas", () => {
        expect(wrapper.element).toMatchSnapshot
    })

    test("Tiene una lista de usuarios, con el texto 'user.name'", async () => {
        // Simular la logica de montaje
        wrapper.vm.users = [{
            id: 1,
            name: 'Juan',
            email: 'juan@gmail.com',
        },
        {
            id: 2,
            name: 'Pedro',
            email: 'pedro@gmail.com',
        },
        {
            id: 3,
            name: 'Maria',
            email: 'maria@gmail.com',
        }]

        // Esperara a que vue actualice el DOM
        await wrapper.vm.$nextTick()

        const li = wrapper.findAll("li")

        expect(li[0].text()).toBe("Juan")
        expect(li).toHaveLength(3)
    })
})