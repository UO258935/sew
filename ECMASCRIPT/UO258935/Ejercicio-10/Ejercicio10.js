"use strict";
class CambioDivisa {
    constructor(moneda) {
        this.apikey = "c7b7ee5dc0e0b0eaf20d59f00664d444";
        this.moneda = moneda;
        this.url = "http://data.fixer.io/api/latest?access_key=" + this.apikey + "&symbols=" + this.moneda + "&format=1";
        this.correcto = "¡Todo correcto! JSON recibido de <a href='https://fixer.io'>Fixer.io</a>"
        this.datosCambio = new DatosCambio(this.moneda, this.url);
    }
    crearElemento(tipoElemento, texto, insertarAntesDe) {
        var elemento = document.createElement(tipoElemento);
        elemento.innerHTML = texto;
        $(insertarAntesDe).before(elemento);
    }
    verJSON() {
        this.crearElemento("h2", "Datos en JSON desde <a href='https://fixer.io'>Fixer.io</a>", "footer");
        this.crearElemento("h3", this.correcto, "footer");
        this.crearElemento("h4", "JSON", "footer");
        this.crearElemento("pre", "", "footer");
        this.crearElemento("h4", "Datos", "footer");
        this.crearElemento("p", "", "footer");
        this.datosCambio.cargarDatos();
        $("button").attr("disabled", "disabled");
    }
}

class DatosCambio {
    constructor(moneda, url) {
        this.url = url;
        this.moneda = moneda;
    }
    cargarDatos() {
        var monedaDestino = this.moneda;
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos) {
                $("pre").text(JSON.stringify(datos, null, 2));

                var stringDatos = "<ul><li>Moneda origen: " + datos.base + "</li>";
                stringDatos += "<li>Moneda destino: " + monedaDestino + "</li>";
                stringDatos += "<li>Fecha actualización: " + datos.date + "</li>";
                stringDatos += "<li>Cambio de moneda = " + datos.rates[monedaDestino] + "</li></ul>";

                $("p").html(stringDatos);
            },
            error: function() {
                $("h3").html("¡Tenemos problemas! No puedo obtener JSON de <a href='https://fixer.io'>Fixer.io</a>");
                $("h4").remove();
                $("pre").remove();
                $("p").remove();
            }
        });
    }
}

var cambio1 = new CambioDivisa("USD");
var cambio2 = new CambioDivisa("GBP");
var cambio3 = new CambioDivisa("BRL");
var cambio4 = new CambioDivisa("KRW");
var cambio5 = new CambioDivisa("CNY");