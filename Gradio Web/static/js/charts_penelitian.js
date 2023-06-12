am5.ready(function () {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("populasi");


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
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout,

    }));


    // Data
    var colors = chart.get("colors");

    var data = [{
        country: "Indonesia",
        value: 273523615,
        icon: "https://www.amcharts.com/wp-content/uploads/flags/indonesia.svg",
        columnSettings: {
            fill: colors.next()
        }
    }, {
        country: "Philipines",
        value: 109581078,
        icon: "https://www.amcharts.com/wp-content/uploads/flags/philippines.svg",
        columnSettings: {
            fill: colors.next()
        }
    }, {
        country: "Vietnam",
        value: 97338579,
        icon: "https://www.amcharts.com/wp-content/uploads/flags/vietnam.svg",
        columnSettings: {
            fill: colors.next()
        }
    }, {
        country: "Thailand",
        value: 69799978,
        icon: "https://www.amcharts.com/wp-content/uploads/flags/thailand.svg",
        columnSettings: {
            fill: colors.next()
        }
    }, {
        country: "Myanmar",
        value: 54409800,
        icon: "https://www.amcharts.com/wp-content/uploads/flags/myanmar.svg",
        columnSettings: {
            fill: colors.next()
        }
    }, {
        country: "Malaysia",
        value: 32365999,
        icon: "https://www.amcharts.com/wp-content/uploads/flags/malaysia.svg",
        columnSettings: {
            fill: colors.next()
        }
    }, {
        country: "Cambodia",
        value: 16718965,
        icon: "https://www.amcharts.com/wp-content/uploads/flags/cambodia.svg",
        columnSettings: {
            fill: colors.next()
        }
    }, {
        country: "Laos",
        value: 7275560,
        icon: "https://www.amcharts.com/wp-content/uploads/flags/laos.svg",
        columnSettings: {
            fill: colors.next()
        }
    }, {
        country: "Singapore",
        value: 5850342,
        icon: "https://www.amcharts.com/wp-content/uploads/flags/singapore.svg",
        columnSettings: {
            fill: colors.next()
        }
    }, {
        country: "Timor Leste",
        value: 1318445,
        icon: "https://www.amcharts.com/wp-content/uploads/flags/east-timor.svg",
        columnSettings: {
            fill: colors.next()
        }
    }, {
        country: "Brunei Darusallam",
        value: 437479,
        icon: "https://www.amcharts.com/wp-content/uploads/flags/brunei.svg",
        columnSettings: {
            fill: colors.next()
        }
    }];


    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xRenderer = am5xy.AxisRendererX.new(root, {
        minGridDistance: 30
    })

    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
        categoryField: "country",
        renderer: xRenderer,
        bullet: function (root, axis, dataItem) {
            return am5xy.AxisBullet.new(root, {
                location: 0.5,
                sprite: am5.Picture.new(root, {
                    width: 24,
                    height: 24,
                    centerY: am5.p50,
                    centerX: am5.p50,
                    src: dataItem.dataContext.icon
                })
            });
        }
    }));

    xRenderer.grid.template.setAll({
        location: 1
    })

    xRenderer.labels.template.setAll({
        paddingTop: 20,
        rotation: -20
    });

    xAxis.data.setAll(data);

    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
            strokeOpacity: 0.1
        })
    }));


    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        categoryXField: "country"
    }));

    series.columns.template.setAll({
        tooltipText: "{categoryX}: {valueY}",
        tooltipY: 0,
        strokeOpacity: 0,
        templateField: "columnSettings"
    });

    series.data.setAll(data);


    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear();
    chart.appear(1000, 100);

}); // end am5.ready()

// kendaraan
am5.ready(function () {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("kendaraan");


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
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout
    }));

    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set("scrollbarX", am5.Scrollbar.new(root, {
        orientation: "horizontal"
    }));
    chart.get("colors").set("colors", [
          am5.color(0x095256),
          am5.color(0x087f1),
          am5.color(0x5aaa95),
          am5.color(0x86a873),
          am5.color(0xbb9f06)
    ]);
    var data = [{
        "year": "2015",
        "mobil": 12304221,
        "bis": 196309,
        "mobil barang": 4145857,
        "motor": 88656931,
        "color": "#fff",
    }, {
        "year": "2016",
        "mobil": 13142958,
        "bis": 204512,
        "mobil barang": 4326731,
        "motor": 94531510,
        "color": "#fff",
    }, {
        "year": "2017",
        "mobil": 13968202,
        "bis": 213359,
        "mobil barang": 4540902,
        "motor": 100200245,
        "color": "#fff",
    }, {
        "year": "2018",
        "mobil": 14830698,
        "bis": 222872,
        "mobil barang": 4797254,
        "motor": 106657952,
        "color": "#fff",
    }, {
        "year": "2019",
        "mobil": 15592419,
        "bis": 231569,
        "mobil barang": 5021888,
        "motor": 112771136,
        "color": "#fff",
    }, {
        "year": "2020",
        "mobil": 15797746,
        "bis": 233261,
        "mobil barang": 5083405,
        "motor": 115023039,
        "color": "#08213",
    }]


    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xRenderer = am5xy.AxisRendererX.new(root, {});
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
        categoryField: "year",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {})
    }));

    xRenderer.grid.template.setAll({
        location: 1
    })

    xAxis.data.setAll(data);

    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        min: 0,
        renderer: am5xy.AxisRendererY.new(root, {
            strokeOpacity: 0.1
        })
    }));


    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    var legend = chart.children.push(am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50
    }));


    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function makeSeries(name, fieldName) {
        var series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: name,
            stacked: true,
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: fieldName,
            categoryXField: "year",
            gridColor: "#FFFFFF"
        }));

        series.columns.template.setAll({
            tooltipText: "{name}, {categoryX}: {valueY}",
            tooltipY: am5.percent(10),
            // color: "{color}",
        });
        series.data.setAll(data);

        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        series.appear();

        series.bullets.push(function () {
            return am5.Bullet.new(root, {
                sprite: am5.Label.new(root, {
                    // text: "{valueY}",
                    fill: root.interfaceColors.get("alternativeText"),
                    centerY: am5.p50,
                    centerX: am5.p50,
                    populateText: true
                })
            });
        });

        legend.data.push(series);
    }

    makeSeries("Mobil Penumpang", "mobil");
    makeSeries("Mobil Bis", "bis");
    makeSeries("Mobil Barang", "mobil barang");
    makeSeries("Sepeda Motor", "motor");


    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);

}); // end am5.ready()

