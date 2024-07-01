// tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// alert
$('#enviarCorreo').on("click", function () {
    alert("El correo fue enviado correctamente...")
});

// cambiar color ingredientes
// tag + id

$('h3#tituloIngredientes').on("dblclick", function () {
    $(this).addClass('text-danger fw-bold');

    // Eliminar la selección de texto
    if (window.getSelection) {
        var selection = window.getSelection();
        selection.removeAllRanges();
    }
});

// cambiar color preparacion
// tag + id
$('h3#tituloPreparacion').on("dblclick", function () {
    $(this).addClass('text-danger fw-bold');

    // Eliminar la selección de texto
    if (window.getSelection) {
        var selection = window.getSelection();
        selection.removeAllRanges();
    }
});


// selector de clase card toggle
$(".card-title").click(function () {
    $(".card-text").toggle();
})