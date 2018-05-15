var map = L.map('map');

L.tileLayer("http://124.205.130.181:10001/osm_tiles/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg", {
    attribution: '' //'<a href="https://www.mapbox.com/about/maps">© Mapbox</a> <a href="https://openstreetmap.org/copyright">© OpenStreetMap</a> | <a href="https://mapbox.com/map-feedback/">Improve this map</a>'
}).addTo(map);

var control = L.Routing.control(L.extend(window.lrmConfig, {
    waypoints: [
        L.latLng(40.07859, 116.603039),
        L.latLng(39.781623, 116.389492)
    ],
    geocoder: L.Control.Geocoder.nominatim(),
    routeWhileDragging: true,
    reverseWaypoints: true,
    showAlternatives: true,
    altLineOptions: {
        styles: [
            { color: 'black', opacity: 0.15, weight: 9 },
            { color: 'white', opacity: 0.8, weight: 6 },
            { color: 'blue', opacity: 0.5, weight: 2 }
        ]
    }
})).addTo(map);

L.Routing.errorControl(control).addTo(map);