am5.ready(function() {

// Create root
var root = am5.Root.new("mapindo"); 

// Set themes
root.setThemes([
  am5themes_Animated.new(root)
]);

// Create chart
var chart = root.container.children.push(am5map.MapChart.new(root, {
  panX: "rotateX",
  panY: "none",
  wheeLY: "zoom",
  layout: root.horizontalLayout,
  minZoomLevel : 0.5
}));

// Create polygon series
var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
  geoJSON: am5geodata_indonesiaLow,
  valueField: "value",
  calculateAggregates: true
}));

polygonSeries.mapPolygons.template.setAll({
  tooltipText: "{name}: {value}"
});

polygonSeries.set("heatRules", [{
  target: polygonSeries.mapPolygons.template,
  dataField: "value",
  min: am5.color(0xff621f),
  max: am5.color(0x661f00),
  key: "fill"
}]);

polygonSeries.mapPolygons.template.events.on("pointerover", function(ev) {
  heatLegend.showValue(ev.target.dataItem.get("value"));
});

polygonSeries.data.setAll([
  { id: "ID-AC", value: 40 },
  { id: "ID-BA", value: 50 },
  { id: "ID-BE", value: 16 },
  { id: "ID-BB", value: 15 },
  { id: "ID-BT", value: 18 },
  { id: "ID-GO", value: 36 },
  { id: "ID-AC", value: 20 },
  { id: "ID-JA", value: 20 },
  { id: "ID-JB", value: 20 },
  { id: "ID-JI", value: 43 },
  { id: "ID-JK", value: 10},
  { id: "ID-JT", value: 4 },
  { id: "ID-KR", value: 7 },
  { id: "ID-KU", value: 8 },
  { id: "ID-KB", value: 11 },
  { id: "ID-BT", value: 15 },
  { id: "ID-KI", value: 18 },
  { id: "ID-KS", value: 18 },
  { id: "ID-KT", value: 20 },
  { id: "ID-LA", value: 41 },
  { id: "ID-MA", value: 2 },
  { id: "ID-MU", value: 33 },
  { id: "ID-NB", value: 44 },
  { id: "ID-NT", value: 62 },
  { id: "ID-PA", value: 51 },
  { id: "ID-PB", value: 51 },
  { id: "ID-RI", value: 26},
  { id: "ID-SA", value: 12},
  { id: "ID-SU", value: 10 },
  { id: "ID-SB", value: 4 },
  { id: "ID-SG", value: 62 },
  { id: "ID-SN", value: 51 },
  { id: "ID-SR", value: 26 },
  { id: "ID-SS", value: 33 },
  { id: "ID-ST", value: 44 },
  { id: "ID-YO", value: 6 },
]);

var heatLegend = chart.children.push(am5.HeatLegend.new(root, {
  orientation: "vertical",
  startColor: am5.color(0xff621f),
  endColor: am5.color(0x661f00),
  startText: "Lowest",
  endText: "Highest",
  stepCount: 5
}));


heatLegend.startLabel.setAll({
  fontSize: 12,
  fill: heatLegend.get("startColor")
});

heatLegend.endLabel.setAll({
  fontSize: 12,
  fill: heatLegend.get("endColor")
});

// change this to template when possible
polygonSeries.events.on("datavalidated", function () {
  heatLegend.set("startValue", polygonSeries.getPrivate("valueLow"));
  heatLegend.set("endValue", polygonSeries.getPrivate("valueHigh"));
});

}); // end am5.ready()