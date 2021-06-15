var startDate = new Date ("1965"),
    endDate = new Date ("2016");

var margin = {top:50, right:50, bottom:0, left:50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var svg = d3.select("#vis")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);  


function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
var yearrange = range(1965, 2016);
    console.log(yearrange);


function init() {
    d3.csv("AllQuakes.csv").then(function(data) {

        var alaskavchile = []
        var alaskavhima = []
        var chilevhima = []

        alaskaQuakes = []
        chileQuakes = []
        himaQuakes = []

        data.forEach(function(data) {
            if (parseInt(data.Year) === 1965) {

                var alaskaQ = +data.AlaskaQuakes
                var chileQ = +data.ChileQuakes
                var himaQ = +data.HimaQuakes

                alaskaQuakes.push(alaskaQ)
                chileQuakes.push(chileQ)
                himaQuakes.push(himaQ)

            }
            
        });
        console.log(data)
        console.log(alaskaQuakes)



        for(const alaska of alaskaQuakes) {
            avchor = []
            for(const chile of chileQuakes){
                
                if (alaska === 0 && chile === 0) {
                    avchor.push(0)
                }
                else if (alaska > 0 && chile > 0) {
                   avchor.push(10)
                }
                else{avchor.push(1)}
                }

            alaskavchile.push(avchor)
             
        }

        for(const alaska of alaskaQuakes) {
            avchor = []
            for(const hima of himaQuakes){
                
                if (alaska === 0 && hima === 0) {
                    avchor.push(0)
                }
                else if (alaska > 0 && hima > 0) {
                   avchor.push(10)
                }
                else{avchor.push(1)}
                }
                
            alaskavhima.push(avchor)
             
        }

        for(const chile of chileQuakes) {
            avchor = []
            for(const hima of himaQuakes){
                
                if (chile === 0 && hima === 0) {
                    avchor.push(0)
                }
                else if (chile > 0 && hima > 0) {
                   avchor.push(10)
                }
                else{avchor.push(1)}
                }
                
            chilevhima.push(avchor)
             
        }
       
        
        console.log(alaskavchile)
        console.log(alaskavhima)
        console.log(chilevhima)

        var daterange = range(1, 365);

        var alaskavchiledata = [
            {
              z: alaskavchile,
              x: daterange,
              y: daterange,
              type: 'heatmap',
              colorscale: [
                ['0.0', 'rgb(205,205,205)'],
                ['1', 'rgb(0,0,255)'],
                ['50', 'rgb(255,0,0)'],
              ],
              showscale: false,
              hoverongaps: false,
              hovertemplate:
              "%{yaxis.title.text} day: %{y:}<br>" +
              "%{xaxis.title.text} day: %{x:}<br>" +
              "<extra></extra>"
            }
          ];

        var alaskavchilelayout = {
            title: `Earthquakes in Alaska vs Pacific SW America in 1965`,
            font:{
              family: 'Arial'
            },
            xaxis: {
                title: {
                  text: 'Pacific SW America',
                  font: {
                    family: 'Arial',
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'Alaska',
                  font: {
                    family: 'Arial',
                  }
                }
              },
            height: 500,
            width: 500
        }
          
          Plotly.newPlot('alaskavchile', alaskavchiledata, alaskavchilelayout);

        
          var alaskavhimadata = [
            {
              z: alaskavhima,
              x: daterange,
              y: daterange,
              type: 'heatmap',
              colorscale: [
                ['0.0', 'rgb(205,205,205)'],
                ['1', 'rgb(0,0,255)'],
                ['50', 'rgb(255,0,0)'],
              ],
              showscale: false,
              hoverongaps: false,
              hovertemplate:
              "%{yaxis.title.text} day: %{y:}<br>" +
              "%{xaxis.title.text} day: %{x:}<br>" +
              "<extra></extra>"
            }
          ];

        var alaskavhimalayout = {
            title: `Earthquakes in Alaska vs Himalaya Region in 1965`,
            font:{
              family: 'Arial'
            },
            xaxis: {
                title: {
                  text: 'Himalaya',
                  font: {
                    family: 'Arial',
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'Alaska',
                  font: {
                    family: 'Arial',
                  }
                }
              },
            height: 500,
            width: 500
        }
          
          Plotly.newPlot('alaskavhima', alaskavhimadata, alaskavhimalayout);

        
        var chilevhimadata = [
            {
              z: chilevhima,
              x: daterange,
              y: daterange,
              type: 'heatmap',
              colorscale: [
                ['0.0', 'rgb(205,205,205)'],
                ['1', 'rgb(0,0,255)'],
                ['50', 'rgb(255,0,0)'],
              ],
              showscale: false,
              hoverongaps: false,
              hovertemplate:
              "%{yaxis.title.text} day: %{y:}<br>" +
              "%{xaxis.title.text} day: %{x:}<br>" +
              "<extra></extra>"
            }
          ];

        var chilevhimalayout = {
            title: `Earthquakes in Pacific SW America vs Himalaya Region in 1965`,
            font:{
              family: 'Arial'
            },
            xaxis: {
                title: {
                  text: 'Himalaya',
                  font: {
                    family: 'Arial',
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'Pacific SW America',
                  font: {
                    family: 'Arial',
                  }
                }
              },
            height: 500,
            width: 500
        }
          
          Plotly.newPlot('chilevhima', chilevhimadata, chilevhimalayout);
    })
}



// var startDate = new Date ("1965"),
//     endDate = new Date ("2016");

// var margin = {top:50, right:50, bottom:0, left:50},
//     width = 960 - margin.left - margin.right,
//     height = 500 - margin.top - margin.bottom;

// var svg = d3.select("#vis")
//     .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom);  


// function range(start, end) {
//     return Array(end - start + 1).fill().map((_, idx) => start + idx)
// }
// var yearrange = range(1965, 2016);
//     console.log(yearrange);

////////// slider //////////

var sliderStep = d3
.sliderBottom()
.min(d3.min(yearrange))
.max(d3.max(yearrange))
.width(900)
.tickFormat(d3.format('1'))
.ticks(10)
.step(1)
.default(1)
.on('onchange', val => {
  d3.select('p#value-step').text(d3.format('1')(val));
updatePlots(val)
});

var gStep = d3
.select('div#slider-step')
.append('svg')
.attr('width', 1000)
.attr('height', 100)
.append('g')
.attr('transform', 'translate(30,30)');

gStep.call(sliderStep);

var selYear = d3.select('p#value-step').text(d3.format('1')(sliderStep.value()));




function updatePlots(val) {
    d3.csv("AllQuakes.csv").then(function(data) {

        var alaskavchile = []
        var alaskavhima = []
        var chilevhima = []

        alaskaQuakes = []
        chileQuakes = []
        himaQuakes = []

        data.forEach(function(data) {
            if (parseInt(data.Year) === val) {

                var alaskaQ = +data.AlaskaQuakes
                var chileQ = +data.ChileQuakes
                var himaQ = +data.HimaQuakes

                alaskaQuakes.push(alaskaQ)
                chileQuakes.push(chileQ)
                himaQuakes.push(himaQ)

            }
            
        });
        console.log(data)
        console.log(alaskaQuakes)



        for(const alaska of alaskaQuakes) {
            avchor = []
            for(const chile of chileQuakes){
                
                if (alaska === 0 && chile === 0) {
                    avchor.push(0)
                }
                else if (alaska > 0 && chile > 0) {
                   avchor.push(10)
                }
                else{avchor.push(1)}
                }

            alaskavchile.push(avchor)
             
        }

        for(const alaska of alaskaQuakes) {
            avchor = []
            for(const hima of himaQuakes){
                
                if (alaska === 0 && hima === 0) {
                    avchor.push(0)
                }
                else if (alaska > 0 && hima > 0) {
                   avchor.push(10)
                }
                else{avchor.push(1)}
                }
                
            alaskavhima.push(avchor)
             
        }

        for(const chile of chileQuakes) {
            avchor = []
            for(const hima of himaQuakes){
                
                if (chile === 0 && hima === 0) {
                    avchor.push(0)
                }
                else if (chile > 0 && hima > 0) {
                   avchor.push(10)
                }
                else{avchor.push(1)}
                }
                
            chilevhima.push(avchor)
             
        }
       
        
        console.log(alaskavchile)
        console.log(alaskavhima)
        console.log(chilevhima)

        var daterange = range(1, 365);

        var alaskavchiledata = [
            {
              z: alaskavchile,
              x: daterange,
              y: daterange,
              type: 'heatmap',
              colorscale: [
                ['0.0', 'rgb(205,205,205)'],
                ['1', 'rgb(0,0,255)'],
                ['50', 'rgb(255,0,0)'],
              ],
              showscale: false,
            //   colorscale: 'YlOrRd',
              hoverongaps: false,
              hovertemplate:
              "%{yaxis.title.text} day: %{y:}<br>" +
              "%{xaxis.title.text} day: %{x:}<br>" +
              "<extra></extra>"
            }
          ];

        var alaskavchilelayout = {
            title: `Earthquakes in Alaska vs Pacific SW America in ${val}`,
            font:{
              family: 'Arial'
            },
            xaxis: {
                title: {
                  text: 'Pacific SW America',
                  font: {
                    family: 'Arial',
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'Alaska',
                  font: {
                    family: 'Arial',
                  }
                }
              },
            height: 500,
            width: 500
        }
          
          Plotly.newPlot('alaskavchile', alaskavchiledata, alaskavchilelayout);

        
          var alaskavhimadata = [
            {
              z: alaskavhima,
              x: daterange,
              y: daterange,
              type: 'heatmap',
              colorscale: [
                ['0.0', 'rgb(205,205,205)'],
                ['1', 'rgb(0,0,255)'],
                ['50', 'rgb(255,0,0)'],
              ],
              showscale: false,
              hoverongaps: false,
              hovertemplate:
              "%{yaxis.title.text} day: %{y:}<br>" +
              "%{xaxis.title.text} day: %{x:}<br>" +
              "<extra></extra>"
            }
          ];

        var alaskavhimalayout = {
            title: `Earthquakes in Alaska vs Himalaya Region in ${val}`,
            font:{
              family: 'Arial'
            },
            xaxis: {
                title: {
                  text: 'Himalaya',
                  font: {
                    family: 'Arial',
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'Alaska',
                  font: {
                    family: 'Arial',
                  }
                }
              },
            height: 500,
            width: 500
        }
          
          Plotly.newPlot('alaskavhima', alaskavhimadata, alaskavhimalayout);

        
        var chilevhimadata = [
            {
              z: chilevhima,
              x: daterange,
              y: daterange,
              type: 'heatmap',
              colorscale: [
                ['0.0', 'rgb(205,205,205)'],
                ['1', 'rgb(0,0,255)'],
                ['50', 'rgb(255,0,0)'],
              ],
              showscale: false,
              hoverongaps: false,
              hovertemplate:
              "%{yaxis.title.text} day: %{y:}<br>" +
              "%{xaxis.title.text} day: %{x:}<br>" +
              "<extra></extra>"
            }
          ];

        var chilevhimalayout = {
            title: `Earthquakes in Pacific SW America vs Himalaya Region in ${val}`,
            font:{
              family: 'Arial'
            },
            xaxis: {
                title: {
                  text: 'Himalaya',
                  font: {
                    family: 'Arial',
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'Pacific SW America',
                  font: {
                    family: 'Arial',
                  }
                }
              },
            height: 500,
            width: 500
        }
          
          Plotly.newPlot('chilevhima', chilevhimadata, chilevhimalayout);
 

    })


};


function update(h) {
        // update position and text of label according to slider scale
        handle.attr("cx", x(h));
        label
          .attr("x", x(h))
          .text(formatDate(h));
      
        // filter data set and redraw plot
        var newData = dataset.filter(function(d) {
          return d.date < h;
        })
        drawPlot(newData);
}

init();