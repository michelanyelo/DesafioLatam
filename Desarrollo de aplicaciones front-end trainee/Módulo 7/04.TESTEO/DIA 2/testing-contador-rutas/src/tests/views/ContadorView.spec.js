import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue";
import { describe, it, expect } from "vitest";
import router from "@/router";
import ContadorView from "@/views/ContadorView.vue";

describe("Renderiza CounterView despues de navegar a la ruta 'counter'", async () => {
    const routerPruebas = createRouter({
        history: createWebHistory(),
        routes: [
            {
                path: "/contador",
                name: "contador",
                component: ContadorView
            }
        ]
    })

    it("Navega y renderiza la vista correspondiente", async () => {
        routerPruebas.push({ name: "contador" })
        await routerPruebas.isReady()

        const wrapper = mount(App, {
            global: {
                plugins: [router],
            }
        })

        expect(wrapper.findComponent(ContadorView).exists()).toBeTruthy
    })
})