// listrik
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
    var root = am5.Root.new("listrik");


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
    var data = [
        {
          "date": 662662800000,
          "value": 48.9
        },
        {
          "date": 694198800000,
          "value": 66.6965637207031
        },
        {
          "date": 725821200000,
          "value": 55.43
        },
        {
          "date": 757357200000,
          "value": 62.8
        },
        {
          "date": 788893200000,
          "value": 66.86
        },
        {
          "date": 820429200000,
          "value": 72.39
        },
        {
          "date": 852051600000,
          "value": 80.3
        },
        {
          "date": 883587600000,
          "value": 80.94
        },
        {
          "date": 915123600000,
          "value": 83.73
        },
        {
          "date": 946659600000,
          "value": 86.3000030517578
        },
        {
          "date": 978282000000,
          "value": 86.2600021362305
        },
        {
          "date": 1009818000000,
          "value": 87.5999984741211
        },
        {
          "date": 1041354000000,
          "value": 87.9400024414063
        },
        {
          "date": 1072890000000,
          "value": 89.0100021362305
        },
        {
          "date": 1104512400000,
          "value": 85.0383224487305
        },
        {
          "date": 1136048400000,
          "value": 90.620002746582
        },
        {
          "date": 1167584400000,
          "value": 91.0999984741211
        },
        {
          "date": 1199120400000,
          "value": 92.7300033569336
        },
        {
          "date": 1230742800000,
          "value": 93.5500030517578
        },
        {
          "date": 1262278800000,
          "value": 94.1500015258789
        },
        {
          "date": 1293814800000,
          "value": 94.8300018310547
        },
        {
          "date": 1325350800000,
          "value": 96
        },
        {
          "date": 1356973200000,
          "value": 96.4642562866211
        },
        {
          "date": 1388509200000,
          "value": 97.0100021362305
        },
        {
          "date": 1420045200000,
          "value": 97.5373687744141
        },
        {
          "date": 1451581200000,
          "value": 97.620002746582
        },
        {
          "date": 1483203600000,
          "value": 98.1399993896484
        },
        {
          "date": 1514739600000,
          "value": 98.5100021362305
        },
        {
          "date": 1546275600000,
          "value": 98.8499984741211
        },
        {
          "date": 1577811600000,
          "value": 96.9499969482422
        }
      ];
    series.data.setAll(data);
    xAxis.data.setAll(data);


    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);

});

