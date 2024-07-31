$(document).ready(function () {
    //parpadean los elementos de
    $(".parpadear").parpadea();
    //añado evento click para un
    $("#botonparpadear").click(function () {
        $(".parpadear").parpadea();
    })
})