const dataSource = {
  chart: {
    caption: "Energy Consumption Trends in primary schools",
    yaxisname: "Electricity consumption in KWH",
    subcaption: "(15/03/2017)",
    showhovereffect: "1",
    numbersuffix: "KWH",
    drawcrossline: "1",
    plottooltext: "<b>$dataValue</b> of youth were on $seriesName",
    theme: "candy"
  },
  categories: [
    {
      category: [
        {
          label: "1:00"
        },
        {
          label: "3:00"
        },
        {
          label: "5:00"
        },
        {
          label: "7:00"
        },
        {
          label: "9:00"
        },
        {
          label: "11:00"
        },
        {
          label: "13:00"
        },
        {
          label: "15:00"
        },
        {
          label: "17:00"
        },
        {
          label: "19:00"
        },
        {
          label: "21:00"
        },
        {
          label: "23:00"
        },
        {
          label: "24:00"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: " Ancrum Road Primary School(15/03/2017)",
      data: [
        {
          value: "1"
        },
        {
          value: "1"
        },
        {
          value: "1.64"
        },
        {
          value: "1.64"
        },
        {
          value: "2.52"
        },
        {
          value: "2.44"
        },
        {
          value: "2.28"
        },
        {
          value: "2.28"
        },
        {
          value: "2.28"
        },
        {
          value: "1.96"
        },
        {
          value: "1.6"
        },
        {
          value: "0.92"
        },
        {
          value: "1.4"
        },
        {
          value: "0.88"
        }
      ]
    },
    {
      seriesname: "Glebelands Primary School",
      data: [
        {
          value: "1.325"
        },
        {
          value: "1.303"
        },
        {
          value: "1.286"
        },
        {
          value: "2.201"
        },
        {
          value: "4.4062"
        },
        {
          value: "4.348"
        },
        {
          value: "4.474"
        },
        {
          value: "3.303"
        },
        {
          value: "2.946"
        },
        {
          value: "1.525"
        },
        {
          value: "1.525"
        },
        {
          value: "1.832"
        },
        {
          value: "1.35"
        },
        {
          value: "0.88"
        }
      ]
    },
    {
      seriesname: "St Pius Primary School",
      data: [
        {
          value: "0.482"
        },
        {
          value: "0.43"
        },
        {
          value: "0.424"
        },
        {
          value: "0.431"
        },
        {
          value: "1.051"
        },
        {
          value: "1.017"
        },
        {
          value: "0.886"
        },
        {
          value: "0.664"
        },
        {
          value: "0.376"
        },
        {
          value: "0.316"
        },
        {
          value: "0.419"
        },
        {
          value: "0.652"
        },
        {
          value: "0.519"
        },
        {
          value: "0.652"
        },
        {
          value: "0.424"
        }
      ]
    },
    {
      seriesname: "Average consumption in ARPS",
      data: [
        {
          value: "1.57"
        },
        {
          value: "1.59"
        },
        {
          value: "1.89"
        },
        {
          value: "2.15"
        },
        {
          value: "5.64"
        },
        {
          value: "7.24"
        },
        {
          value: "8.29"
        },
        {
          value: "6.9"
        },
        {
          value: "5.6"
        },
        {
          value: "3.03"
        },
        {
          value: "1.98"
        },
        {
          value: "2.033"
        },
        {
          value: "1.58"
        },
        {
          value: "0.652"
        },
        {
          value: "0.424"
        }
      ]
    }
  ]
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "msline",
    renderAt: "chart-container-1",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource
  }).render();
});