// gas
am5.ready(function () {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element 
    var root = am5.Root.new("gas");
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
        maxTooltipDistance: 0,
        pinchZoomX: true
    }));


    var date = new Date();
    date.setHours(0, 0, 0, 0);
    var value = 100;

    function generateData() {
        value = Math.round((Math.random() * 10 - 4.2) + value);
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
    let kolom = ['Nitro Okdisa (6%)', 'Karbon (76%)', 'Metana (16%)']
    let nitro = [
        {
            "date": 1451581200000,
            "value": 6080
        },
        {
            "date": 1420045200000,
            "value": 5850
        },
        {
            "date": 1388509200000,
            "value": 6100
        },
        {
            "date": 1356973200000,
            "value": 5920
        },
        {
            "date": 1325350800000,
            "value": 5990
        },
        {
            "date": 1293814800000,
            "value": 5780
        },
        {
            "date": 1262278800000,
            "value": 5380
        },
        {
            "date": 1230742800000,
            "value": 5270
        },
        {
            "date": 1199120400000,
            "value": 5220
        },
        {
            "date": 1167584400000,
            "value": 5190
        },
        {
            "date": 1136048400000,
            "value": 5000
        },
        {
            "date": 1104512400000,
            "value": 4940
        },
        {
            "date": 1072890000000,
            "value": 4900
        },
        {
            "date": 1041354000000,
            "value": 4850
        },
        {
            "date": 1009818000000,
            "value": 4690
        },
        {
            "date": 978282000000,
            "value": 4650
        },
        {
            "date": 946659600000,
            "value": 4540
        }
    ]
    let karbon = [
        {
            "date": 1451581200000,
            "value": 211802
        },
        {
            "date": 1420045200000,
            "value": 219587
        },
        {
            "date": 1388509200000,
            "value": 220775
        },
        {
            "date": 1356973200000,
            "value": 229598
        },
        {
            "date": 1325350800000,
            "value": 218956
        },
        {
            "date": 1293814800000,
            "value": 211501
        },
        {
            "date": 1262278800000,
            "value": 195836
        },
        {
            "date": 1230742800000,
            "value": 181410
        },
        {
            "date": 1199120400000,
            "value": 158432
        },
        {
            "date": 1167584400000,
            "value": 166360
        },
        {
            "date": 1136048400000,
            "value": 152624
        },
        {
            "date": 1104512400000,
            "value": 174897
        },
        {
            "date": 1072890000000,
            "value": 174035
        },
        {
            "date": 1041354000000,
            "value": 162580
        },
        {
            "date": 1009818000000,
            "value": 156969
        },
        {
            "date": 978282000000,
            "value": 149980
        },
        {
            "date": 946659600000,
            "value": 155103
        }
    ]
    let metana = [
        {
            "date": 1451581200000,
            "value": 54810
        },
        {
            "date": 1420045200000,
            "value": 54320
        },
        {
            "date": 1388509200000,
            "value": 57060
        },
        {
            "date": 1356973200000,
            "value": 58250
        },
        {
            "date": 1325350800000,
            "value": 58340
        },
        {
            "date": 1293814800000,
            "value": 57630
        },
        {
            "date": 1262278800000,
            "value": 53400
        },
        {
            "date": 1230742800000,
            "value": 51220
        },
        {
            "date": 1199120400000,
            "value": 48800
        },
        {
            "date": 1167584400000,
            "value": 48320
        },
        {
            "date": 1136048400000,
            "value": 48420
        },
        {
            "date": 1104512400000,
            "value": 45140
        },
        {
            "date": 1072890000000,
            "value": 43710
        },
        {
            "date": 1041354000000,
            "value": 43620
        },
        {
            "date": 1009818000000,
            "value": 42750
        },
        {
            "date": 978282000000,
            "value": 42110
        },
        {
            "date": 946659600000,
            "value": 42050
        }
    ]
    for (var i = 0; i < kolom.length; i++) {
        var nama = kolom[i]
        var series = chart.series.push(am5xy.LineSeries.new(root, {
            name: nama,
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            valueXField: "date",
            legendValueText: "{valueY}",
            tooltip: am5.Tooltip.new(root, {
                pointerOrientation: "horizontal",
                labelText: "{valueY}"
            })
        }));

        date = new Date();
        date.setHours(0, 0, 0, 0);
        value = 0;

        if (nama.toLowerCase().includes('nitro')) {
            var data = nitro;
            series.data.setAll(data);
        }

        if (nama.toLowerCase().includes('karbon')) {
            var data = karbon;
            series.data.setAll(data);
        }

        if (nama.toLowerCase().includes('metana')) {
            var data = metana;
            series.data.setAll(data);
        }

        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        series.appear();
    }


    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
        behavior: "none"
    }));
    cursor.lineY.set("visible", false);


    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set("scrollbarX", am5.Scrollbar.new(root, {
        orientation: "horizontal"
    }));

    chart.set("scrollbarY", am5.Scrollbar.new(root, {
        orientation: "vertical"
    }));


    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    var legend = chart.rightAxesContainer.children.push(am5.Legend.new(root, {
        width: 200,
        paddingLeft: 15,
        height: am5.percent(100)
    }));

    // When legend item container is hovered, dim all the series except the hovered one
    legend.itemContainers.template.events.on("pointerover", function (e) {
        var itemContainer = e.target;

        // As series list is data of a legend, dataContext is series
        var series = itemContainer.dataItem.dataContext;

        chart.series.each(function (chartSeries) {
            if (chartSeries != series) {
                chartSeries.strokes.template.setAll({
                    strokeOpacity: 0.15,
                    stroke: am5.color(0x000000)
                });
            } else {
                chartSeries.strokes.template.setAll({
                    strokeWidth: 3
                });
            }
        })
    })

    // When legend item container is unhovered, make all series as they are
    legend.itemContainers.template.events.on("pointerout", function (e) {
        var itemContainer = e.target;
        var series = itemContainer.dataItem.dataContext;

        chart.series.each(function (chartSeries) {
            chartSeries.strokes.template.setAll({
                strokeOpacity: 1,
                strokeWidth: 1,
                stroke: chartSeries.get("fill")
            });
        });
    })

    legend.itemContainers.template.set("width", am5.p100);
    legend.valueLabels.template.setAll({
        width: am5.p100,
        textAlign: "right"
    });

    // It's is important to set legend data after all the events are set on template, otherwise events won't be copied
    legend.data.setAll(chart.series.values);


    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);

}); // end am5.ready()

