const boton = document.getElementById("ingreso")

let usuarios = []

boton.addEventListener("click", () => {
    let usuario = []

    const nombre = prompt("Ingrese su nombre")
    const apellido = prompt("Ingrese su apellido")
    const nacimiento = prompt("Ingrese su año de nacimiento")

    usuario[0] = nombre
    usuario[1] = apellido
    usuario[2] = nacimiento

    usuarios.push(usuario)

    llenarTabla(usuarios)
})

function llenarTabla(usuarios) {
    let datoTabla = ""

    for (let usuario of usuarios) {
        datoTabla += `
        <tr>
        <td>${usuario[0]}</td>
        <td>${usuario[1]}</td>
        <td>${usuario[2]}</td>
        </tr>
        `
    }
    let cuerpoTabla = document.getElementById("resultados")
    cuerpoTabla.innerHTML = datoTabla
}