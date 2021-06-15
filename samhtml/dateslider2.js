



var formatDateIntoYear = d3.timeFormat("%Y");
var formatDate = d3.timeFormat("%b %Y");
var parseDate = d3.timeParse("%m/%d/%y");

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
    d3.csv("chileMonth2.csv").then(function(chiledata) {

        var chilemonth = []
        var chilequakes = []
        var chilemag = []

        chiledata.forEach(function(data) {
            if (parseInt(data.year) === 1965) {
                chilemonth.push(parseInt(data.Month))
                chilequakes.push(parseInt(data.quakes))
                chilemag.push(parseFloat(data.AVGMag))
            }
        });


        var chiletrace1 = {
            x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            y: chilemag,
            name: 'Average Magnitude',
            type: 'bar'
          };
          
        var chiletrace2 = {
            x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            y: chilequakes,
            name: 'Number of Earthquakes',
            type: 'bar'
        };
          
        var chilebardata = [chiletrace1, chiletrace2];

        var chilebarlayout = {
            title: `Earthquakes in 1965 Pacific SW America`,
            font:{
              family: 'Arial'
            },
            yaxis: {
              title: 'Average magnitude'
            },
            yaxis2: {
              title: 'Number of Earthquakes',
              side: 'right'
            },
            height: 300,
            width: 950
        }
    


        Plotly.newPlot("chile", chilebardata, chilebarlayout);
    })




    d3.csv("alaskaMonth2.csv").then(function(alaskadata) {

        var alaskamonth = []
        var alaskaquakes = []
        var alaskamag = []

        alaskadata.forEach(function(data) {
            if (parseInt(data.year) === 1965) {
                alaskamonth.push(parseInt(data.Month))
                alaskaquakes.push(parseInt(data.quakes))
                alaskamag.push(parseFloat(data.AVGMag))
            }
        });


        var alaskatrace1 = {
            x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            y: alaskamag,
            name: 'Average Magnitude',
            type: 'bar'
          };
          
        var alaskatrace2 = {
            x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            y: alaskaquakes,
            name: 'Number of Earthquakes',
            // yaxis: 'y2',
            type: 'bar'
        };
          
        var alaskabardata = [alaskatrace1, alaskatrace2];

        var alaskabarlayout = {
            title: `Earthquakes in 1965 South Alaska`,
            font:{
              family: 'Arial'
            },
            yaxis: {
            //   zeroline: true,
              title: 'Average magnitude'
            },
            yaxis2: {
              title: 'Number of Earthquakes',
              side: 'right'
            },
            height: 300,
            width: 950
        }
    
        // var barlayout = {
        //     height: 400,
        //     width: 950
        // }

        // console.log(month)
        // console.log(quakes)
        // console.log(mag)
        // console.log(val)


        Plotly.newPlot("alaska", alaskabardata, alaskabarlayout);
    })




    d3.csv("himaMonth2.csv").then(function(himadata) {

        var himamonth = []
        var himaquakes = []
        var himamag = []

        himadata.forEach(function(data) {
            if (parseInt(data.year) === 1965) {
                himamonth.push(parseInt(data.Month))
                himaquakes.push(parseInt(data.quakes))
                himamag.push(parseFloat(data.AVGMag))
            }
        });


        var trace1 = {
            x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            y: himamag,
            name: 'Average Magnitude',
            type: 'bar'
          };
          
        var trace2 = {
            x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            y: himaquakes,
            name: 'Number of Earthquakes',
            // yaxis: 'y2',
            type: 'bar'
        };
          
        var himabardata = [trace1, trace2];

        var himabarlayout = {
            title: `Earthquakes in 1965 Himalaya`,
            font:{
              family: 'Arial'
            },
            yaxis: {
            //   zeroline: true,
              title: 'Average magnitude'
            },
            yaxis2: {
              title: 'Number of Earthquakes',
              side: 'right'
            },
            height: 300,
            width: 950
        }
    


        Plotly.newPlot("himalaya", himabardata, himabarlayout);
    })



}


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
    d3.csv("chileMonth2.csv").then(function(chiledata) {

        var chilemonth = []
        var chilequakes = []
        var chilemag = []

        chiledata.forEach(function(data) {
            if (parseInt(data.year) === val) {
                chilemonth.push(parseInt(data.Month))
                chilequakes.push(parseInt(data.quakes))
                chilemag.push(parseFloat(data.AVGMag))
            }
        });


        var chiletrace1 = {
            x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            y: chilemag,
            name: 'Average Magnitude',
            type: 'bar'
          };
          
        var chiletrace2 = {
            x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            y: chilequakes,
            name: 'Number of Earthquakes',
            // yaxis: 'y2',
            type: 'bar'
        };
          
        var chilebardata = [chiletrace1, chiletrace2];

        var chilebarlayout = {
            title: `Earthquakes in ${val} Pacific SW America`,
            font:{
              family: 'Arial'
            },
            yaxis: {
            //   zeroline: true,
              title: 'Average magnitude'
            },
            yaxis2: {
              title: 'Number of Earthquakes',
              side: 'right'
            },
            height: 300,
            width: 950
        }
    
        // var barlayout = {
        //     height: 400,
        //     width: 950
        // }

        // console.log(month)
        // console.log(quakes)
        // console.log(mag)
        // console.log(val)
        // console.log(chiledata)

        Plotly.newPlot("chile", chilebardata, chilebarlayout);
    })




    d3.csv("alaskaMonth2.csv").then(function(alaskadata) {

        var alaskamonth = []
        var alaskaquakes = []
        var alaskamag = []

        alaskadata.forEach(function(data) {
            if (parseInt(data.year) === val) {
                alaskamonth.push(parseInt(data.Month))
                alaskaquakes.push(parseInt(data.quakes))
                alaskamag.push(parseFloat(data.AVGMag))
            }
        });


        var alaskatrace1 = {
            x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            y: alaskamag,
            name: 'Average Magnitude',
            type: 'bar'
          };
          
        var alaskatrace2 = {
            x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            y: alaskaquakes,
            name: 'Number of Earthquakes',
            // yaxis: 'y2',
            type: 'bar'
        };
          
        var alaskabardata = [alaskatrace1, alaskatrace2];

        var alaskabarlayout = {
            title: `Earthquakes in ${val} South Alaska`,
            font:{
              family: 'Arial'
            },
            yaxis: {
            //   zeroline: true,
              title: 'Average magnitude'
            },
            yaxis2: {
              title: 'Number of Earthquakes',
              side: 'right'
            },
            height: 300,
            width: 950
        }
    
        // var barlayout = {
        //     height: 400,
        //     width: 950
        // }

        // console.log(month)
        // console.log(quakes)
        // console.log(mag)
        // console.log(val)


        Plotly.newPlot("alaska", alaskabardata, alaskabarlayout);
    })




    d3.csv("himaMonth2.csv").then(function(himadata) {

        var himamonth = []
        var himaquakes = []
        var himamag = []

        himadata.forEach(function(data) {
            if (parseInt(data.year) === val) {
                himamonth.push(parseInt(data.Month))
                himaquakes.push(parseInt(data.quakes))
                himamag.push(parseFloat(data.AVGMag))
            }
        });


        var trace1 = {
            x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            y: himamag,
            name: 'Average Magnitude',
            type: 'bar'
          };
          
        var trace2 = {
            x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            y: himaquakes,
            name: 'Number of Earthquakes',
            // yaxis: 'y2',
            type: 'bar'
        };
          
        var himabardata = [trace1, trace2];

        var himabarlayout = {
            title: `Earthquakes in ${val} Himalaya`,
            font:{
              family: 'Arial'
            },
            yaxis: {
            //   zeroline: true,
              title: 'Average magnitude'
            },
            yaxis2: {
              title: 'Number of Earthquakes',
              side: 'right'
            },
            height: 300,
            width: 950
        }
    


        Plotly.newPlot("himalaya", himabardata, himabarlayout);
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