am5.ready(function () {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("perkembanganketinggianlaut");


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
        maxDeviation: 0.5,
        baseInterval: {
            timeUnit: "day",
            count: 1
        },
        renderer: am5xy.AxisRendererX.new(root, {
            pan: "zoom"
        }),
        tooltip: am5.Tooltip.new(root, {})
    }));

    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        maxDeviation: 1,
        renderer: am5xy.AxisRendererY.new(root, {
            pan: "zoom"
        })
    }));


    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(am5xy.SmoothedXLineSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
            labelText: "{valueY}"
        })
    }));

    series.fills.template.setAll({
        visible: true,
        fillOpacity: 0.2
    });

    series.bullets.push(function () {
        return am5.Bullet.new(root, {
            locationY: 0,
            sprite: am5.Circle.new(root, {
                radius: 4,
                stroke: root.interfaceColors.get("background"),
                strokeWidth: 2,
                fill: series.get("fill")
            })
        });
    });


    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set("scrollbarX", am5.Scrollbar.new(root, {
        orientation: "horizontal"
    }));


    var data = [
        {
            "date": -2840166432000,
            "value": 0
        },
        {
            "date": -2808544032000,
            "value": 0.220472441
        },
        {
            "date": -2777008032000,
            "value": -0.440944881
        },
        {
            "date": -2745472032000,
            "value": -0.232283464
        },
        {
            "date": -2713936032000,
            "value": 0.590551181
        },
        {
            "date": -2682313632000,
            "value": 0.531496062
        },
        {
            "date": -2650777632000,
            "value": 0.437007874
        },
        {
            "date": -2619241632000,
            "value": 0.216535433
        },
        {
            "date": -2587705632000,
            "value": 0.299212598
        },
        {
            "date": -2556083232000,
            "value": 0.362204724
        },
        {
            "date": -2524547232000,
            "value": 0.440944881
        },
        {
            "date": -2493011232000,
            "value": 0.374015748
        },
        {
            "date": -2461475232000,
            "value": 0.499999999
        },
        {
            "date": -2429852832000,
            "value": 0.685039369
        },
        {
            "date": -2398316832000,
            "value": 0.303149606
        },
        {
            "date": -2366780832000,
            "value": 0.767716535
        },
        {
            "date": -2335244832000,
            "value": 0.468503937
        },
        {
            "date": -2303622432000,
            "value": 0.673228346
        },
        {
            "date": -2272086432000,
            "value": 1.043307086
        },
        {
            "date": -2240550432000,
            "value": 1.338582676
        },
        {
            "date": -2209014432000,
            "value": 1.125984251
        },
        {
            "date": -2177478432000,
            "value": 1.110236219
        },
        {
            "date": -2145942432000,
            "value": 1.291338581
        },
        {
            "date": -2114406432000,
            "value": 1.606299211
        },
        {
            "date": -2082870432000,
            "value": 1.2007874
        },
        {
            "date": -2051248032000,
            "value": 0.984251968
        },
        {
            "date": -2019712032000,
            "value": 1.251968503
        },
        {
            "date": -1988176032000,
            "value": 1.196850392
        },
        {
            "date": -1956640032000,
            "value": 1.098425196
        },
        {
            "date": -1925017632000,
            "value": 1.27559055
        },
        {
            "date": -1893481632000,
            "value": 1.271653542
        },
        {
            "date": -1861945632000,
            "value": 1.598425195
        },
        {
            "date": -1830409632000,
            "value": 1.476377951
        },
        {
            "date": -1798787232000,
            "value": 1.547244093
        },
        {
            "date": -1767251232000,
            "value": 1.795275589
        },
        {
            "date": -1735715232000,
            "value": 2.10629921
        },
        {
            "date": -1704179232000,
            "value": 2.031496061
        },
        {
            "date": -1672556832000,
            "value": 1.854330707
        },
        {
            "date": -1641020832000,
            "value": 1.791338581
        },
        {
            "date": -1609484832000,
            "value": 1.854330707
        },
        {
            "date": -1577948832000,
            "value": 1.905511809
        },
        {
            "date": -1546326432000,
            "value": 1.988188974
        },
        {
            "date": -1514790432000,
            "value": 1.952755904
        },
        {
            "date": -1483254432000,
            "value": 1.999999998
        },
        {
            "date": -1451719200000,
            "value": 1.712598423
        },
        {
            "date": -1420096800000,
            "value": 1.791338581
        },
        {
            "date": -1388560800000,
            "value": 2.047244092
        },
        {
            "date": -1357024800000,
            "value": 2.003937006
        },
        {
            "date": -1325488800000,
            "value": 1.850393699
        },
        {
            "date": -1293866400000,
            "value": 1.905511809
        },
        {
            "date": -1262330400000,
            "value": 2.062992124
        },
        {
            "date": -1230794400000,
            "value": 2.047244092
        },
        {
            "date": -1199258400000,
            "value": 2.271653541
        },
        {
            "date": -1167636600000,
            "value": 2.440944879
        },
        {
            "date": -1136100600000,
            "value": 2.228346454
        },
        {
            "date": -1104564600000,
            "value": 2.448818895
        },
        {
            "date": -1073028600000,
            "value": 2.295275588
        },
        {
            "date": -1041406200000,
            "value": 2.519685037
        },
        {
            "date": -1009870200000,
            "value": 2.622047241
        },
        {
            "date": -978334200000,
            "value": 2.826771651
        },
        {
            "date": -946798200000,
            "value": 2.618110234
        },
        {
            "date": -915175800000,
            "value": 3.098425194
        },
        {
            "date": -883639800000,
            "value": 3.098425194
        },
        {
            "date": -852109200000,
            "value": 3.098425194
        },
        {
            "date": -820573200000,
            "value": 2.84645669
        },
        {
            "date": -788950800000,
            "value": 2.95669291
        },
        {
            "date": -757409400000,
            "value": 3.251968501
        },
        {
            "date": -725873400000,
            "value": 3.374015745
        },
        {
            "date": -694337400000,
            "value": 3.562992122
        },
        {
            "date": -662716800000,
            "value": 3.51181102
        },
        {
            "date": -631180800000,
            "value": 3.598425193
        },
        {
            "date": -599643000000,
            "value": 3.972440941
        },
        {
            "date": -568107000000,
            "value": 3.870078736
        },
        {
            "date": -536484600000,
            "value": 4.043307082
        },
        {
            "date": -504948600000,
            "value": 3.929133854
        },
        {
            "date": -473412600000,
            "value": 3.964566925
        },
        {
            "date": -441876600000,
            "value": 3.763779524
        },
        {
            "date": -410254200000,
            "value": 4.291338578
        },
        {
            "date": -378718200000,
            "value": 4.346456688
        },
        {
            "date": -347182200000,
            "value": 4.358267712
        },
        {
            "date": -315646200000,
            "value": 4.503937003
        },
        {
            "date": -284023800000,
            "value": 4.748031491
        },
        {
            "date": -252487800000,
            "value": 4.543307082
        },
        {
            "date": -220951800000,
            "value": 4.480314956
        },
        {
            "date": -189414000000,
            "value": 4.169291334
        },
        {
            "date": -157791600000,
            "value": 4.610236216
        },
        {
            "date": -126255600000,
            "value": 4.397637791
        },
        {
            "date": -94719600000,
            "value": 4.452755901
        },
        {
            "date": -63183600000,
            "value": 4.484251964
        },
        {
            "date": -31561200000,
            "value": 4.751968499
        },
        {
            "date": -25200000,
            "value": 4.67716535
        },
        {
            "date": 31510800000,
            "value": 4.881889759
        },
        {
            "date": 63046800000,
            "value": 5.240157475
        },
        {
            "date": 94669200000,
            "value": 5.003937003
        },
        {
            "date": 126205200000,
            "value": 5.472440939
        },
        {
            "date": 157741200000,
            "value": 5.409448813
        },
        {
            "date": 189277200000,
            "value": 5.370078735
        },
        {
            "date": 220899600000,
            "value": 5.303149601
        },
        {
            "date": 252435600000,
            "value": 5.555118105
        },
        {
            "date": 283971600000,
            "value": 5.362204719
        },
        {
            "date": 315507600000,
            "value": 5.598425191
        },
        {
            "date": 347130000000,
            "value": 6.086614167
        },
        {
            "date": 378666000000,
            "value": 5.858267711
        },
        {
            "date": 410202000000,
            "value": 6.188976372
        },
        {
            "date": 441738000000,
            "value": 6.153543301
        },
        {
            "date": 473360400000,
            "value": 5.74803149
        },
        {
            "date": 504896400000,
            "value": 5.771653537
        },
        {
            "date": 536432400000,
            "value": 5.795275585
        },
        {
            "date": 567968400000,
            "value": 5.980314955
        },
        {
            "date": 599590800000,
            "value": 6.157480309
        },
        {
            "date": 631126800000,
            "value": 6.232283458
        },
        {
            "date": 662662800000,
            "value": 6.334645663
        },
        {
            "date": 694198800000,
            "value": 6.35826771
        },
        {
            "date": 725821200000,
            "value": 6.291338576
        },
        {
            "date": 757357200000,
            "value": 6.499999993
        },
        {
            "date": 788893200000,
            "value": 6.618110229
        },
        {
            "date": 820429200000,
            "value": 6.787401568
        },
        {
            "date": 852051600000,
            "value": 7.066929127
        },
        {
            "date": 883587600000,
            "value": 6.665354324
        },
        {
            "date": 915123600000,
            "value": 7.011811016
        },
        {
            "date": 946659600000,
            "value": 7.062992119
        },
        {
            "date": 978282000000,
            "value": 7.287401567
        },
        {
            "date": 1009818000000,
            "value": 7.381889756
        },
        {
            "date": 1041354000000,
            "value": 7.759842512
        },
        {
            "date": 1072890000000,
            "value": 7.740157472
        },
        {
            "date": 1104512400000,
            "value": 7.74409448
        },
        {
            "date": 1136048400000,
            "value": 7.917322827
        },
        {
            "date": 1167584400000,
            "value": 7.996062984
        },
        {
            "date": 1199120400000,
            "value": 8.350393692
        },
        {
            "date": 1230742800000,
            "value": 8.586614164
        },
        {
            "date": 1262278800000,
            "value": 8.901574794
        },
        {
            "date": 1293814800000,
            "value": 8.96456692
        },
        {
            "date": 1325350800000,
            "value": 9.326771644
        },
        {
            "date": 1356973200000,
            "value": 8.980314951
        }
    ];
    series.data.setAll(data);


    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);

});

