import { describe, it, expect } from "vitest";
import { sumas } from "@/utils/sumas";

describe("Suma entre numeros", () => {
    it("La suma entre dos pares es par", () => {
        expect(sumas(2, 4)).toEqual(6);
    })

    it("Responde con NaN si los argumentos no son digitos", () => {
        expect(sumas("azucar", "cafe", 5, 10, 20)).toBeNaN
    })
})