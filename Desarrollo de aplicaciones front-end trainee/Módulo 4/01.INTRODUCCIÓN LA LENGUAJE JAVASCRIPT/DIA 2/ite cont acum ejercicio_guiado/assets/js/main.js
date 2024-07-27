let contador = 0 // inicio del contador en 0
let acumulador = 0 // inicio del acumulador en 0

for (let i = 1; i <= 50; i++) {
    if (i % 2 != 0) { // se divide mediante el modulo del numero
        contador++
        acumulador += i
    }
}

alert(`Hay ${contador} números impares entre 1 y 50 y la suma acumulada de ellos es: ${acumulador}`)