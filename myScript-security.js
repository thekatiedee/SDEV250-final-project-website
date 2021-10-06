// WEBSITE SECURITY AND MAP SECTION

// the lat long, altitude function from the book

function findLatLong() {
    navigator.geolocation.getCurrentPosition(showLocation, fail, {timeout: 10000});
}


function showLocation(position) {
    var theLat = document.getElementById('latitude');
    theLat.innerHTML = 'Latitude: ' + position.coords.latitude;
    var theLong = document.getElementById('longitude');
    theLong.innerHTML = 'Longitude: ' + position.coords.longitude;
    var theAlt = document.getElementById('altitude');
    theAlt.innerHTML = 'Altitude: ' + position.coords.altitude;

    // for the developer in you
    console.log('Latitude: ' + position.coords.latitude);
    console.log('Longitude: ' + position.coords.longitude);
    console.log('Altitude: ' + position.coords.altitude);

    /* for altitude: "The reason altitude is returned null is because, the device in question is **not** using GPS for location. Only when GPS is used, you'll get a value for altitude." from stackoverflow */
}

function fail() {
    var content = document.getElementById('failParagraph');
    content.innerHTML = '<p>Geolocation information is not available or not authorized.</p>';
}

//book, instructor
function displayMap() {
    // var currentPosLat = navigator.geolocation.position.coords.latitude;
    // var currentPosLong = navigator.geolocation.position.coords.longitude;
    // var mapOptions = {
    //     center: new google.maps.LatLng(currentPosLat, currentPosLong),
    //     zoom: 6
    // }
    navigator.geolocation.getCurrentPosition( pos=> { 
        var  mapOptions = {
            center: new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude),
            zoom: 6
          };
        // put google map call here
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        }, err=>console.error(err),{timeout:10000});        
}

// END WEBSITE SECURITY AND MAP SECTION