// javascript
// var text = document.getElementById("texto");
// text.addEventListener("click", function () {
//     document.write("click sobre el texto");
// });

// jquery
var text = $("#texto");
text.click(function () {
    document.write("click sobre el texto")
})

$(document).ready(function () {
    var texto = $("#texto")
    let entrada = $("#entrada")
    let btn = $("#btn")

    console.log(texto)
    console.log(entrada)
    console.log(btn)

    let cadena_ul = $("ul.my-list > li > a")
    console.log(cadena_ul)
    cadena_ul.css("background", "red")
})