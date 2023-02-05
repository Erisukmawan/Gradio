// rata2 suhu indo
am5.ready(function () {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("rataRataSuhu");


  var myTheme = am5.Theme.new(root);

  myTheme.rule("Grid", ["base"]).setAll({
    strokeOpacity: 0.1
  });


  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root),
    myTheme
  ]);


  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  var chart = root.container.children.push(
    am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "none",
      wheelY: "none"
    })
  );


  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var yRenderer = am5xy.AxisRendererY.new(root, {
    minGridDistance: 30
  });
  yRenderer.grid.template.set("location", 1);

  var yAxis = chart.yAxes.push(
    am5xy.CategoryAxis.new(root, {
      maxDeviation: 0,
      categoryField: "country",
      renderer: yRenderer
    })
  );

  var xAxis = chart.xAxes.push(
    am5xy.ValueAxis.new(root, {
      maxDeviation: 0,
      min: 0,
      renderer: am5xy.AxisRendererX.new(root, {
        visible: true,
        strokeOpacity: 0.1
      })
    })
  );


  // Create series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  var series = chart.series.push(
    am5xy.ColumnSeries.new(root, {
      name: "Series 1",
      xAxis: xAxis,
      yAxis: yAxis,
      valueXField: "value",
      sequencedInterpolation: true,
      categoryYField: "country"
    })
  );

  var columnTemplate = series.columns.template;

  columnTemplate.setAll({
    draggable: true,
    cursorOverStyle: "pointer",
    tooltipText: "drag to rearrange",
    cornerRadiusBR: 10,
    cornerRadiusTR: 10,
    strokeOpacity: 0
  });
  columnTemplate.adapters.add("fill", (fill, target) => {
    return chart.get("colors").getIndex(series.columns.indexOf(target));
  });

  columnTemplate.adapters.add("stroke", (stroke, target) => {
    return chart.get("colors").getIndex(series.columns.indexOf(target));
  });

  columnTemplate.events.on("dragstop", () => {
    sortCategoryAxis();
  });

  // Get series item by category
  function getSeriesItem(category) {
    for (var i = 0; i < series.dataItems.length; i++) {
      var dataItem = series.dataItems[i];
      if (dataItem.get("categoryY") == category) {
        return dataItem;
      }
    }
  }


  // Axis sorting
  function sortCategoryAxis() {
    // Sort by value
    series.dataItems.sort(function (x, y) {
      return y.get("graphics").y() - x.get("graphics").y();
    });

    var easing = am5.ease.out(am5.ease.cubic);

    // Go through each axis item
    am5.array.each(yAxis.dataItems, function (dataItem) {
      // get corresponding series item
      var seriesDataItem = getSeriesItem(dataItem.get("category"));

      if (seriesDataItem) {
        // get index of series data item
        var index = series.dataItems.indexOf(seriesDataItem);

        var column = seriesDataItem.get("graphics");

        // position after sorting
        var fy =
          yRenderer.positionToCoordinate(yAxis.indexToPosition(index)) -
          column.height() / 2;

        // set index to be the same as series data item index
        if (index != dataItem.get("index")) {
          dataItem.set("index", index);

          // current position
          var x = column.x();
          var y = column.y();

          column.set("dy", -(fy - y));
          column.set("dx", x);

          column.animate({
            key: "dy",
            to: 0,
            duration: 600,
            easing: easing
          });
          column.animate({
            key: "dx",
            to: 0,
            duration: 600,
            easing: easing
          });
        } else {
          column.animate({
            key: "y",
            to: fy,
            duration: 600,
            easing: easing
          });
          column.animate({
            key: "x",
            to: 0,
            duration: 600,
            easing: easing
          });
        }
      }
    });

    // Sort axis items by index.
    // This changes the order instantly, but as dx and dy is set and animated,
    // they keep in the same places and then animate to true positions.
    yAxis.dataItems.sort(function (x, y) {
      return x.get("index") - y.get("index");
    });
  }

  // Set data
  var data = [{
    country: "DKI Jakarta",
    value: 28.04
  }, {
    country: "Riau",
    value: 27.84
  }, {
    country: "Jambi",
    value: 27.79
  }, {
    country: "Bangka Belitung",
    value: 27.62
  }, {
    country: "Sumatera Selatan",
    value: 27.40
  }];

  yAxis.data.setAll(data);
  series.data.setAll(data);


  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear(1000);
  chart.appear(1000, 100);

});
//rata2 suhu jakarta

