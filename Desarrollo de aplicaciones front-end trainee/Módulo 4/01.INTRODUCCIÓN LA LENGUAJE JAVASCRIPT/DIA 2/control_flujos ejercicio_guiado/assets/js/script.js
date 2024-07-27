let edad = parseInt(prompt("Ingresa tu edad actual"))
let respuesta = prompt("¿Quieres estudiar en DL?, Si o No")

if (edad >= 18 && (respuesta == "Si" || respuesta == "SI" || respuesta == "si")) {
    alert("Excelente... Bienvenido")
} else if (edad < 18 && (respuesta == "Si" || respuesta == "SI" || respuesta == "si")) {
    alert("Que bueno, pero debes estar acompañado por tu representante")
} else if (respuesta == "No" || respuesta == "NO" || respuesta == "no") {
    alert("Que pena, te esperamos pronto")
}