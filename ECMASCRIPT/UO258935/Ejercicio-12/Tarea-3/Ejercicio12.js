"use strict";
class MapaEstaticoGoogle {
    constructor() {
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.mostrarErrores.bind(this));
    }
    getPosicion(posicion) {
        this.mensaje = "Se ha realizado correctamente la petición de geolocalización";
        this.longitud = posicion.coords.longitude;
        this.latitud = posicion.coords.latitude;
        this.precision = posicion.coords.accuracy;
        this.altitud = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo = posicion.coords.heading;
        this.velocidad = posicion.coords.speed;
    }

    mostrarErrores(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                this.mensaje = "El usuario no permite la petición de geolocalización"
                break;
            case error.POSITION_UNAVAILABLE:
                this.mensaje = "Información de geolocalización no disponible"
                break;
            case error.TIMEOUT:
                this.mensaje = "La petición de geolocalización ha caducado"
                break;
            case error.UNKNOWN_ERROR:
                this.mensaje = "Se ha producido un error desconocido"
                break;
        }
    }

    getLongitud() {
        return this.longitud;
    }

    getLatitud() {
        return this.latitud;
    }

    getAltitud() {
        return this.altitud;
    }

    verTodo(dondeVerlo) {
        var ubicacion = document.getElementById(dondeVerlo);
        var datos = '<p>' + this.mensaje + '</p>';
        datos += '<p>Longitud: ' + this.longitud + ' grados</p>';
        datos += '<p>Latitud: ' + this.latitud + ' grados</p>';
        datos += '<p>Precisión de la longitud y latitud: ' + this.precision + ' metros</p>';
        datos += '<p>Altitud: ' + this.altitude + ' metros</p>';
        datos += '<p>Precisión de la altitud: ' + this.precisionAltitud + ' metros</p>';
        datos += '<p>Rumbo: ' + this.rumbo + ' grados</p>';
        datos += '<p>Velocidad: ' + this.velocidad + ' metros/segundo</p>';
        ubicacion.innerHTML = datos;
    }
    getMapaEstaticoGoogle(dondeVerlo) {
        var ubicacion = document.getElementById(dondeVerlo);
        var apiKey = "&key=AIzaSyAtF0HSYfDaXjyc_GcuBioFAfXEa3Gpaj4";
        var url = "https://maps.googleapis.com/maps/api/staticmap?";
        var centro = "center=" + this.latitud + "," + this.longitud;
        var zoom = "&zoom=15";
        var tamaño = "&size=800x600";
        var marcador = "&markers=color:red%7Clabel:S%7C" + this.latitud + "," + this.longitud;
        var sensor = "&sensor=false";
        this.imagenMapa = url + centro + zoom + tamaño + marcador + sensor + apiKey;
        ubicacion.innerHTML = "<img src='" + this.imagenMapa + "'/>";
    }
}
var m = new MapaEstaticoGoogle();