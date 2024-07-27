// metodo sort

// retorna un array
var numeros = [1, 5, 20, 23]
console.log(numeros.sort())

// metodo reverse
// retorna un array
var pokemon = ["Charizard", "Charmeleon", "Charmander"]
console.log(pokemon.reverse())


// metodo forEach recorre cada elemento y realiza una accion
let clientes = [
    { nombre: "Juan", edad: 28 },
    { nombre: "Pedro", edad: 35 },
    { nombre: "Ana", edad: 22 }
]

clientes.forEach((cliente) => {
    console.log(cliente.nombre)
})

// find obtiene un objeto que cumpla con alguna condicion
var productos = [
    { id: 1, nombre: "Camisa", precio: 20990 },
    { id: 2, nombre: "Pantalones", precio: 15990 },
    { id: 3, nombre: "Zapatillas", precio: 38990 },
]

var tillas = productos.find((producto) => {
    return producto.nombre == "Zapatillas"
})

console.log(tillas)

// findIndex retorna el indice entero del objeto
var productos = [
    { id: 1, nombre: "Camisa", precio: 20990 },
    { id: 2, nombre: "Pantalones", precio: 15990 },
    { id: 3, nombre: "Zapatillas", precio: 38990 },
]

var pantalon = productos.findIndex((producto) => {
    return producto.nombre == "Pantalones"
})

console.log(pantalon)

// some revisa si un arreglo contiene o no un valor
varautos = [
    { marca: 'Toyota', modelo: 'Corolla', combustible: 'Gasolina' },
    { marca: 'Mazda', modelo: '3', combustible: 'Gasolina' },
    { marca: 'Honda', modelo: 'Civic', combustible: 'Gasolina' },
    { marca: 'Bmw', modelo: '116d', combustible: 'Diesel' }
]

var algunDiesel = varautos.some((auto)=>{
    return auto.combustible == "Diesel"
})

console.log(algunDiesel)