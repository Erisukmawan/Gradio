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
  { id: "ID-AC", value: 4447100 },
  { id: "ID-BA", value: 626932 },
  { id: "ID-BE", value: 626932 },
  { id: "ID-BB", value: 5130632 },
  { id: "ID-BT", value: 2673400 },
  { id: "ID-GO", value: 33871648 },
  { id: "ID-AC", value: 4447100 },
  { id: "ID-JA", value: 626932 },
  { id: "ID-JB", value: 5130632 },
  { id: "ID-JI", value: 2673400 },
  { id: "ID-JK", value: 33871648 },
  { id: "ID-JT", value: 4447100 },
  { id: "ID-KR", value: 626932 },
  { id: "ID-KU", value: 626932 },
  { id: "ID-KB", value: 5130632 },
  { id: "ID-BT", value: 2673400 },
  { id: "ID-KI", value: 33871648 },
  { id: "ID-KS", value: 4447100 },
  { id: "ID-KT", value: 626932 },
  { id: "ID-LA", value: 5130632 },
  { id: "ID-MA", value: 2673400 },
  { id: "ID-MU", value: 33871648 },
  { id: "ID-NB", value: 4447100 },
  { id: "ID-NT", value: 626932 },
  { id: "ID-PA", value: 5130632 },
  { id: "ID-PB", value: 5130632 },
  { id: "ID-RI", value: 2673400 },
  { id: "ID-SA", value: 33871648 },
  { id: "ID-SU", value: 33871648 },
  { id: "ID-SB", value: 4447100 },
  { id: "ID-SG", value: 626932 },
  { id: "ID-SN", value: 5130632 },
  { id: "ID-SR", value: 2673400 },
  { id: "ID-SS", value: 33871648 },
  { id: "ID-ST", value: 4447100 },
  { id: "ID-YO", value: 626932 },
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