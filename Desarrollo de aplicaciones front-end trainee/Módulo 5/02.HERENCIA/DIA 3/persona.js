class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return `Wena! mi nombre es ${this.nombre}`
    }
}

class Empleado extends Persona {
    constructor(nombre, edad, puesto) {
        super(nombre, edad);
        this.puesto = puesto;
    }

    saludar() {
        return `${super.saludar()} y mi empleo es ${this.puesto}`
    }
}

let persona = new Persona("Josefa", 45, "Salvavidas");
let empleado = new Empleado("Kevin", 30, "Chef");
console.log(persona.saludar());
console.log(empleado.saludar());