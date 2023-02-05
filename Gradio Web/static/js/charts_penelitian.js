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

    var data = [{
        "year": "2015",
        "mobil": 2.5,
        "bis": 2.5,
        "mobil barang": 2.1,
        "motor": 1,
    }, {
        "year": "2016",
        "mobil": 2.6,
        "bis": 2.7,
        "mobil barang": 2.2,
        "motor": 0.5,
    }, {
        "year": "2017",
        "mobil": 2.8,
        "bis": 2.9,
        "mobil barang": 2.4,
        "motor": 0.3,
    }, {
        "year": "2021",
        "mobil": 2.5,
        "bis": 2.5,
        "mobil barang": 2.1,
        "motor": 1,
    }, {
        "year": "2022",
        "mobil": 10.6,
        "bis": 2.7,
        "mobil barang": 2.2,
        "motor": 0.5,
    }, {
        "year": "2023",
        "mobil": 3.8,
        "bis": 2.9,
        "mobil barang": 16,
        "motor": 0.3,
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
            categoryXField: "year"
        }));

        series.columns.template.setAll({
            tooltipText: "{name}, {categoryX}: {valueY}",
            tooltipY: am5.percent(10)
        });
        series.data.setAll(data);

        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        series.appear();

        series.bullets.push(function () {
            return am5.Bullet.new(root, {
                sprite: am5.Label.new(root, {
                    text: "{valueY}",
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
    var data = generateDatas(200);
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
    for (var i = 1; i < 4; i++) {
        var series = chart.series.push(am5xy.LineSeries.new(root, {
            name: "Series " + i,
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

        var data = generateDatas(100);
        series.data.setAll(data);

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


    var data = generateDatas(50);
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
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value1",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
            labelText: "{valueX}: {valueY}\n{previousDate}: {value2}"
        })
    }));

    series.strokes.template.setAll({
        strokeWidth: 2
    });

    series.get("tooltip").get("background").set("fillOpacity", 0.5);

    var series2 = chart.series.push(am5xy.LineSeries.new(root, {
        name: "Series 2",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value2",
        valueXField: "date"
    }));
    series2.strokes.template.setAll({
        strokeDasharray: [2, 2],
        strokeWidth: 2
    });

    var series3 = chart.series.push(am5xy.LineSeries.new(root, {
        name: "Series 3",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value3",
        valueXField: "date"
    }));
    series3.strokes.template.setAll({
        strokeDasharray: [2, 2],
        strokeWidth: 2
    });

    // Set date fields
    // https://www.amcharts.com/docs/v5/concepts/data/#Parsing_dates
    root.dateFormatter.setAll({
        dateFormat: "yyyy-MM-dd",
        dateFields: ["valueX"]
    });


    // Set data
    var data = [{
        date: new Date(2019, 5, 12).getTime(),
        value1: 50,
        value2: 48,
        value3: 58,
        previousDate: new Date(2019, 5, 5)
    }, {
        date: new Date(2019, 5, 13).getTime(),
        value1: 53,
        value2: 51,
        value3: 68,
        previousDate: "2019-05-06"
    }, {
        date: new Date(2019, 5, 14).getTime(),
        value1: 56,
        value2: 58,
        value3: 58,
        previousDate: "2019-05-07"
    }, {
        date: new Date(2019, 5, 15).getTime(),
        value1: 52,
        value2: 53,
        value3: 65,
        previousDate: "2019-05-08"
    }, {
        date: new Date(2019, 5, 16).getTime(),
        value1: 48,
        value2: 44,
        value3: 48,
        previousDate: "2019-05-09"
    }, {
        date: new Date(2019, 5, 17).getTime(),
        value1: 47,
        value2: 42,
        value3: 68,
        previousDate: "2019-05-10"
    }, {
        date: new Date(2019, 5, 18).getTime(),
        value1: 59,
        value2: 55,
        value3: 78,
        previousDate: "2019-05-11"
    }]

    series.data.setAll(data);
    series2.data.setAll(data);
    series3.data.setAll(data);

    makeSeries("Ketinggian", "value1");
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    series2.appear(1000);
    series3.appear(1000);
    chart.appear(1000, 100);

});