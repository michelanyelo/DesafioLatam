jQuery.fn.usuarios = function () {

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://reqres.in/api/users",
        "method": "GET"
    };

    let element = $(this)

    $.ajax(settings).done(function (response) {
        const users = response.data;

        let listaUsuariosHTML = users.reduce((acc, valorActual) => {
            return acc + `<li>${valorActual.first_name} ${valorActual.last_name} ${valorActual.email} <img src="${valorActual.avatar}" alt="Avatar" style="width: 50px; height: 50px;"/></li>`
        }, '');

        element.html(
            `<ol>${listaUsuariosHTML}</ol>`
        )

    });

    return this
}