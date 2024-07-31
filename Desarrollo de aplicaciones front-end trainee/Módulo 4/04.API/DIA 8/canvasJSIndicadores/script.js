// chart con jquery cdn
window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "Frutas para el paseo"
        },
        axisX: {
            title: "Frutas Tropicales"
        },
        axisY: {
            title: "Consumo de frutas camino a la playa"
        },
        data: [
            {
                type: "column",
                dataPoints: [
                    { label: "Papayas", y: 30 },
                    { label: "Naranjas", y: 15 },
                    { label: "Mangos", y: 20 },
                    { label: "Plátanos", y: 25 },
                    { label: "Kiwi", y: 10 }
                ]
            }
        ]
    });
    chart.render();
};


// Chart con jquery cdn + ajax

const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://mindicador.cl/api/dolar",
    "method": "GET",
};

$.ajax(settings).done(function (response) {
    let puntosGraficos = response.serie;
    let dataPoints = puntosGraficos.map(valorHist => {
        return {
            x: new Date(valorHist.fecha),
            y: valorHist.valor
        }
    });

    var chart = new CanvasJS.Chart("usdChart", {
        theme: "light2",
        title: {
            text: "Dólar Histórico"
        },
        axisX: {
            title: "DIAS",
            valueFormatString: "DD MMM YYYY"
        },
        axisY: {
            title: "VALOR EN CLP"
        },
        data: [
            {
                type: "spline",
                dataPoints: dataPoints
            }
        ]
    });
    chart.render();
});