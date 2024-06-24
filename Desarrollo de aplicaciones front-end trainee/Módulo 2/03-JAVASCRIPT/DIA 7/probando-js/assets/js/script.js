alert("Estoy ejecutando la función alert");
console.log("Estoy ejecutando la función console.log");

// Solicitar la información al usuario
let nombre = prompt("Ingresa tu nombre:", "NOMBREEE");
let apellido = prompt("Ingresa tu apellido:");
let edad = prompt("Ingresa tu edad:");
let deporteFavorito = prompt("Ingresa tu deporte favorito:");

// Mostrar la información en la página
document.write("<h1>Información del Usuario</h1>");
document.write("<p><strong>Nombre:</strong> " + nombre + "</p>");
document.write("<p><strong>Apellido:</strong> " + apellido + "</p>");
document.write("<p><strong>Edad:</strong> " + edad + "</p>");
document.write("<p><strong>Deporte Favorito:</strong> " + deporteFavorito + "</p>");