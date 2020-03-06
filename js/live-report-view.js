let liveReportsView = function () {    
    let innerHtml = `
    <div id="chartContainer" style="height: 300px; width: 100%;"></div>
    `;
    return innerHtml;
};

let draw = function (coins) {
    let length = coins.length;
    var options = {
        exportEnabled: true,
        animationEnabled: true,
        title:{
            text: "Coins Prices Comparison"
        },
        subtitles: [{
            text: "Click Legend to Hide or Unhide Data Series"
        }],
        axisX: {
            title: "Coin Value"
        },
        axisY: {
            title: "Time Stamp",
            titleFontColor: "#4F81BC",
            lineColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            tickColor: "#4F81BC",
            includeZero: false
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "spline",
            name: "Units Sold",
            showInLegend: true,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "#,##0 Units",
            dataPoints: [
                { x: new Date(2016, 0, 1),  y: 120 },
                { x: new Date(2016, 1, 1), y: 135 },
                { x: new Date(2016, 2, 1), y: 144 },
                { x: new Date(2016, 3, 1),  y: 103 },
                { x: new Date(2016, 4, 1),  y: 93 },
                { x: new Date(2016, 5, 1),  y: 129 },
                { x: new Date(2016, 6, 1), y: 143 },
                { x: new Date(2016, 7, 1), y: 156 },
                { x: new Date(2016, 8, 1),  y: 122 },
                { x: new Date(2016, 9, 1),  y: 106 },
                { x: new Date(2016, 10, 1),  y: 137 },
                { x: new Date(2016, 11, 1), y: 142 }
            ]
        }]
    };
    if(length >= 2){
        options.axisY2 = {
            titleFontColor: "#C0504E",
            lineColor: "#C0504E",
            labelFontColor: "#C0504E",
            tickColor: "#C0504E",
            includeZero: false
        };

        options.data.push({
            type: "spline",
            name: "Profit",
            axisYType: "secondary",
            showInLegend: true,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "$#,##0.#",
            dataPoints: [
                { x: new Date(2016, 0, 1),  y: 19034.5 },
                { x: new Date(2016, 1, 1), y: 20015 },
                { x: new Date(2016, 2, 1), y: 27342 },
                { x: new Date(2016, 3, 1),  y: 20088 },
                { x: new Date(2016, 4, 1),  y: 20234 },
                { x: new Date(2016, 5, 1),  y: 29034 },
                { x: new Date(2016, 6, 1), y: 30487 },
                { x: new Date(2016, 7, 1), y: 32523 },
                { x: new Date(2016, 8, 1),  y: 20234 },
                { x: new Date(2016, 9, 1),  y: 27234 },
                { x: new Date(2016, 10, 1),  y: 33548 },
                { x: new Date(2016, 11, 1), y: 32534 }
            ]
        });
    }
    if(length >=3){
        options.axisY3 = {
            titleFontColor: "#D0605E",
            lineColor: "#D0605E",
            labelFontColor: "#D0605E",
            tickColor: "#D0605E",
            includeZero: false
        };

        options.data.push({
            type: "spline",
            name: "Units Sold",
            showInLegend: true,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "#,##0 Units",
            dataPoints: [
                { x: new Date(2016, 0, 1),  y: 100 },
                { x: new Date(2016, 1, 1), y: 105 },
                { x: new Date(2016, 2, 1), y: 114 },
                { x: new Date(2016, 3, 1),  y: 80 },
                { x: new Date(2016, 4, 1),  y: 43 },
                { x: new Date(2016, 5, 1),  y: 100 },
                { x: new Date(2016, 6, 1), y: 103 },
                { x: new Date(2016, 7, 1), y: 126 },
                { x: new Date(2016, 8, 1),  y: 102 },
                { x: new Date(2016, 9, 1),  y: 70 },
                { x: new Date(2016, 10, 1),  y: 107 },
                { x: new Date(2016, 11, 1), y: 108 }
            ]
        });
    }
    if(length >=4){
        options.axisY4 = {
            titleFontColor: "#E57F6E",
            lineColor: "#E57F6E",
            labelFontColor: "#E57F6E",
            tickColor: "#E57F6E",
            includeZero: false
        };

        options.data.push({
            type: "spline",
            name: "Units Sold",
            showInLegend: true,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "#,##0 Units",
            dataPoints: [
                { x: new Date(2016, 0, 1),  y: 130 },
                { x: new Date(2016, 1, 1), y: 145 },
                { x: new Date(2016, 2, 1), y: 154 },
                { x: new Date(2016, 3, 1),  y: 113 },
                { x: new Date(2016, 4, 1),  y: 83 },
                { x: new Date(2016, 5, 1),  y: 139 },
                { x: new Date(2016, 6, 1), y: 153 },
                { x: new Date(2016, 7, 1), y: 166 },
                { x: new Date(2016, 8, 1),  y: 132 },
                { x: new Date(2016, 9, 1),  y: 116 },
                { x: new Date(2016, 10, 1),  y: 147 },
                { x: new Date(2016, 11, 1), y: 152 }
            ]
        });
    }
    if(length === 5){
        options.axisY5 = {
            titleFontColor: "#F0807E",
            lineColor: "#F0807E",
            labelFontColor: "#F0807E",
            tickColor: "#F0807E",
            includeZero: false
        };
        options.data.push(
            {
                type: "spline",
                name: "Units Sold",
                showInLegend: true,
                xValueFormatString: "MMM YYYY",
                yValueFormatString: "#,##0 Units",
                dataPoints: [
                    { x: new Date(2016, 0, 1),  y: 110 },
                    { x: new Date(2016, 1, 1), y: 125 },
                    { x: new Date(2016, 2, 1), y: 134 },
                    { x: new Date(2016, 3, 1),  y: 100 },
                    { x: new Date(2016, 4, 1),  y: 63 },
                    { x: new Date(2016, 5, 1),  y: 119 },
                    { x: new Date(2016, 6, 1), y: 133 },
                    { x: new Date(2016, 7, 1), y: 146 },
                    { x: new Date(2016, 8, 1),  y: 112 },
                    { x: new Date(2016, 9, 1),  y: 100 },
                    { x: new Date(2016, 10, 1),  y: 127 },
                    { x: new Date(2016, 11, 1), y: 132 }
                ]
            });
    }
    $("#chartContainer").CanvasJSChart(options);
    console.log(length);
    console.log(options);
    
    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }
}

export { liveReportsView, draw};