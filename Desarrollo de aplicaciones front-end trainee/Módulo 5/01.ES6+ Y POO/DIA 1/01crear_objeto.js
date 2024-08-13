var carro = new Object()
carro.marca = 'Toyota'
carro.modelo = "Corolla"
carro.fecha = 2020
console.log("carro: ", carro)

// rectangulo
var rectangulo = new Object()
rectangulo.ancho = 10
rectangulo.largo = 5
console.log("rectangulo: ", rectangulo)

// notacion literal
cuadrado = {
    ancho: 10,
    largo: 5
}
console.log("cuadrado: ", cuadrado)

// modificar valores
console.log("cuadradro ancho antes: ", cuadrado.ancho)
cuadrado.ancho = 7
cuadrado["ancho"] = 14
console.log("cuadrado ancho despues: ", cuadrado.ancho)

// metodos objetos
var vaca = new Object()
vaca.sonido = function () {
    console.log("Muuuuu")
}
vaca.sonido()

// metodo notacion literal
perro = {
    hablar: function () {
        console.log("Guauu")
    }
}
perro.hablar()

// metodos que utilizan propiedades (operador this)
var persona = new Object()
persona.nombre = "Camila"
persona.saludar = function () {
    console.log("Hola soy " + this.nombre)
}
persona.saludar()

otra_persona = {
    nombre: "Otra Persona",
    hablar: function () {
        console.log("Hola soy " + this.nombre)
    }
}
otra_persona.hablar()

var marciano = new Object()
marciano.nombre = "Marciano"
marciano.saludar = () => {
    console.log("Hola soy " + this.nombre)
}
marciano.saludar()