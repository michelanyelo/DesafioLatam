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
