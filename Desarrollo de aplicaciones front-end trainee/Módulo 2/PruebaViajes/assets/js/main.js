
// cambiar background del navbar después del scroll
$(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > 300) {
        $(".navbartop").css("background-color", "#259FAA").removeClass("bg-transparent");
    } else {
        $(".navbartop").addClass("bg-transparent");
    }
});

// smooth scroll

// validación formulario de contacto
(() => {
    'use strict'
    // obtengo todos los formularios a los que quiero aplicar estilos de validación personalizados de bootstrap
    const forms = document.querySelectorAll('.needs-validation')

    // recorro cada uno de ellos y prevengo el envío
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            // si el formulario no es válido, prevengo el envío y la propagación del evento
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            // añado la clase 'was-validated' al formulario para aplicar los estilos de validación
            form.classList.add('was-validated')
        }, false)
    })
})()

