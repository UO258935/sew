"use strict";
class MapaKml {
    constructor() {}

    procesarKml(files) {
        var archivo = files[0];
        var mapa = new google.maps.Map(document.getElementById("map"));
        mapa.setCenter({ lat: 40.4167, lng: -3.70325 });
        mapa.setZoom(4);
        mapa.setMapTypeId(google.maps.MapTypeId.HYBRID);
        var geoXml = new geoXML3.parser({ map: mapa });

        if (archivo.name.endsWith(".kml")) {
            var lector = new FileReader();
            lector.readAsText(archivo);
            lector.onload = function(evento) {
                geoXml.parseKmlString(lector.result);
            }
        }
    }
}

var mapaKml = new MapaKml();