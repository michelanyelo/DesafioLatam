class Vehiculo {
    constructor(marca, color, matricula) {
        this.marca = marca;
        this.color = color;
        this.matricula = matricula;
    }
}

class Coche extends Vehiculo {
    constructor(marca, color, matricula) {
        super(marca, color, matricula);
    }
}

class Moto extends Vehiculo {
    constructor(marca, color, matricula) {
        super(marca, color, matricula);
    }
}


class Bus extends Vehiculo {
    constructor(marca, color, matricula) {
        super(marca, color, matricula);
    }
}

let coche = new Coche("Toyota", "Negro", "123ABC");
let moto = new Moto("Honda", "Rojo", "456DEF");
let bus = new Bus("Mercedes", "Azul", "789GHI");

console.log(coche);
console.log(moto);
console.log(bus);