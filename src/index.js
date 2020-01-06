FusionCharts.ready(function() {
    var stockPriceChart = new FusionCharts({
        id: "stockRealTimeChart",
        type: 'realtimeline',
        renderAt: 'chart-container-1',
        width: '700',
        height: '400',
        dataFormat: 'json',
        dataSource: {
          "chart": {
            "caption": "Real-time stock price monitor",
            "subCaption": "Harry's SuperMart",
            "xAxisName": "Time",
            "yAxisName": "Stock Price",
            "numberPrefix": "$",
            "refreshinterval": "5",
            "yaxisminvalue": "35",
            "yaxismaxvalue": "36",
            "numdisplaysets": "10",
            "labeldisplay": "rotate",
            "showRealTimeValue": "0",
            "theme": "fusion"
          },
          "categories": [{
            "category": [{
              "label": "Day Start"
            }]
          }],
          "dataset": [{
            "data": [{
              "value": "35.27"
            }]
          }]
        },
        "events": {
          "initialized": function(e) {
            function addLeadingZero(num) {
              return (num <= 9) ? ("0" + num) : num;
            }
  
            function updateData() {
              // Get reference to the chart using its ID
              var chartRef = FusionCharts("stockRealTimeChart"),
                // We need to create a querystring format incremental update, containing
                // label in hh:mm:ss format
                // and a value (random).
                currDate = new Date(),
                label = addLeadingZero(currDate.getHours()) + ":" +
                addLeadingZero(currDate.getMinutes()) + ":" +
                addLeadingZero(currDate.getSeconds()),
                // Get random number between 35.25 & 35.75 - rounded to 2 decimal places
                randomValue = Math.floor(Math.random() *
                  50) / 100 + 35.25,
                // Build Data String in format &label=...&value=...
                strData = "&label=" + label +
                "&value=" +
                randomValue;
              // Feed it to chart.
              chartRef.feedData(strData);
            }
  
            var myVar = setInterval(function() {
              updateData();
            }, 5000);
          }
        }
      })
      .render();
  });
  
  const dataSource = {
    chart: {
      caption: "Average Monthly Temperature in Texas",
      yaxisname: "Average Monthly Temperature",
      anchorradius: "5",
      plottooltext: "Average temperature in $label is <b>$dataValue</b>",
      showhovereffect: "1",
      showvalues: "0",
      numbersuffix: "°C",
      theme: "candy",
      anchorbgcolor: "#72D7B2",
      palettecolors: "#72D7B2"
    },
    data: [
      {
        label: "Jan",
        value: "1"
      },
      {
        label: "Feb",
        value: "5"
      },
      {
        label: "Mar",
        value: "10"
      },
      {
        label: "Apr",
        value: "12"
      },
      {
        label: "May",
        value: "14"
      },
      {
        label: "Jun",
        value: "16"
      },
      {
        label: "Jul",
        value: "20"
      },
      {
        label: "Aug",
        value: "22"
      },
      {
        label: "Sep",
        value: "20"
      },
      {
        label: "Oct",
        value: "16"
      },
      {
        label: "Nov",
        value: "7"
      },
      {
        label: "Dec",
        value: "2"
      }
    ]
  };
  
  FusionCharts.ready(function() {
    var myChart = new FusionCharts({
      type: "spline",
      renderAt: "chart-container-2",
      width: "700",
      height: "400",
      dataFormat: "json",
      dataSource
    }).render();
  });
  