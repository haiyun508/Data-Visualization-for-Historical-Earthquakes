// from earthquakes.csv
d3.csv("static/data/database.csv").then((importedData) => {

    // console.log(importedData);
    var tableData = importedData;
    // console.log(tableData)

    // get a reference to the table body
    var tbody = d3.select("tbody")

    // Loop Through `data` 
    // Use d3 to append one table row `tr` for each UFO sighting object
    // use d3 to append 1 cell per sighting value()
    tableData.forEach(earthquake => {
        var row = tbody.append("tr");
        Object.entries(earthquake).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    // get reference to the form and the filter button
    var form = d3.select("form");
    var button = d3.select("#filter-btn");

    //create event handlers
    button.on("click", runEnter);
    form.on("submit", runEnter);

    // create event handler function
    function runEnter() {
        // prevent the page from refreshing
        d3.event.preventDefault();

        // select the input elements and get the value property 
        var dateElement = d3.select("#date").property("value");
        var depthElement = d3.select("#depth").property("value");
        var magnitudeElement = d3.select("#magnitude").property("value");
        // console.log(dateElement)
        // console.log(depthElement)
        // console.log(magnitudeElement)


        // use the form input to filter the data by date
        // var filteredData = tableData.filter(earthquake => earthquake.Date === dateElement
        //     && earthquake.Depth >= parseFloat(depthElement)
        //     && earthquake.Magnitude >= parseFloat(magnitudeElement)
        // );

        if (dateElement === "") {
            var filteredData = tableData.filter(earthquake => earthquake.Depth >= parseFloat(depthElement)
                && earthquake.Magnitude >= parseFloat(magnitudeElement)
            )
        }
        else if (dateElement === "" && depthElement === "") {
            var filteredData = tableData.filter(earthquake => earthquake.Magnitude >= parseFloat(magnitudeElement)
            )
        }

        else if (dateElement === "" && magnitudeElement === "") {
            var filteredData = tableData.filter(earthquake.Depth >= parseFloat(depthElement)
            )
        }
        else {
            var filteredData = tableData.filter(earthquake => earthquake.Date === dateElement
                && earthquake.Depth >= parseFloat(depthElement)
                && earthquake.Magnitude >= parseFloat(magnitudeElement)
            );
        };


        // clear table content
        d3.select("tbody").html("");

        // add the filtered data to table
        filteredData.forEach(earthquake => {
            var row = tbody.append("tr");
            Object.entries(earthquake).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        });
        console.log(filteredData)
        // console.log(filteredData.length)
        console.log(filteredData[0].Latitude, filteredData[0].Longitude)
        console.log(filteredData[0].Magnitude)

        updateMap(filteredData)
    };

    // Create a map object
    var myMap = L.map("map", {
        center: [37.09, -95.71],
        zoom: 2
    });

    L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/streets-v11",
        accessToken: API_KEY
    }).addTo(myMap);
    var markers = L.layerGroup()
    markers.addTo(myMap)

    
    function updateMap(filteredData) {
        markers.clearLayers()

        // if (markers != undefined) {
        //         myMap.removeLayer(markers)}

        //    if (markers != undefined) {
        //        console.log("clearLayers")
                // myMap.clearLayers()

        // if (markers != undefined) {
        //     markers.eachLayer(function (layer) {
        //         myMap.removeLayer(layer)
        //     })
        // };

        // if (markers != undefined) {
        //     markers.forEach(function (layer) {
        //         myMap.removeLayer(layer)
        //     })
        // };

        // if (circleMarkers != undefined) {
        //     circleMarkers.forEach(function (layer) {
        //         myMap.removeLayer(layer)        
        //     })
        // };

        // if (circleMarkers != undefined) {
        //     circleMarkers.forEach(marker =>
        //         marker.remove())
        // }


        var circleMarkers = []
        // Loop through the cities array and create one marker for each city object
        for (var i = 0; i < filteredData.length; i++) {
            var lat = parseFloat(filteredData[i].Latitude)
            var lon = parseFloat(filteredData[i].Longitude)
            var location = [lat, lon];
            // console.log(location)
            // circleMarkers.push(L.circleMarker(location, {
                markers.addLayer(L.circleMarker(location,{
                fillOpacity: 0.75,
                color: "white",
                fillColor: "purple",
                radius: parseFloat(filteredData[i].Magnitude)
                // radius:500000
            }).bindPopup("<h5>" + filteredData[i].Date + "</h5> <hr> <h6>Magnitude: " + filteredData[i].Magnitude +
                "</h6><br><a href=\"https://earthquake.usgs.gov/earthquakes/eventpage/" + filteredData[i].ID + "/executive \">More info From USGS</a>"))

        }

        //   markers.addLayer(circleMarkers)
    }
})
// .addTo(myMap)
// document.getElementById("map").innerHTML = "";


// https://earthquake.usgs.gov/earthquakes/eventpage/us10002bnk/executive
// https://earthquake.usgs.gov/earthquakes/eventpage/us200030aq/executive
