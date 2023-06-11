
am5.ready(function () {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("rataRataSuhu");

  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);

  var data = [{
      name: "DKI Jakarta",
      steps: 28.04,
    },
    {
      name: "Riau",
      steps: 27.84,
    },
    {
      name: "Jambi",
      steps: 27.79,
    },
    {
      name: "Kepulauan-Riau",
      steps: 27.65,
    },
    {
      name: "Bangka-Belitung",
      steps: 27.62,
    },
  ];

  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  var chart = root.container.children.push(
    am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "none",
      wheelY: "none",
      paddingLeft: 50,
      paddingRight: 40
    })
  );

  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/

  var yRenderer = am5xy.AxisRendererY.new(root, {});
  yRenderer.grid.template.set("visible", false);

  var yAxis = chart.yAxes.push(
    am5xy.CategoryAxis.new(root, {
      categoryField: "name",
      renderer: yRenderer,
      paddingRight: 40
    })
  );

  var xRenderer = am5xy.AxisRendererX.new(root, {});
  xRenderer.grid.template.set("strokeDasharray", [3]);

  var xAxis = chart.xAxes.push(
    am5xy.ValueAxis.new(root, {
      min: 0,
      renderer: xRenderer
    })
  );

  // Add series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  var series = chart.series.push(
    am5xy.ColumnSeries.new(root, {
      name: "Income",
      xAxis: xAxis,
      yAxis: yAxis,
      valueXField: "steps",
      categoryYField: "name",
      sequencedInterpolation: true,
      calculateAggregates: true,
      maskBullets: false,
      tooltip: am5.Tooltip.new(root, {
        dy: -30,
        pointerOrientation: "vertical",
        labelText: "{valueX}"
      })
    })
  );

  series.columns.template.setAll({
    strokeOpacity: 0,
    cornerRadiusBR: 10,
    cornerRadiusTR: 10,
    cornerRadiusBL: 10,
    cornerRadiusTL: 10,
    maxHeight: 50,
    fillOpacity: 0.8
  });

  var currentlyHovered;

  series.columns.template.events.on("pointerover", function (e) {
    handleHover(e.target.dataItem);
  });

  series.columns.template.events.on("pointerout", function (e) {
    handleOut();
  });

  function handleHover(dataItem) {
    if (dataItem && currentlyHovered != dataItem) {
      handleOut();
      currentlyHovered = dataItem;
      var bullet = dataItem.bullets[0];
      bullet.animate({
        key: "locationX",
        to: 1,
        duration: 600,
        easing: am5.ease.out(am5.ease.cubic)
      });
    }
  }

  function handleOut() {
    if (currentlyHovered) {
      var bullet = currentlyHovered.bullets[0];
      bullet.animate({
        key: "locationX",
        to: 0,
        duration: 600,
        easing: am5.ease.out(am5.ease.cubic)
      });
    }
  }


  var circleTemplate = am5.Template.new({});

  series.bullets.push(function (root, series, dataItem) {
    var bulletContainer = am5.Container.new(root, {});
    var circle = bulletContainer.children.push(
      am5.Circle.new(
        root, {
          radius: 34
        },
        circleTemplate
      )
    );

    var maskCircle = bulletContainer.children.push(
      am5.Circle.new(root, {
        radius: 27
      })
    );

    // only containers can be masked, so we add image to another container
    var imageContainer = bulletContainer.children.push(
      am5.Container.new(root, {
        mask: maskCircle
      })
    );

    // not working
    var image = imageContainer.children.push(
      am5.Picture.new(root, {
        templateField: "pictureSettings",
        centerX: am5.p50,
        centerY: am5.p50,
        width: 60,
        height: 60
      })
    );

    return am5.Bullet.new(root, {
      locationX: 0,
      sprite: bulletContainer
    });
  });

  // heatrule
  series.set("heatRules", [{
      dataField: "valueX",
      min: am5.color(0x337ade),
      max: am5.color(0xf70505),
      target: series.columns.template,
      key: "fill"
    },
  ]);

  series.data.setAll(data);
  yAxis.data.setAll(data);

  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
  cursor.lineX.set("visible", false);
  cursor.lineY.set("visible", false);

  cursor.events.on("cursormoved", function () {
    var dataItem = series.get("tooltip").dataItem;
    if (dataItem) {
      handleHover(dataItem)
    } else {
      handleOut();
    }
  })

  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear();
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
  // var data = generateDatas(200);
  var data = [
    {
      date: 1640995200000,
      value: 27.21
    },
    {
      date: 1643673600000,
      value: 27.59
    },
    {
      date: 1646092800000,
      value: 27.9
    },
    {
      date: 1648771200000,
      value: 28.42
    },
    {
      date: 1651363200000,
      value: 28.25
    },
    {
      date: 1654041600000,
      value: 28.07
    },
    {
      date: 1656633600000,
      value: 28.04
    },
    {
      date: 1659312000000,
      value: 28.31
    },
    {
      date: 1661990400000,
      value: 28.1
    },
    {
      date: 1664582400000,
      value: 28.7
    },
    {
      date: 1667260800000,
      value: 27.97
    },
    {
      date: 1669852800000,
      value: 27.93
    }
  ]
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
  // var data = generateDatas(1200);
  var data = [
    {
      "date": -2177478432000,
      "value": 25.4
    },
    {
      "date": -2145942432000,
      "value": 25.37
    },
    {
      "date": -2114406432000,
      "value": 25.37
    },
    {
      "date": -2082870432000,
      "value": 25.36
    },
    {
      "date": -2051248032000,
      "value": 25.41
    },
    {
      "date": -2019712032000,
      "value": 25.41
    },
    {
      "date": -1988176032000,
      "value": 25.33
    },
    {
      "date": -1956640032000,
      "value": 25.4
    },
    {
      "date": -1925017632000,
      "value": 25.39
    },
    {
      "date": -1893481632000,
      "value": 25.37
    },
    {
      "date": -1861945632000,
      "value": 25.54
    },
    {
      "date": -1830409632000,
      "value": 25.6
    },
    {
      "date": -1798787232000,
      "value": 25.56
    },
    {
      "date": -1767251232000,
      "value": 25.65
    },
    {
      "date": -1735715232000,
      "value": 25.62
    },
    {
      "date": -1704179232000,
      "value": 25.46
    },
    {
      "date": -1672556832000,
      "value": 25.44
    },
    {
      "date": -1641020832000,
      "value": 25.34
    },
    {
      "date": -1609484832000,
      "value": 25.56
    },
    {
      "date": -1577948832000,
      "value": 25.56
    },
    {
      "date": -1546326432000,
      "value": 25.45
    },
    {
      "date": -1514790432000,
      "value": 25.45
    },
    {
      "date": -1483254432000,
      "value": 25.45
    },
    {
      "date": -1451719200000,
      "value": 25.51
    },
    {
      "date": -1420096800000,
      "value": 25.46
    },
    {
      "date": -1388560800000,
      "value": 25.61
    },
    {
      "date": -1357024800000,
      "value": 25.54
    },
    {
      "date": -1325488800000,
      "value": 25.55
    },
    {
      "date": -1293866400000,
      "value": 25.42
    },
    {
      "date": -1262330400000,
      "value": 25.56
    },
    {
      "date": -1230794400000,
      "value": 25.66
    },
    {
      "date": -1199258400000,
      "value": 25.47
    },
    {
      "date": -1167636600000,
      "value": 25.49
    },
    {
      "date": -1136100600000,
      "value": 25.41
    },
    {
      "date": -1104564600000,
      "value": 25.53
    },
    {
      "date": -1073028600000,
      "value": 25.55
    },
    {
      "date": -1041406200000,
      "value": 25.54
    },
    {
      "date": -1009870200000,
      "value": 25.54
    },
    {
      "date": -978334200000,
      "value": 25.51
    },
    {
      "date": -946798200000,
      "value": 25.55
    },
    {
      "date": -915175800000,
      "value": 25.82
    },
    {
      "date": -883639800000,
      "value": 25.55
    },
    {
      "date": -852109200000,
      "value": 25.38
    },
    {
      "date": -820573200000,
      "value": 25.43
    },
    {
      "date": -788950800000,
      "value": 25.44
    },
    {
      "date": -757409400000,
      "value": 25.56
    },
    {
      "date": -725873400000,
      "value": 25.57
    },
    {
      "date": -694337400000,
      "value": 25.62
    },
    {
      "date": -662716800000,
      "value": 25.52
    },
    {
      "date": -631180800000,
      "value": 25.5
    },
    {
      "date": -599643000000,
      "value": 25.52
    },
    {
      "date": -568107000000,
      "value": 25.49
    },
    {
      "date": -536484600000,
      "value": 25.55
    },
    {
      "date": -504948600000,
      "value": 25.42
    },
    {
      "date": -473412600000,
      "value": 25.38
    },
    {
      "date": -441876600000,
      "value": 25.28
    },
    {
      "date": -410254200000,
      "value": 25.53
    },
    {
      "date": -378718200000,
      "value": 25.69
    },
    {
      "date": -347182200000,
      "value": 25.49
    },
    {
      "date": -315646200000,
      "value": 25.52
    },
    {
      "date": -284023800000,
      "value": 25.39
    },
    {
      "date": -252487800000,
      "value": 25.36
    },
    {
      "date": -220951800000,
      "value": 25.43
    },
    {
      "date": -189414000000,
      "value": 25.43
    },
    {
      "date": -157791600000,
      "value": 25.34
    },
    {
      "date": -126255600000,
      "value": 25.53
    },
    {
      "date": -94719600000,
      "value": 25.35
    },
    {
      "date": -63183600000,
      "value": 25.41
    },
    {
      "date": -31561200000,
      "value": 25.64
    },
    {
      "date": -25200000,
      "value": 25.58
    },
    {
      "date": 31510800000,
      "value": 25.35
    },
    {
      "date": 63046800000,
      "value": 25.6
    },
    {
      "date": 94669200000,
      "value": 25.76
    },
    {
      "date": 126205200000,
      "value": 25.41
    },
    {
      "date": 157741200000,
      "value": 25.44
    },
    {
      "date": 189277200000,
      "value": 25.26
    },
    {
      "date": 220899600000,
      "value": 25.4
    },
    {
      "date": 252435600000,
      "value": 25.49
    },
    {
      "date": 283971600000,
      "value": 25.6
    },
    {
      "date": 315507600000,
      "value": 25.6
    },
    {
      "date": 347130000000,
      "value": 25.68
    },
    {
      "date": 378666000000,
      "value": 25.61
    },
    {
      "date": 410202000000,
      "value": 25.81
    },
    {
      "date": 441738000000,
      "value": 25.32
    },
    {
      "date": 473360400000,
      "value": 25.56
    },
    {
      "date": 504896400000,
      "value": 25.65
    },
    {
      "date": 536432400000,
      "value": 25.88
    },
    {
      "date": 567968400000,
      "value": 25.77
    },
    {
      "date": 599590800000,
      "value": 25.62
    },
    {
      "date": 631126800000,
      "value": 25.85
    },
    {
      "date": 662662800000,
      "value": 25.79
    },
    {
      "date": 694198800000,
      "value": 25.79
    },
    {
      "date": 725821200000,
      "value": 25.75
    },
    {
      "date": 757357200000,
      "value": 25.78
    },
    {
      "date": 788893200000,
      "value": 25.82
    },
    {
      "date": 820429200000,
      "value": 25.82
    },
    {
      "date": 852051600000,
      "value": 25.93
    },
    {
      "date": 883587600000,
      "value": 26.18
    },
    {
      "date": 915123600000,
      "value": 25.77
    },
    {
      "date": 946659600000,
      "value": 25.85
    },
    {
      "date": 978282000000,
      "value": 25.91
    },
    {
      "date": 1009818000000,
      "value": 26.04
    },
    {
      "date": 1041354000000,
      "value": 25.9
    },
    {
      "date": 1072890000000,
      "value": 25.92
    },
    {
      "date": 1104512400000,
      "value": 25.93
    },
    {
      "date": 1136048400000,
      "value": 25.82
    },
    {
      "date": 1167584400000,
      "value": 25.84
    },
    {
      "date": 1199120400000,
      "value": 25.71
    },
    {
      "date": 1230742800000,
      "value": 25.98
    },
    {
      "date": 1262278800000,
      "value": 26.08
    },
    {
      "date": 1293814800000,
      "value": 25.88
    },
    {
      "date": 1325350800000,
      "value": 25.99
    },
    {
      "date": 1356973200000,
      "value": 26.05
    },
    {
      "date": 1388509200000,
      "value": 26.04
    },
    {
      "date": 1420045200000,
      "value": 26.12
    },
    {
      "date": 1451581200000,
      "value": 26.23
    },
    {
      "date": 1483203600000,
      "value": 26.03
    },
    {
      "date": 1514739600000,
      "value": 26.04
    },
    {
      "date": 1546275600000,
      "value": 26.2
    },
    {
      "date": 1577811600000,
      "value": 26.18
    },
    {
      "date": 1609434000000,
      "value": 25.99
    }
  ]
  series.data.setAll(data);


  // Make stuff animate on load
  // 'value'://www.amcharts.com/docs/v5/concepts/animations/
  series.appear(1000);
  chart.appear(1000, 100);

});
//rata ratu suhu indo perbulan

