var settings = {
    type: "get",
    url: "https://mindicador.cl/api",
    dataType: "json"
};


$.ajax(settings).done(
    function (response) {
        document.write(JSON.stringify(response))
    }).fail(
        function (xhr, status, error) {
            alert(xhr.responseText);
        }
    )