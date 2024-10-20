import { describe, expect, it, vi } from "vitest";
import { fetchQuote } from "@/services/quote.service";

// vi -> helper de vitest

describe("fetchQuote", () => {
    const espiaFetch = vi.spyOn(globalThis, "fetch").mockResolvedValue({
        ok: true,
        statusText: "OK",
        json: async () => ({ id: 14, quote: "La vida es bella", author: "Papi Micky" })
    })

    it("El API fue consumido", async () => {
        await fetchQuote()

        expect(espiaFetch).toHaveBeenCalledWith("https://dummyjson.com/quotes/random")
    })

    it("La cita random es: La vida es bella", async () => {
        const response = await fetchQuote()

        expect(response.quote).toBe("La vida es bella")
    })

})