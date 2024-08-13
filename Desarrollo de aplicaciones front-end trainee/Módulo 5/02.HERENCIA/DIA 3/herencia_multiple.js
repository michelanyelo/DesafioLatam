const Volador = {
    volar: () => {
        console.log("Estoy volando!")
    }
}

const Nadador = {
    nadar: () => {
        console.log("Estoy nadando!")
    }
}

// const Pato = {
//     ...Volador,
//     ...Nadador
// }

const Pato = Object.create(Volador);
Object.assign(Pato, Nadador);

Pato.volar();
Pato.nadar();