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
  calculateAggregates: true,
  exclude: ['ID-YO', 'MY-13', 'MY-12', 'TL', 'BN']
}));

polygonSeries.mapPolygons.template.setAll({
  tooltipText: "{name}: {value}"
});

polygonSeries.set("heatRules", [{
  target: polygonSeries.mapPolygons.template,
  dataField: "value",
  min: am5.color(0x337ade),
  max: am5.color(0xf70505),
  key: "fill"
}]);

polygonSeries.mapPolygons.template.events.on("pointerover", function(ev) {
  heatLegend.showValue(ev.target.dataItem.get("value"));
});

polygonSeries.data.setAll([
  { id: "ID-AC", value: 26.02 },
  { id: "ID-BA", value: 25.83 },
  { id: "ID-BE", value: 26.58 },
  { id: "ID-BB", value: 27.92 },
  { id: "ID-BT", value: 27.01 },
  { id: "ID-GO", value: 24.82 },
  { id: "ID-JA", value: 28.16 },
  { id: "ID-JB", value: 25.93 },
  { id: "ID-JI", value: 26.88 },
  { id: "ID-JK", value: 28.06 },
  { id: "ID-JT", value: 26.63 },
  { id: "ID-KR", value: 28.12 },
  { id: "ID-KU", value: 26 },
  { id: "ID-KB", value: 27.23 },
  { id: "ID-KI", value: 26.82 },
  { id: "ID-KS", value: 26.95 },
  { id: "ID-KT", value: 27.01 },
  { id: "ID-LA", value: 26.61 },
  { id: "ID-MA", value: 26.07 },
  { id: "ID-MU", value: 25.39 },
  { id: "ID-NB", value: 25.76 },
  { id: "ID-NT", value: 25.49 },
  { id: "ID-PA", value: 24.38 },
  { id: "ID-PB", value: 25.81 },
  { id: "ID-RI", value: 28.33 },
  { id: "ID-SA", value: 24.80 },
  { id: "ID-SU", value: 26.86 },
  { id: "ID-SB", value: 24.23 },
  { id: "ID-SG", value: 25.60 },
  { id: "ID-SN", value: 24.80 },
  { id: "ID-SR", value: 24.23 },
  { id: "ID-SS", value: 27.65 },
  { id: "ID-ST", value: 24.50 },
]);

var heatLegend = chart.children.push(am5.HeatLegend.new(root, {
  orientation: "vertical",
  startColor: am5.color(0x337ade),
  endColor: am5.color(0xf70505),
  startText: "Terendah",
  endText: "Tertinggi",
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