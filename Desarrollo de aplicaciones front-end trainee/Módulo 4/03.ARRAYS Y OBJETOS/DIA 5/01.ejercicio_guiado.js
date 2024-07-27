// array con variable
// let peliculas = ["It 2", "Rambo 3", "Halloween", "Shaft"]
// console.log(peliculas)

// array con metodo objeto
let peliculas = new Array("It 2", "Rambo 3", "Halloween", "Shaft")

// array dinamico
let series = []

// array con distitnos tipos de datos
let datosPersonales = [
    "miguel",
    "monzon",
    {
        edad: 30,
        nacimiento: 1993
    },
    false
]

// demostracion matrices
let matriz3x3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(matriz3x3) // (3) [Array(3), Array(3), Array(3)]


// demostracion length
let instrumentos = [
    "guitarra electrica",
    "piano de cola",
    "violin",
    "trompeta"
]
console.log(instrumentos) // (4) ['guitarra electrica', 'piano de cola', 'violin', 'trompeta']
console.log(instrumentos.length) // 4

instrumentos.length = 2
console.log(instrumentos) // (2) ['guitarra electrica', 'piano de cola']
console.log(instrumentos.length) // 2

instrumentos[6] = "guitarra clasica"
instrumentos[7] = "chelo"
console.log(instrumentos) // (8) ['guitarra electrica', 'piano de cola', …, 'guitarra clasica', 'chelo']
console.log(instrumentos.length) // 8

// ciclo for
for (let i = 0; i < peliculas.length; i++) {
    document.write(peliculas[i] + '|')
}

let edades = [49, 51, 21, 18, 15]

for (let edad of edades) {
    console.log(edad)
}

for (let otra in edades) {
    console.log(otra)
}