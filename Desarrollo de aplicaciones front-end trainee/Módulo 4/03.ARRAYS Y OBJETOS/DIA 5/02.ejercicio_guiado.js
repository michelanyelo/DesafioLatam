let perro = {
    raza: 'Pastor Alemán',
    origen: 'Alemania',
    pelaje: 'Lanudo',
    peso: '33kg',
    edad: 12,
    amigable: true,
    sonidos: function () {
        console.log('El perro ladra')
    }
};

// accediendo a propiedades de objeto
console.log(perro.raza)
console.log(perro.peso)
console.log(perro.amigable)

// accediendo a metodos del objeto
perro.sonidos()

// modificando el objeto
perro.peso = "30kg"
perro.edad = 11
perro.amigable = false

console.log(perro)

// espacio de nombres
let perro2 = {
    propietario: {
        nombre: 'Juan',
        edad: 34,
        lugar: {
            pais: 'Chile',
            ciudad: "Santiago de Chile"
        },
    },
    raza: 'Pastor Alemán',
    origen: 'Alemania',
    pelaje: 'Lanudo',
    peso: '33kg',
    edad: 12,
    amigable: true,
    sonidos: function () {
        console.log('El perro ladra')
    }
};

console.log(perro2.propietario.nombre)
console.log(perro2.propietario.lugar.ciudad)

// operador this

let perro3 = {
    propietario: {
        nombre: 'Juan',
        edad: 34,
        lugar: {
            pais: 'Chile',
            ciudad: "Santiago de Chile"
        },
    },
    raza: 'Pastor Alemán',
    origen: 'Alemania',
    pelaje: 'Lanudo',
    peso: '33kg',
    edad: 12,
    amigable: true,
    datos: function () {
        console.log(`La raza del perro es ${this.raza}, tiene una edad de ${this.edad} años y el propietario es ${this.propietario.nombre}`)
    }
};

perro3.datos()

// integrando html

let perros = [{
    raza: 'Pastor Alemán',
    origen: 'Alemania',
    pelaje: 'Lanudo',
    peso: '33kg',
    edad: 12
},
{
    raza: 'Poodle',
    origen: 'Francia',
    pelaje: 'Lanudo',
    peso: '20kg',
    edad: 14
},
];

let texto = "<tr><th>Raza</th><th>Origen</th><th>Pelaje</th><th>Peso</th><th>Edad</th></tr>"

for (let i = 0; i < perros.length; i++) {
    texto += `<tr>
                    <td>${perros[i].raza}</td>
                    <td>${perros[i].origen}</td>
                    <td>${perros[i].pelaje}</td>
                    <td>${perros[i].raza}</td>
                    <td>${perros[i].edad}</td>
                </tr>`
}

document.getElementById("cuerpo-tabla").innerHTML = texto

// recorriendo objeto con for in (retorna las propiedades)

let persona = {
    nombre: "Marcelo Salas",
    edad: 11,
    saludar: () => {
        return "Buena matador!"
    }
}

for (propiedad in persona) {
    console.log(propiedad)
}

// recorriendo objeto con object keys (retorna object)

var keys = Object.keys(persona)
console.log(keys)

// recorriendo objeto con object values (retorna array de los valores de cada propiedad)
var values = Object.values(persona)
console.log(values)

// recorriendo objeto con object entries (retorna array por cada propiedad-valor)
var entries = Object.entries(persona)
console.log(entries)

// ejercicio

let perro_recorrido = {
    propietario: {
        nombre: 'Juan',
        edad: 34,
        lugar: {
            pais: 'Chile',
            ciudad: 'Santiago de Chile'
        },
    },
    raza: 'Pastor Alemán',
    origen: 'Alemania',
    pelaje: 'Lanudo',
    peso: '30kg',
    edad: 11,
    amigable: true,
};

var keys = Object.keys(perro_recorrido)
console.log(keys)

var values = Object.values(perro_recorrido)
console.log(values)

var entries = Object.entries(perro_recorrido)
console.log(entries)