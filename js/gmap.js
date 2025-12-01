// Center map on Pune, India (Prabhat Rd, Erandwane)
var mapLocation = new google.maps.LatLng(18.51435933539587, 73.83385464931455); // Pune coordinates
var marker;
var map;

function initialize() {
    var mapOptions = {
        zoom: 16, // Change zoom here
        center: mapLocation,
        scrollwheel: false,
        // We'll register a named StyledMapType below and use it as the default.
        styles: []
    };
    
    map = new google.maps.Map(document.getElementById('map'),
    mapOptions);

        // Define a themed style (earthy / desaturated) and register as a StyledMapType
        var themeStyles = [
            { "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "color": "#2b2b2b" }, { "saturation": -20 }] },
            { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#e9ece4" }] },
            { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#d9e8d3" }] },
            { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#d8cbb6" }] },
            { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#7a6a57" }] },
            { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#bfe3ff" }, { "lightness": -10 }] },
            { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#cfc8bd" }] }
        ];

        var styledMapType = new google.maps.StyledMapType(themeStyles, { name: 'DSQUARE' });
        map.mapTypes.set('dsquare_style', styledMapType);
        // Add map controls to match theme: horizontal map/satellite at top-left
        map.setOptions({
            mapTypeControl: true,
            mapTypeControlOptions: {
                mapTypeIds: ['dsquare_style', google.maps.MapTypeId.SATELLITE],
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.TOP_LEFT
            },
            fullscreenControl: true,
            streetViewControl: false,
            zoomControl: true,
            zoomControlOptions: { position: google.maps.ControlPosition.LEFT_CENTER }
        });

        // Set the styled map as the default
        map.setMapTypeId('dsquare_style');
    
    
        // address details (update as needed)
        var contentString = '<div class="map-info">'
        + '<div class="map-title">'
        + '<h3><img style="width: 80px" src="img/d2horizontal.png" alt="dsquare"/></h3></div>'
        + '<div class="map-address-row"><i class="fa fa-map-marker"></i><span class="text">Prabhat Rd, Erandwane<br>Pune, Maharashtra</span></div>'
        + '<div class="map-address-row"><i class="fa fa-phone"></i><span class="text">+91 123 456 78-90</span></div>'
        + '<div class="map-address-row"><i class="fa fa-envelope"></i><span class="text">dsquare@domain.com</span></div>'
        + '</div>';
    
    
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
    });
    

    marker = new google.maps.Marker({
        map: map,
        draggable: false,
        title: 'DSQUARE',
        animation: google.maps.Animation.DROP,
        position: mapLocation
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });

}

if ($('#map').length) {
    google.maps.event.addDomListener(window, 'load', initialize);
}

