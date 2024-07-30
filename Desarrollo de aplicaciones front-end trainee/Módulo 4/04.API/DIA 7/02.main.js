$(document).ready(function () {
    // filtros de posicion jquery
    $("td:gt(5)").css("backgroundColor", "blue")
    $("td:lt(3)").css("backgroundColor", "yellow")

    $("tr:first").css("color", "red")
    $("td:eq(5)").css("color", "red")

    // filtros hijos
    $("div span:last-child").css("backgroundColor", "blue")

    // filtros form
    $(".paises").change(function (e) {
        e.preventDefault();
        let valorDeLaOpcion = $("select > option:selected").val()
        console.log(valorDeLaOpcion)
    });

    // eventos con jquery
    $("#pais").change(function (e) {
        e.preventDefault();
        let paisSeleccionado = $(this).children("option:selected").val()
        $(".resultado").text(paisSeleccionado)

    });

    $("#btn").on("click", function () {
        // pínta impares
        $("li").filter(":even").css("backgroundColor", "red")
        // pinta pares
        $("li").filter(":odd").css("backgroundColor", "blue")
    })

    // contar los clicks
    function formatDate(date) {
        return (date.getHours() < 10 ? '0' : '') +
            date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') +
            date.getMinutes() + ':' + (date.getSeconds() < 10 ? '0' : '')
            + date.getSeconds() + '.' + (date.getMilliseconds() < 10 ?
                '00' : (date.getMilliseconds() < 100 ? '0' : '')) +
            date.getMilliseconds();
    };

    let contador = 0
    $("#ejemplo").on("click", function () {
        contador++
        console.log("-->" + formatDate(new Date()) + " click " + contador)
    })

    // animacion toggle
    $("button").on("click", function () {
        $("p").toggle();
    })

})