am5.ready(function () {

  /**
   * ---------------------------------------
   * This demo was created using amCharts 5.
   *
   * For more information visit:
   * https://www.amcharts.com/
   *
   * Documentation is available at:
   * https://www.amcharts.com/docs/v5/
   * ---------------------------------------
   */

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("rataRataSuhuJakarta");


  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);


  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  var chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: true,
    panY: false,
    wheelX: "panX",
    wheelY: "zoomX",
    pinchZoomX: true
  }));


  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
    behavior: "none"
  }));
  cursor.lineY.set("visible", false);

  // Generate random data
  var date = new Date();
  date.setHours(0, 0, 0, 0);
  var value = 1;

  function generateData() {
    value = Math.round((Math.random() * 10 - 5) + value);
    if (date.getDay() == 5) {
      am5.time.add(date, "day", 3);
    } else {
      am5.time.add(date, "day", 1);
    }

    return {
      date: date.getTime(),
      value: value
    };
  }

  function generateDatas(count) {
    var data = [];
    for (var i = 0; i < count; ++i) {
      data.push(generateData());
    }
    return data;
  }


  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/category-date-axis/
  var xRenderer = am5xy.AxisRendererX.new(root, {});
  xRenderer.labels.template.set("minPosition", 0.01);
  xRenderer.labels.template.set("maxPosition", 0.99);

  var xAxis = chart.xAxes.push(
    am5xy.CategoryDateAxis.new(root, {
      categoryField: "date",
      baseInterval: {
        timeUnit: "day",
        count: 1
      },
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    })
  );

  var yAxis = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {})
    })
  );


  // Add series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  var series = chart.series.push(am5xy.LineSeries.new(root, {
    name: "Series",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value",
    categoryXField: "date"
  }));

  var tooltip = series.set("tooltip", am5.Tooltip.new(root, {}));
  tooltip.label.set("text", "{valueY}");

  // Add scrollbar
  // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
  chart.set("scrollbarX", am5.Scrollbar.new(root, {
    orientation: "horizontal"
  }));


  // Set data
  var data = generateDatas(200);
  series.data.setAll(data);
  xAxis.data.setAll(data);


  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear(1000);
  chart.appear(1000, 100);

});
// Rata2 suhu indonesia pertahun

am5.ready(function () {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("suhuindopertahun");


  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);


  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  var chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: true,
    panY: true,
    wheelX: "panX",
    wheelY: "zoomX",
    pinchZoomX: true
  }));


  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
    behavior: "none"
  }));
  cursor.lineY.set("visible", false);


  // Generate random data
  var date = new Date();
  date.setHours(0, 0, 0, 0);
  var value = 100;

  function generateData() {
    value = Math.round((Math.random() * 10 - 5) + value);
    am5.time.add(date, "day", 1);
    return {
      date: date.getTime(),
      value: value
    };
  }

  function generateDatas(count) {
    var data = [];
    for (var i = 0; i < count; ++i) {
      data.push(generateData());
    }
    return data;
  }


  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
    maxDeviation: 0.2,
    baseInterval: {
      timeUnit: "day",
      count: 1
    },
    renderer: am5xy.AxisRendererX.new(root, {}),
    tooltip: am5.Tooltip.new(root, {})
  }));

  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {})
  }));


  // Add series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  var series = chart.series.push(am5xy.LineSeries.new(root, {
    name: "Series",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value",
    valueXField: "date",
    tooltip: am5.Tooltip.new(root, {
      labelText: "{valueY}"
    })
  }));


  // Add scrollbar
  // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
  chart.set("scrollbarX", am5.Scrollbar.new(root, {
    orientation: "horizontal"
  }));


  // Set data
  var data = generateDatas(1200);
  series.data.setAll(data);


  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear(1000);
  chart.appear(1000, 100);

}); 
//rata ratu suhu indo perbulan

