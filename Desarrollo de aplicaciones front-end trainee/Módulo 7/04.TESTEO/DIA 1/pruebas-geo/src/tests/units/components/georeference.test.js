import { describe, it, expect } from "vitest";
import { calcularDistancia } from "@/utils/georeference";

describe("Medidas georeferenciadas", () => {
    const castro = { latitude: -42.482321, longitude: -73.764379 }
    const ancud = { latitude: -41.877117, longitude: -73.814445 }
    const plazaSucre = { latitude: -33.02555556, longitude: -71.5525 }

    it("Distancia entre Ancud y Castro es app 68km", () => {
        expect(calcularDistancia(ancud, castro)).approximately(67, 3)
    })

    it("Distancia entre Ancud y Plaza Sucre es mayor a 1000km", () => {
        expect(calcularDistancia(ancud, plazaSucre)).toBeGreaterThanOrEqual(1000)
    })
})