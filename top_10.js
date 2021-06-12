// JS 
var chart; 
var palette = ['#FF5722']; 
JSC.fetch( 
  'top_10.csv'
) 
  .then(function(response) { 
    return response.text(); 
  }) 
  .then(function(text) { 
    var data = JSC.csv2Json(text); 
    chart = renderChart(data); 
  }) 
  .catch(function(error) { 
    console.error(error); 
  }); 
  
function renderChart(data) { 
  // Process the data 
  var dataNest = JSC.nest().key('date'); 
  var series = [ 
    { 
      type: 'bubble', 
      opacity: 0.5, 
      defaultPoint_marker: { 
        size: 3, 
        type: 'circle', 
        visible: true
      }, 
      points: dataNest 
        .pointRollup(function(key, val) { 
          var values = val[0]; 
          return { 
            x: values.date, 
            y: 1, 
            z: values.id, 
            attributes: { 
              date: values.date, 
              freq: values.id 
            } 
          }; 
        }) 
        .points(data) 
    } 
  ]; 
  
  return JSC.chart('chartDiv', { 
    type: 'bubble', 
    title_label_text: 
      'Top 10 Earthquake Days since 1965', 
    legend_visible: false, 
    defaultPoint: { 
      tooltip: 
        '%date (<b>{%xValue:date d}</b>)<br># earthquakes <b>{%zValue}</b>', 
      focusGlow: { color: palette[0], width: 4 }, 
      hoverAction: 'highlightPoint', 
      states_mute_opacity: 0.5 
    }, 
    palette: palette, 
    yAxis: { 
      defaultTick_enabled: false, 
      customTicks: [ 
        { value: 1, label_visible: false } 
      ] 
    }, 
    xAxis: { 
      scale: { 
        type: 'time', 
        interval: { unit: 'year', multiplier: 5 } 
      } 
    }, 
    series: series, 
    toolbar_visible: false
  }); 
} 