am5.ready(function () {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("ratasuhuindoperbulan");

  root.dateFormatter.setAll({
    dateFormat: "yyyy",
    dateFields: ["valueX"]
  });


  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);


  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  var chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: true,
    panY: true,
    wheelX: "panX",
    wheelY: "zoomX",
    pinchZoomX: true
  }));


  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
    behavior: "none"
  }));
  cursor.lineY.set("visible", false);


  // Data
  var data = [{
      year: "1950",
      value: 2
    },
    {
      year: "1951",
      value: 4
    },
    {
      year: "1952",
      value: 15
    },
    {
      year: "1953",
      value: 21
    },
    {
      year: "1954",
      value: 25
    },
    {
      year: "1955",
      value: 18
    },
    {
      year: "1956",
      value: 33
    },
    {
      year: "1957",
      value: 103
    },
    {
      year: "1958",
      value: 88
    },
    {
      year: "1959",
      value: 205
    },
    {
      year: "1960",
      value: 333
    },
    {
      year: "1961",
      value: 185
    },
    {
      year: "1962",
      value: 788
    },
    {
      year: "1963",
      value: 1020
    },
    {
      year: "1964",
      value: 658
    },
    {
      year: "1965",
      value: 201
    },
    {
      year: "1966",
      value: 1054
    },
    {
      year: "1967",
      value: 999
    },
    {
      year: "1968",
      value: 2002
    },
    {
      year: "1969",
      value: 2235
    },
    {
      year: "1970",
      value: 1423
    },
    {
      year: "1971",
      value: 3564
    },
    {
      year: "1972",
      value: 3987
    },
    {
      year: "1973",
      value: 4235
    },
    {
      year: "1974",
      value: 3487
    },
    {
      year: "1975",
      value: 2987
    },
    {
      year: "1976",
      value: 6789
    },
    {
      year: "1977",
      value: 7354
    },
    {
      year: "1978",
      value: 5457
    },
    {
      year: "1979",
      value: 6784
    },
    {
      year: "1980",
      value: 7878
    },
    {
      year: "1981",
      value: 6987
    },
    {
      year: "1982",
      value: 5787
    },
    {
      year: "1983",
      value: 8978
    },
    {
      year: "1984",
      value: 10003
    },
    {
      year: "1985",
      value: 7898
    },
    {
      year: "1986",
      value: 9878
    },
    {
      year: "1987",
      value: 11235
    },
    {
      year: "1988",
      value: 10248
    },
    {
      year: "1989",
      value: 14589
    },
    {
      year: "1990",
      value: 19878
    },
    {
      year: "1991",
      value: 20325
    },
    {
      year: "1992",
      value: 18978
    },
    {
      year: "1993",
      value: 17485
    },
    {
      year: "1994",
      value: 15234
    },
    {
      year: "1995",
      value: 12345
    },
    {
      year: "1996",
      value: 12584
    },
    {
      year: "1997",
      value: 13698
    },
    {
      year: "1998",
      value: 12568
    },
    {
      year: "1999",
      value: 12587
    },
    {
      year: "2000",
      value: 16987
    },
    {
      year: "2001",
      value: 16779
    },
    {
      year: "2002",
      value: 19878
    },
    {
      year: "2003",
      value: 15687
    },
    {
      year: "2004",
      value: 19878
    },
    {
      year: "2005",
      value: 23212
    }
  ];

  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
    baseInterval: {
      timeUnit: "year",
      count: 1
    },
    renderer: am5xy.AxisRendererX.new(root, {}),
    tooltip: am5.Tooltip.new(root, {})
  }));

  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    logarithmic: true,
    renderer: am5xy.AxisRendererY.new(root, {})
  }));

  // Add series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  var series = chart.series.push(am5xy.LineSeries.new(root, {
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value",
    valueXField: "year",
    tooltip: am5.Tooltip.new(root, {
      labelText: "{valueX}: {valueY}"
    })
  }));

  series.strokes.template.setAll({
    strokeWidth: 3
  });

  // Set up data processor to parse string dates
  // https://www.amcharts.com/docs/v5/concepts/data/#Pre_processing_data
  series.data.processor = am5.DataProcessor.new(root, {
    dateFormat: "yyyy",
    dateFields: ["year"]
  });

  series.data.setAll(data);


  // Add scrollbar
  // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
  chart.set("scrollbarX", am5.Scrollbar.new(root, {
    orientation: "horizontal"
  }));


  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear(1000);
  chart.appear(1000, 100);

});

