const recogerDatos = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const response = await fetch(url);
        const data = await response.json();

        // Itera sobre los primeros 20 titulos elementos
        data.slice(0, 20).forEach((post, index) => {
            console.log(`${index + 1}. ${post.title}`);
        });

    } catch (error) {
        console.error("Error al acceder al API: ", error);
    }
}


const enviarMensaje = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Información Enviada');
        }, 3000);
    });
};

const mostrarMensaje = async () => {
    try {
        const mensaje = await enviarMensaje();
        console.log("Mostrando mensaje..." + mensaje)
    } catch (error) {
        console.error('Error al recibir el mensaje: ', error);
    }
}

recogerDatos();
mostrarMensaje();