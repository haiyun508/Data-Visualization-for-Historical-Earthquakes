var myMap = L.map("map", {
  center: [10.141932, -36.585693],
  zoom: 3
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

var url = "./earthquake.csv";

d3.csv(url).then(function(response) {

  console.log(response);

  var dataArray = [];
  
  for (var i=0; i < response.length; i++) {
    
    var location = response[i];
    dataArray.push([location.Latitude, location.Longitude, location.Magnitude * 100]);
}
  var heat = L.heatLayer(dataArray, {
    radius: 20,
    blur: 30
  }).addTo(myMap);

});
