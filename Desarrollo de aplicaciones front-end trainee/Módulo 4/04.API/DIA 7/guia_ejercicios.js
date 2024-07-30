$(document).ready(function () {
    // 1
    $("#button").on("click", function () {
        alert("click sobre el boton")
    })

    // 2 selector id
    $("#btn").on("click", function () {
        var h1_content = $("#titulo_1").html()
        var h2_content = $("#titulo_2").html()
        var span_content = $("#texto_1").html()
        var btn_content = $("#btn").html()
        alert("h1: " + h1_content + "\nh2: " + h2_content + "\ntexto: " + span_content + "\nboton: " + btn_content)
    });

    // 3 selector clases
    $(".btn").on("click", function () {
        var h1_content = $(".titulo_1").html()
        var h2_content = $(".titulo_2").html()
        var span_content = $(".titulo_3").html()
        var btn_content = $(".btn").html()
        alert("h1: " + h1_content + "\nh2: " + h2_content + "\ntexto: " + span_content + "\nboton: " + btn_content)
    });

    // 4 elementos generales
    $('ul#todos > li > ul > li').css("color", "red");

    // 5 filtros posicion
    $("ul.todos > li:first").css("color", "red")
    $("ul.todos > li:eq(2)").css("color", "red")

    // 6 nth segundo item
    $("ul.numeros > li:nth-child(2)").css("backgroundColor", "blue")

    // form 
    $("input[type=email]").on("change", function () {
        alert("cambiaste el email")
    })
})