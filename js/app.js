// Google maps
function initMap() {
  let location = {
    lat: -50.606704,
    lng: 165.972467,
  };

  let options = {
    center: location,
    zoom: 15,
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (loc) => {
        location.lat = loc.coords.latitude;
        location.lng = loc.coords.longitude;

        map = new google.maps.Map(document.getElementById("map"), options);
      },
      (err) => {
        map = new google.maps.Map(document.getElementById("map"), options);
      }
    );
  } else {
    map = new google.maps.Map(document.getElementById("map"), options);
  }
}
