// Pedir datos personales
let nombre = prompt("Ingrese su nombre:")
let carrera = prompt("Ingrese su carrera:")

// Pedir notas HTML + Convetir String a Int
let htmlFirstNote = parseInt(prompt("Ingrese nota 1 [HTML]: "))
let htmlSecondNote = parseInt(prompt("Ingrese nota 2 [HTML]: "))
let htmlThirdNote = parseInt(prompt("Ingrese nota 3 [HTML]: "))

// Pedir notas CSS + Convetir String a Int
let cssFirstNote = parseInt(prompt("Ingrese nota 1 [CSS]: "))
let cssSecondNote = parseInt(prompt("Ingrese nota 2 [CSS]: "))
let cssThirdNote = parseInt(prompt("Ingrese nota 3 [CSS]: "))

// Pedir notas JS + Convetir String a Int
let jsFirstNote = parseInt(prompt("Ingrese nota 1 [JavaScript]: "))
let jsSecondNote = parseInt(prompt("Ingrese nota 2 [JavaScript]: "))
let jsThirdNote = parseInt(prompt("Ingrese nota 3 [JavaScript]: "))

// Inyeccion de datos personales a párrafos
// nombre
document.getElementById("nombre").innerText = nombre

// carrera
document.getElementById("carrera").innerText = carrera

// Inyeccion de notas a tabla
// notas html
document.getElementById("html-firstnote").innerText = htmlFirstNote
document.getElementById("html-secondnote").innerText = htmlSecondNote
document.getElementById("html-thirdnote").innerText = htmlThirdNote
document.getElementById("html-average").innerText = (htmlFirstNote + htmlSecondNote + htmlThirdNote) / 3

// notas css
document.getElementById("css-firstnote").innerText = cssFirstNote
document.getElementById("css-secondnote").innerText = cssSecondNote
document.getElementById("css-thirdnote").innerText = cssThirdNote
document.getElementById("css-average").innerText = (cssFirstNote + cssSecondNote + cssThirdNote) / 3

// notas javascript
document.getElementById("js-firstnote").innerText = jsFirstNote
document.getElementById("js-secondnote").innerText = jsSecondNote
document.getElementById("js-thirdnote").innerText = jsThirdNote
document.getElementById("js-average").innerText = (jsFirstNote + jsSecondNote + jsThirdNote) / 3


