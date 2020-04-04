"use strict";
class DatosCiudad {
    constructor() {
        this.datos = null;
    }
    botonMostrar() {
        var ciudad = $("#ciudad").val();
        this.datos = new MostrarCiudad(ciudad).mostrar();

    }
}



class MostrarCiudad {
    constructor(ciudad) {
        this.apikey = "a43130ff80fe46fba08203827190812";
        this.ciudad = ciudad
        this.url = "http://api.worldweatheronline.com/premium/v1/tz.ashx?q=" + this.ciudad + "&key=" + this.apikey + "&format=json";
        this.datosCiudad = new Ciudad(this.url);
    }

    crearElemento(tipoElemento, texto, insertarAntesDe) {
        var elemento = document.createElement(tipoElemento);
        elemento.innerHTML = texto;
        $(insertarAntesDe).before(elemento);
    }
    mostrar() {
        $("p").remove();
        this.crearElemento("p", "", "section"); // Crea un elemento con DOM para los datos obtenidos con JSON
        this.datosCiudad.cargarDatos();
    }
}

class Ciudad {
    constructor(url) {
        this.url = url;
        console.log(this.url)
    }
    cargarDatos() {
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos) {
                $("pre").text(JSON.stringify(datos, null, 2));
                var stringDatos = "";
                if (datos.data.request == undefined) {
                    $("p").html("Ciudad no válida");
                } else {
                    stringDatos += "<p>Ciudad: " + datos.data.request[0].query + "</p>";

                    stringDatos += "<p>Zona horaria: " + datos.data.time_zone[0].zone + "</p>";
                    $("p").html(stringDatos);
                }
            }
        });
    }
}
var accion = new DatosCiudad();