am5.ready(function () {

  // Create root element
  // 'value'://www.amcharts.com/docs/v5/getting-started/#Root_element
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

  var data = [{ 'date': '2000', 'curahHujan': 2935.1, 'suhuMin': 21.29, 'suhuMax': 30.46 },
  { 'date': '2001', 'curahHujan': 2877.01, 'suhuMin': 21.37, 'suhuMax': 30.5 },
  { 'date': '2002', 'curahHujan': 2596.6, 'suhuMin': 21.43, 'suhuMax': 30.7 },
  { 'date': '2003', 'curahHujan': 2890.05, 'suhuMin': 21.33, 'suhuMax': 30.52 },
  { 'date': '2004', 'curahHujan': 2638.79, 'suhuMin': 21.33, 'suhuMax': 30.55 },
  { 'date': '2005', 'curahHujan': 2743.29, 'suhuMin': 21.4, 'suhuMax': 30.51 },
  { 'date': '2006', 'curahHujan': 2651.61, 'suhuMin': 21.26, 'suhuMax': 30.43 },
  { 'date': '2007', 'curahHujan': 2869.1, 'suhuMin': 21.38, 'suhuMax': 30.34 },
  { 'date': '2008', 'curahHujan': 3012.77, 'suhuMin': 21.24, 'suhuMax': 30.23 },
  { 'date': '2009', 'curahHujan': 2775.49, 'suhuMin': 21.5, 'suhuMax': 30.51 },
  { 'date': '2010', 'curahHujan': 3289.37, 'suhuMin': 21.67, 'suhuMax': 30.54 },
  { 'date': '2011', 'curahHujan': 2908.97, 'suhuMin': 21.44, 'suhuMax': 30.37 },
  { 'date': '2012', 'curahHujan': 2866.86, 'suhuMin': 21.51, 'suhuMax': 30.52 },
  { 'date': '2013', 'curahHujan': 2908.12, 'suhuMin': 21.57, 'suhuMax': 30.58 },
  { 'date': '2014', 'curahHujan': 2601.32, 'suhuMin': 21.53, 'suhuMax': 30.59 },
  { 'date': '2015', 'curahHujan': 2482.19, 'suhuMin': 21.62, 'suhuMax': 30.67 },
  { 'date': '2016', 'curahHujan': 2947.5, 'suhuMin': 21.79, 'suhuMax': 30.71 },
  { 'date': '2017', 'curahHujan': 3017.2, 'suhuMin': 21.54, 'suhuMax': 30.57 },
  { 'date': '2018', 'curahHujan': 2823.96, 'suhuMin': 21.46, 'suhuMax': 30.67 },
  { 'date': '2019', 'curahHujan': 2512.99, 'suhuMin': 21.64, 'suhuMax': 30.8 },
  { 'date': '2020', 'curahHujan': 2999.83, 'suhuMin': 21.65, 'suhuMax': 30.77 },
  { 'date': '2021', 'curahHujan': 3087.72, 'suhuMin': 21.44, 'suhuMax': 30.59 }]

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
    wheelY: "none",
    layout: root.verticalLayout,
    
  }));
  // chart.addLegend(legend, true);
  var legend = chart.children.push(
    am5.Legend.new(root, {
      x: am5.percent(33),
      centerx: am5.percent(100),
      y: am5.percent(95),
      centery: am5.percent(100),
      nameField: "valueYField"
    })
  );
  
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
    valueYField: "curahHujan",
    valueXField: "date",
    tooltip: am5.Tooltip.new(root, {
      labelText: "{valueY}%"
    })
  }));

  distanceSeries.data.processor = am5.DataProcessor.new(root, {
    dateFields: ["date"],
    dateFormat: "yyyy-MM-dd"
  });

  var latitudeSeries = chart.series.push(am5xy.LineSeries.new(root, {
    xAxis: xAxis,
    yAxis: latitudeAxis,
    valueYField: "suhuMin",
    valueXField: "date",
    tooltip: am5.Tooltip.new(root, {
      labelText: "suhu min: {valueY} ({townName})"
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
    valueYField: "suhuMax",
    valueXField: "date",
    tooltip: am5.Tooltip.new(root, {
      labelText: "suhu max: {valueY.formatDuration()}"
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
  legend.data.setAll(chart.series.values);

  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  distanceSeries.appear(1000);
  chart.appear(1000, 100);

}); // end am5.ready()