// suhu dan curah hujan

am5.ready(function () {

  var data = [{
    "date": "2012-01-01",
    "distance": 227,
    "townName": "New York",
    "townSize": 12,
    "latitude": 40.71,
    "duration": 408
  }, {
    "date": "2012-01-02",
    "distance": 371,
    "townName": "Washington",
    "townSize": 7,
    "latitude": 38.89,
    "duration": 482
  }, {
    "date": "2012-01-03",
    "distance": 433,
    "townName": "Wilmington",
    "townSize": 3,
    "latitude": 34.22,
    "duration": 562
  }, {
    "date": "2012-01-04",
    "distance": 345,
    "townName": "Jacksonville",
    "townSize": 3.5,
    "latitude": 30.35,
    "duration": 379
  }, {
    "date": "2012-01-05",
    "distance": 480,
    "townName": "Miami",
    "townSize": 5,
    "latitude": 25.83,
    "duration": 501
  }, {
    "date": "2012-01-06",
    "distance": 386,
    "townName": "Tallahassee",
    "townSize": 3.5,
    "latitude": 30.46,
    "duration": 443
  }, {
    "date": "2012-01-07",
    "distance": 348,
    "townName": "New Orleans",
    "townSize": 5,
    "latitude": 29.94,
    "duration": 405
  }, {
    "date": "2012-01-08",
    "distance": 238,
    "townName": "Houston",
    "townSize": 8,
    "latitude": 29.76,
    "duration": 309
  }, {
    "date": "2012-01-09",
    "distance": 218,
    "townName": "Dalas",
    "townSize": 8,
    "latitude": 32.8,
    "duration": 287
  }, {
    "date": "2012-01-10",
    "distance": 349,
    "townName": "Oklahoma City",
    "townSize": 5,
    "latitude": 35.49,
    "duration": 485
  }, {
    "date": "2012-01-11",
    "distance": 603,
    "townName": "Kansas City",
    "townSize": 5,
    "latitude": 39.1,
    "duration": 890
  }, {
    "date": "2012-01-12",
    "distance": 534,
    "townName": "Denver",
    "townSize": 9,
    "latitude": 39.74,
    "duration": 810
  }, {
    "date": "2012-01-13",
    "townName": "Salt Lake City",
    "townSize": 6,
    "distance": 425,
    "duration": 670,
    "latitude": 40.75,
    "dashLength": 8,
    "alpha": 0.4
  }, {
    "date": "2012-01-14",
    "latitude": 36.1,
    "duration": 470,
    "townName": "Las Vegas"
  }, {
    "date": "2012-01-15"
  }, {
    "date": "2012-01-16"
  }, {
    "date": "2012-01-17"
  }];

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("suhucurah");

  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);


  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  var chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: false,
    panY: false,
    wheelY: "none"
  }));

  chart.zoomOutButton.set("forceHidden", true);

  chart.get("colors").set("step", 2);

  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
    baseInterval: {
      timeUnit: "day",
      count: 1
    },
    renderer: am5xy.AxisRendererX.new(root, {
      minGridDistance: 50
    }),
    tooltip: am5.Tooltip.new(root, {})
  }));


  var distanceAxisRenderer = am5xy.AxisRendererY.new(root, {});
  distanceAxisRenderer.grid.template.set("forceHidden", true);
  var distanceAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: distanceAxisRenderer,
    tooltip: am5.Tooltip.new(root, {})
  }));

  var latitudeAxisRenderer = am5xy.AxisRendererY.new(root, {});
  latitudeAxisRenderer.grid.template.set("forceHidden", true);
  var latitudeAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: latitudeAxisRenderer,
    forceHidden: true
  }));

  var durationAxisRenderer = am5xy.AxisRendererY.new(root, {
    opposite: true
  });
  durationAxisRenderer.grid.template.set("forceHidden", true);
  var durationAxis = chart.yAxes.push(am5xy.DurationAxis.new(root, {
    baseUnit: "minute",
    renderer: durationAxisRenderer,
    extraMax: 0.3
  }));

  // Create series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  var distanceSeries = chart.series.push(am5xy.ColumnSeries.new(root, {
    xAxis: xAxis,
    yAxis: distanceAxis,
    valueYField: "distance",
    valueXField: "date",
    tooltip: am5.Tooltip.new(root, {
      labelText: "{valueY} miles"
    })
  }));

  distanceSeries.data.processor = am5.DataProcessor.new(root, {
    dateFields: ["date"],
    dateFormat: "yyyy-MM-dd"
  });

  var latitudeSeries = chart.series.push(am5xy.LineSeries.new(root, {
    xAxis: xAxis,
    yAxis: latitudeAxis,
    valueYField: "latitude",
    valueXField: "date",
    tooltip: am5.Tooltip.new(root, {
      labelText: "latitude: {valueY} ({townName})"
    })
  }));

  latitudeSeries.strokes.template.setAll({
    strokeWidth: 2
  });

  // Add circle bullet
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Bullets
  latitudeSeries.bullets.push(function () {
    var graphics = am5.Circle.new(root, {
      strokeWidth: 2,
      radius: 5,
      stroke: latitudeSeries.get("stroke"),
      fill: root.interfaceColors.get("background"),
    });

    graphics.adapters.add("radius", function (radius, target) {
      return target.dataItem.dataContext.townSize;
    })

    return am5.Bullet.new(root, {
      sprite: graphics
    });
  });

  var durationSeries = chart.series.push(am5xy.LineSeries.new(root, {
    xAxis: xAxis,
    yAxis: durationAxis,
    valueYField: "duration",
    valueXField: "date",
    tooltip: am5.Tooltip.new(root, {
      labelText: "duration: {valueY.formatDuration()}"
    })
  }));

  durationSeries.strokes.template.setAll({
    strokeWidth: 2
  });

  // Add circle bullet
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Bullets
  durationSeries.bullets.push(function () {
    var graphics = am5.Rectangle.new(root, {
      width: 10,
      height: 10,
      centerX: am5.p50,
      centerY: am5.p50,
      fill: durationSeries.get("stroke")
    });

    return am5.Bullet.new(root, {
      sprite: graphics
    });
  });

  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
  chart.set("cursor", am5xy.XYCursor.new(root, {
    xAxis: xAxis,
    yAxis: distanceAxis
  }));


  distanceSeries.data.setAll(data);
  latitudeSeries.data.setAll(data);
  durationSeries.data.setAll(data);
  xAxis.data.setAll(data);

  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  distanceSeries.appear(1000);
  chart.appear(1000, 100);

}); // end am5.ready()