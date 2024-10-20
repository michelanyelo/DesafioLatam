<!-- LAS IMPORTACIONES DE VITEST ESENCIALES -->
<!-- EN EL ARCHIVO ALGO.SPEC.JS -->

import { describe, it, expect } from 'vitest';

<!-- ESTRUCTURA BASICA -->

describe("CounterComponent", () => {
const wrapper = mount(ContadorComp)

    it("El html se mantiene en las pruebas", () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

})

<!-- COMANDO PARA ACTUALIZAR EL SNAPSHOT NPX-->

npx vitest -u
