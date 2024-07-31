jQuery.fn.datosFinancieros = function () {
    let element = this;
    $.ajax({
        type: "GET",
        url: "https://mindicador.cl/api",
        dataType: "json"  // Cambié "JSON" a "json"
    }).done(function (data) {
        // Guardar la referencia del elemento jQuery
        element.append(
            `<span>${data.uf.valor}</span>`  // Agregar el valor a los elementos seleccionados
        );
    }).fail(function () {
        console.error("Error al obtener datos de la API.");
    });
    return this;
};
