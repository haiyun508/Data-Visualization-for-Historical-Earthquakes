let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: new google.maps.LatLng(2.8, -187.3),
    mapTypeId: "terrain",
  });

  
  // Create a <script> tag and set the USGS URL as the source.
  const script = document.createElement("script");
  // This example uses a local copy of the GeoJSON stored at
  // https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojsonp
  script.src =
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojsonp";
  document.getElementsByTagName("head")[0].appendChild(script);

}

// Loop through the results array and place a marker for each
// set of coordinates.
const eqfeed_callback = function (results) {
  for (let i = 0; i < results.features.length; i++) {
    const coords = results.features[i].geometry.coordinates;
    const title = results.features[i].properties.title;
    const link = results.features[i].properties.url;
    const mag = results.features[i].properties.mag;
    const latLng = new google.maps.LatLng(coords[1], coords[0]);
    const marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: latLng,
      map: map,

    });
    console.log(marker)

    map.addListener("center_changed", () => {
      });
      marker.addListener("click", () => {
        map.setZoom(8);
        map.setCenter(marker.getPosition());
        
      });

    var infoWindow = new google.maps.InfoWindow();

    marker.addListener('mouseover', function () {
      infoWindow.setContent(`<p>${title}<br>Coords: <i>${latLng}</i><br>
      <h4>Magnitude: ${mag}</h4><br><a href='${link}'><button>LINK</button></a>
      </p>`);
      infoWindow.open(map, this);
        
      });
      marker.addListener('click', displayToggleBounce);
    
      function displayToggleBounce() {  
        if (marker.getAnimation() !== null) {  
          marker.setAnimation(null);  
        } else {  
          marker.setAnimation(google.maps.Animation.BOUNCE);  
        }  
      }  
  
  }
  
};
