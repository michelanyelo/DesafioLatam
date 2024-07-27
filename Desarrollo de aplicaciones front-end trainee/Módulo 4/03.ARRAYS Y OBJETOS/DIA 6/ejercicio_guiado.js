// metodo push 
var autos = [
    { auto: "Peugeot", color: "rojo" },
    { auto: "Mazda", color: "azul" },
    { auto: "BMW", color: "negro" }
]

console.log(autos)

autos.push({ auto: "Suzuki", color: "verde" }, { auto: "Chevrolet", color: "amarillo" })

console.log(autos)

// metodo pop (elimina el ultimo)
const libros = [
    { titulo: "Harry Potter", paginas: 300 },
    { titulo: "El principito", paginas: 100 },
    { titulo: "De animales a dioses", paginas: 350 }
]

libros.pop()
console.log(libros)

// metodo shift (elimina el primero)
libros.shift()
console.log(libros)

// metodo split (genera un nuevo array)
const filtros = "Comida;China;RM;Ñuñoa"
const filtrado = filtros.split(";")
console.log(filtrado)

// metodo join (transforma un array en string)
const direccion = ["Rebecca Matte 18", "Santiago"]
console.log(direccion.join(", "))

// metodo map (retorna un array procesado)
const clientes = [
    { nombre: "Juan", edad: 28 },
    { nombre: "Carlos", edad: 17 },
    { nombre: "Karla", edad: 27 }
]

const clientes_modificado = clientes.map((cliente) => {
    if (cliente.edad >= 18) {
        cliente.adulto = true
    } else {
        cliente.adulto = false;
    }
    return cliente
})

console.log(clientes_modificado)

const numeros = [10, 15, 20, 25, 30]
const dobleNumeros = numeros.map((numero) => {
    return numero * 2
})

console.log(dobleNumeros)

// metodo reduce (transformar a un valor unico)

// retorna un int
const deudas = [10000, 5000, 50000, 35000]
const sumatoriaDeudas = deudas.reduce((contador, deuda) => {
    return contador + deuda
})

console.log(sumatoriaDeudas)

// metodo reduce en objetos
const personas = [
    { nombre: "Juan", edad: 28 },
    { nombre: "Carlos", edad: 17 },
    { nombre: "Karla", edad: 27 }
]

// retorna un string 
const nombres = personas.reduce((acum, persona) => {
    return acum + " | " + persona.nombre
}, "")

console.log(nombres)

// reduce para obtener totales de años de experiencia
// retorna un int
const experiencias = [
    { titulo: "Practica", anios: 1 },
    { titulo: "Programador Junior", anios: 2 },
    { titulo: "Programador Senior", anios: 4 },
    { titulo: "Jefe de proyectos", anios: 5 }
]

var aniosDeExperiencia = experiencias.reduce((acum, trabajo) => {
    return acum + trabajo.anios
}, 0)

console.log(aniosDeExperiencia)

// crear un objeto a partir de un array objeto
let arr = [
    { id: 'a', value: 10 },
    { id: 'b', value: 20 },
    { id: 'c', value: 30 }
];

let obj = arr.reduce(function (accumulator, item) {
    accumulator[item.id] = item.value;
    return accumulator;
}, {});

console.log(obj);


// metodo filter, retorna un array
var aniosDeExperiencia = experiencias.filter((experiencia) => {
    return experiencia.anios > 2
})

console.log(aniosDeExperiencia)

// metodo concat 

const autosCompactos = [
    { marca: 'Toyota', modelo: 'Corolla', combustible: 'Gasolina' },
    { marca: 'Mazda', modelo: '3', combustible: 'Gasolina' },
    { marca: 'Honda', modelo: 'Civic', combustible: 'Gasolina' },
    { marca: 'Bmw', modelo: '116d', combustible: 'Diesel' },
]

const autosDeportivos = [
    { marca: 'Opel', modelo: 'Astra OPC', combustible: 'Gasolina' },
    { marca: 'Renault', modelo: 'Megane RS', combustible: 'Gasolina' },
    { marca: 'Mitsubishi', modelo: 'Lancer Evo', combustible: 'Gasolina' },
]

var autos = autosCompactos.concat(autosDeportivos)
console.log(autos)