//prediksi
am5.ready(function () {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("prediksilaut");


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

    chart.get("colors").set("step", 3);


    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);


    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
        maxDeviation: 0.3,
        baseInterval: {
            timeUnit: "day",
            count: 1
        },
        renderer: am5xy.AxisRendererX.new(root, {}),
        tooltip: am5.Tooltip.new(root, {})
    }));

    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: am5xy.AxisRendererY.new(root, {})
    }));


    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(am5xy.LineSeries.new(root, {
        name: "Tinggi Air Laut",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
            labelText: "{name}: {value}"
        })
    }));

    series.strokes.template.setAll({
        strokeWidth: 2
    });

    series.get("tooltip").get("background").set("fillOpacity", 0.5);

    var series2 = chart.series.push(am5xy.LineSeries.new(root, {
        name: "Prediksi Air Laut",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
            labelText: "{name}: {value}"
        })
    }));
    series2.strokes.template.setAll({
        strokeDasharray: [2, 2],
        strokeWidth: 2
    });

    // var series3 = chart.series.push(am5xy.LineSeries.new(root, {
    //     name: "S3",
    //     xAxis: xAxis,
    //     yAxis: yAxis,
    //     valueYField: "value3",
    //     valueXField: "date"
    // }));
    // series3.strokes.template.setAll({
    //     strokeDasharray: [2, 2],
    //     strokeWidth: 2
    // });

    // Set date fields
    // https://www.amcharts.com/docs/v5/concepts/data/#Parsing_dates
    root.dateFormatter.setAll({
        dateFormat: "yyyy-MM-dd",
        dateFields: ["valueX"]
    });


    // Set data
    var tinggiAerLaut = [
        {
          "date": -2840166432000,
          "value": 0
        },
        {
          "date": -2808544032000,
          "value": 0.220472441
        },
        {
          "date": -2777008032000,
          "value": -0.440944881
        },
        {
          "date": -2745472032000,
          "value": -0.232283464
        },
        {
          "date": -2713936032000,
          "value": 0.590551181
        },
        {
          "date": -2682313632000,
          "value": 0.531496062
        },
        {
          "date": -2650777632000,
          "value": 0.437007874
        },
        {
          "date": -2619241632000,
          "value": 0.216535433
        },
        {
          "date": -2587705632000,
          "value": 0.299212598
        },
        {
          "date": -2556083232000,
          "value": 0.362204724
        },
        {
          "date": -2524547232000,
          "value": 0.440944881
        },
        {
          "date": -2493011232000,
          "value": 0.374015748
        },
        {
          "date": -2461475232000,
          "value": 0.499999999
        },
        {
          "date": -2429852832000,
          "value": 0.685039369
        },
        {
          "date": -2398316832000,
          "value": 0.303149606
        },
        {
          "date": -2366780832000,
          "value": 0.767716535
        },
        {
          "date": -2335244832000,
          "value": 0.468503937
        },
        {
          "date": -2303622432000,
          "value": 0.673228346
        },
        {
          "date": -2272086432000,
          "value": 1.043307086
        },
        {
          "date": -2240550432000,
          "value": 1.338582676
        },
        {
          "date": -2209014432000,
          "value": 1.125984251
        },
        {
          "date": -2177478432000,
          "value": 1.110236219
        },
        {
          "date": -2145942432000,
          "value": 1.291338581
        },
        {
          "date": -2114406432000,
          "value": 1.606299211
        },
        {
          "date": -2082870432000,
          "value": 1.2007874
        },
        {
          "date": -2051248032000,
          "value": 0.984251968
        },
        {
          "date": -2019712032000,
          "value": 1.251968503
        },
        {
          "date": -1988176032000,
          "value": 1.196850392
        },
        {
          "date": -1956640032000,
          "value": 1.098425196
        },
        {
          "date": -1925017632000,
          "value": 1.27559055
        },
        {
          "date": -1893481632000,
          "value": 1.271653542
        },
        {
          "date": -1861945632000,
          "value": 1.598425195
        },
        {
          "date": -1830409632000,
          "value": 1.476377951
        },
        {
          "date": -1798787232000,
          "value": 1.547244093
        },
        {
          "date": -1767251232000,
          "value": 1.795275589
        },
        {
          "date": -1735715232000,
          "value": 2.10629921
        },
        {
          "date": -1704179232000,
          "value": 2.031496061
        },
        {
          "date": -1672556832000,
          "value": 1.854330707
        },
        {
          "date": -1641020832000,
          "value": 1.791338581
        },
        {
          "date": -1609484832000,
          "value": 1.854330707
        },
        {
          "date": -1577948832000,
          "value": 1.905511809
        },
        {
          "date": -1546326432000,
          "value": 1.988188974
        },
        {
          "date": -1514790432000,
          "value": 1.952755904
        },
        {
          "date": -1483254432000,
          "value": 1.999999998
        },
        {
          "date": -1451719200000,
          "value": 1.712598423
        },
        {
          "date": -1420096800000,
          "value": 1.791338581
        },
        {
          "date": -1388560800000,
          "value": 2.047244092
        },
        {
          "date": -1357024800000,
          "value": 2.003937006
        },
        {
          "date": -1325488800000,
          "value": 1.850393699
        },
        {
          "date": -1293866400000,
          "value": 1.905511809
        },
        {
          "date": -1262330400000,
          "value": 2.062992124
        },
        {
          "date": -1230794400000,
          "value": 2.047244092
        },
        {
          "date": -1199258400000,
          "value": 2.271653541
        },
        {
          "date": -1167636600000,
          "value": 2.440944879
        },
        {
          "date": -1136100600000,
          "value": 2.228346454
        },
        {
          "date": -1104564600000,
          "value": 2.448818895
        },
        {
          "date": -1073028600000,
          "value": 2.295275588
        },
        {
          "date": -1041406200000,
          "value": 2.519685037
        },
        {
          "date": -1009870200000,
          "value": 2.622047241
        },
        {
          "date": -978334200000,
          "value": 2.826771651
        },
        {
          "date": -946798200000,
          "value": 2.618110234
        },
        {
          "date": -915175800000,
          "value": 3.098425194
        },
        {
          "date": -883639800000,
          "value": 3.098425194
        },
        {
          "date": -852109200000,
          "value": 3.098425194
        },
        {
          "date": -820573200000,
          "value": 2.84645669
        },
        {
          "date": -788950800000,
          "value": 2.95669291
        },
        {
          "date": -757409400000,
          "value": 3.251968501
        },
        {
          "date": -725873400000,
          "value": 3.374015745
        },
        {
          "date": -694337400000,
          "value": 3.562992122
        },
        {
          "date": -662716800000,
          "value": 3.51181102
        },
        {
          "date": -631180800000,
          "value": 3.598425193
        },
        {
          "date": -599643000000,
          "value": 3.972440941
        },
        {
          "date": -568107000000,
          "value": 3.870078736
        },
        {
          "date": -536484600000,
          "value": 4.043307082
        },
        {
          "date": -504948600000,
          "value": 3.929133854
        },
        {
          "date": -473412600000,
          "value": 3.964566925
        },
        {
          "date": -441876600000,
          "value": 3.763779524
        },
        {
          "date": -410254200000,
          "value": 4.291338578
        },
        {
          "date": -378718200000,
          "value": 4.346456688
        },
        {
          "date": -347182200000,
          "value": 4.358267712
        },
        {
          "date": -315646200000,
          "value": 4.503937003
        },
        {
          "date": -284023800000,
          "value": 4.748031491
        },
        {
          "date": -252487800000,
          "value": 4.543307082
        },
        {
          "date": -220951800000,
          "value": 4.480314956
        },
        {
          "date": -189414000000,
          "value": 4.169291334
        },
        {
          "date": -157791600000,
          "value": 4.610236216
        },
        {
          "date": -126255600000,
          "value": 4.397637791
        },
        {
          "date": -94719600000,
          "value": 4.452755901
        },
        {
          "date": -63183600000,
          "value": 4.484251964
        },
        {
          "date": -31561200000,
          "value": 4.751968499
        },
        {
          "date": -25200000,
          "value": 4.67716535
        },
        {
          "date": 31510800000,
          "value": 4.881889759
        },
        {
          "date": 63046800000,
          "value": 5.240157475
        },
        {
          "date": 94669200000,
          "value": 5.003937003
        },
        {
          "date": 126205200000,
          "value": 5.472440939
        },
        {
          "date": 157741200000,
          "value": 5.409448813
        },
        {
          "date": 189277200000,
          "value": 5.370078735
        },
        {
          "date": 220899600000,
          "value": 5.303149601
        },
        {
          "date": 252435600000,
          "value": 5.555118105
        },
        {
          "date": 283971600000,
          "value": 5.362204719
        },
        {
          "date": 315507600000,
          "value": 5.598425191
        },
        {
          "date": 347130000000,
          "value": 6.086614167
        },
        {
          "date": 378666000000,
          "value": 5.858267711
        },
        {
          "date": 410202000000,
          "value": 6.188976372
        },
        {
          "date": 441738000000,
          "value": 6.153543301
        },
        {
          "date": 473360400000,
          "value": 5.74803149
        },
        {
          "date": 504896400000,
          "value": 5.771653537
        },
        {
          "date": 536432400000,
          "value": 5.795275585
        },
        {
          "date": 567968400000,
          "value": 5.980314955
        },
        {
          "date": 599590800000,
          "value": 6.157480309
        },
        {
          "date": 631126800000,
          "value": 6.232283458
        },
        {
          "date": 662662800000,
          "value": 6.334645663
        },
        {
          "date": 694198800000,
          "value": 6.35826771
        },
        {
          "date": 725821200000,
          "value": 6.291338576
        },
        {
          "date": 757357200000,
          "value": 6.499999993
        },
        {
          "date": 788893200000,
          "value": 6.618110229
        },
        {
          "date": 820429200000,
          "value": 6.787401568
        },
        {
          "date": 852051600000,
          "value": 7.066929127
        },
        {
          "date": 883587600000,
          "value": 6.665354324
        },
        {
          "date": 915123600000,
          "value": 7.011811016
        },
        {
          "date": 946659600000,
          "value": 7.062992119
        },
        {
          "date": 978282000000,
          "value": 7.287401567
        },
        {
          "date": 1009818000000,
          "value": 7.381889756
        },
        {
          "date": 1041354000000,
          "value": 7.759842512
        },
        {
          "date": 1072890000000,
          "value": 7.740157472
        },
        {
          "date": 1104512400000,
          "value": 7.74409448
        },
        {
          "date": 1136048400000,
          "value": 7.917322827
        },
        {
          "date": 1167584400000,
          "value": 7.996062984
        },
        {
          "date": 1199120400000,
          "value": 8.350393692
        },
        {
          "date": 1230742800000,
          "value": 8.586614164
        },
        {
          "date": 1262278800000,
          "value": 8.901574794
        },
        {
          "date": 1293814800000,
          "value": 8.96456692
        },
        {
          "date": 1325350800000,
          "value": 9.326771644
        },
        {
          "date": 1356973200000,
          "value": 8.980314951
        }
      ]

    let prediksiAerLaut = [
        {
          "date": 946659600000,
          "value": 7.06107985777146
        },
        {
          "date": 978282000000,
          "value": 7.227507131103323
        },
        {
          "date": 1009818000000,
          "value": 7.393934404435186
        },
        {
          "date": 1041354000000,
          "value": 7.560361677767105
        },
        {
          "date": 1072890000000,
          "value": 7.726788951098968
        },
        {
          "date": 1104512400000,
          "value": 7.89321622443083
        },
        {
          "date": 1136048400000,
          "value": 8.059643497762693
        },
        {
          "date": 1167584400000,
          "value": 8.226070771094555
        },
        {
          "date": 1199120400000,
          "value": 8.392498044426418
        },
        {
          "date": 1230742800000,
          "value": 8.55892531775828
        },
        {
          "date": 1262278800000,
          "value": 8.725352591090143
        },
        {
          "date": 1293814800000,
          "value": 8.891779864422006
        },
        {
          "date": 1325350800000,
          "value": 9.058207137753868
        },
        {
          "date": 1356973200000,
          "value": 9.224634411085788
        },
        {
          "date": 1388509200000,
          "value": 9.39106168441765
        },
        {
          "date": 1420045200000,
          "value": 9.557488957749513
        },
        {
          "date": 1451581200000,
          "value": 9.723916231081375
        },
        {
          "date": 1483203600000,
          "value": 9.890343504413238
        },
        {
          "date": 1514739600000,
          "value": 10.0567707777451
        },
        {
          "date": 1546275600000,
          "value": 10.223198051076963
        },
        {
          "date": 1577811600000,
          "value": 10.389625324408826
        },
        {
          "date": 1609434000000,
          "value": 10.556052597740688
        },
        {
          "date": 1640970000000,
          "value": 10.72247987107255
        },
        {
          "date": 1672506000000,
          "value": 10.88890714440447
        },
        {
          "date": 1704042000000,
          "value": 11.055334417736333
        },
        {
          "date": 1735664400000,
          "value": 11.221761691068195
        },
        {
          "date": 1767200400000,
          "value": 11.388188964400058
        },
        {
          "date": 1798736400000,
          "value": 11.55461623773192
        },
        {
          "date": 1830272400000,
          "value": 11.721043511063783
        },
        {
          "date": 1861894800000,
          "value": 11.887470784395646
        },
        {
          "date": 1893430800000,
          "value": 12.053898057727508
        },
        {
          "date": 1924966800000,
          "value": 12.220325331059371
        },
        {
          "date": 1956502800000,
          "value": 12.386752604391233
        },
        {
          "date": 1988125200000,
          "value": 12.553179877723153
        },
        {
          "date": 2019661200000,
          "value": 12.719607151055015
        },
        {
          "date": 2051197200000,
          "value": 12.886034424386878
        },
        {
          "date": 2082733200000,
          "value": 13.05246169771874
        },
        {
          "date": 2114355600000,
          "value": 13.218888971050603
        },
        {
          "date": 2145891600000,
          "value": 13.385316244382466
        },
        {
          "date": 2177427600000,
          "value": 13.551743517714328
        },
        {
          "date": 2208963600000,
          "value": 13.718170791046191
        },
        {
          "date": 2240586000000,
          "value": 13.884598064378054
        },
        {
          "date": 2272122000000,
          "value": 14.051025337709916
        },
        {
          "date": 2303658000000,
          "value": 14.217452611041836
        },
        {
          "date": 2335194000000,
          "value": 14.383879884373698
        },
        {
          "date": 2366816400000,
          "value": 14.55030715770556
        },
        {
          "date": 2398352400000,
          "value": 14.716734431037423
        },
        {
          "date": 2429888400000,
          "value": 14.883161704369286
        },
        {
          "date": 2461424400000,
          "value": 15.049588977701148
        },
        {
          "date": 2493046800000,
          "value": 15.216016251033011
        },
        {
          "date": 2524582800000,
          "value": 15.382443524364874
        }
      ]
    // var data = [{
    //     date: new Date(2019, 5, 12).getTime(),
    //     value1: 50,
    //     value2: 48,
    //     value3: 58,
    //     previousDate: new Date(2019, 5, 5)
    // }, {
    //     date: new Date(2019, 5, 13).getTime(),
    //     value1: 53,
    //     value2: 51,
    //     value3: 68,
    //     previousDate: "2019-05-06"
    // }, {
    //     date: new Date(2019, 5, 14).getTime(),
    //     value1: 56,
    //     value2: 58,
    //     value3: 58,
    //     previousDate: "2019-05-07"
    // }, {
    //     date: new Date(2019, 5, 15).getTime(),
    //     value1: 52,
    //     value2: 53,
    //     value3: 65,
    //     previousDate: "2019-05-08"
    // }, {
    //     date: new Date(2019, 5, 16).getTime(),
    //     value1: 48,
    //     value2: 44,
    //     value3: 48,
    //     previousDate: "2019-05-09"
    // }, {
    //     date: new Date(2019, 5, 17).getTime(),
    //     value1: 47,
    //     value2: 42,
    //     value3: 68,
    //     previousDate: "2019-05-10"
    // }, {
    //     date: new Date(2019, 5, 18).getTime(),
    //     value1: 59,
    //     value2: 55,
    //     value3: 78,
    //     previousDate: "2019-05-11"
    // }]

    series.data.setAll(tinggiAerLaut);
    series2.data.setAll(prediksiAerLaut);
    // series3.data.setAll(data);

    makeSeries("Ketinggian", "Prediksi");
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    series2.appear(1000);
    // series3.appear(1000);
    chart.appear(1000, 100);

});