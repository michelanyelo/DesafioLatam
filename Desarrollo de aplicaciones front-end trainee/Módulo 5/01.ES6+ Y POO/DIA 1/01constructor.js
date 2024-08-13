// funcion constructora
class Estudiante {
    constructor(nombre) {
        this.nombre = nombre
    }
    // prototipo saludar
    saludar() {
        console.log(`Hola, me llamo ${this.nombre}`)
    }
}

function Estudiante(nombre) {
    this.nombre = nombre
}

Estudiante.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre}`)
}

// objetos a partir de constructor
var c1 = new Estudiante("Javiera")
var c2 = new Estudiante("Francisco")
var c3 = new Estudiante("Diana")

c1.saludar()
c2.saludar()
c3.saludar()

// c1.saludar = function () {
//     console.log("Hola, soy " + this.nombre)
// }

// c2.saludar = function () {
//     console.log("Hola, soy " + this.nombre)
// }

// c3.saludar = function () {
//     console.log("Hola, soy " + this.nombre)
// }

