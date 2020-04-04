class MapCentro {
    constructor() {
        navigator.geolocation.getCurrentPosition(this.initMap.bind(this));
    }

    initMap() {
        var gijon = { lat: 43.533333, lng: -5.7 };
        var mapaGijon = new google.maps.Map(document.getElementById('mapa'), { zoom: 8, center: gijon });
        var marcador = new google.maps.Marker({ position: gijon, map: mapaGijon });
    }
}
var map = new MapCentro();