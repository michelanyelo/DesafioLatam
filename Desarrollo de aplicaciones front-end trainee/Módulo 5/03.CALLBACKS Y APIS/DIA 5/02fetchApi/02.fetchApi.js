
// const consultarDatos = () => {
//     const url = "datos.txt";
//     fetch(url)
//         .then((respuesta) => {
//             console.log(respuesta);
//             return respuesta.text();
//         })
//         .then((datos) => console.log(datos));
// };
// consultarDatos();

// fetch async await
var consultarDatos = async () => {
    const url = "datos.txt";
    const response = await fetch(url);
    const datos = await response.text();
    console.log(datos);
}

consultarDatos();

// consultar a api externa
var consultarDatos = async () => {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    const response = await fetch(url);
    const datos = await response.text();
    console.log(datos);
};
consultarDatos();