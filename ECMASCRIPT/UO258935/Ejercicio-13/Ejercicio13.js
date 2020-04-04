"use strict";
class Procesamiento {
    constructor() {}

    procesarArchivos(files) {
        this.soporteApiFile();
        var nBytes = 0;
        for (var i = 0; i < files.length; i++) {
            var archivo = files[i];
            this.crearElemento("p", "--> Archivo número " + i, "footer");
            this.procesarPropiedadesArchivo(archivo);
            nBytes += archivo.size;

            var tipoTexto = /text.*/;
            var tipoJson = /application.json/;
            if (archivo.type.match(tipoTexto) || archivo.type.match(tipoJson))
                this.procesarContenidoArchivo(archivo);
        }
        document.getElementById("numero").innerHTML = files.length;
        document.getElementById("tamaño").innerHTML = nBytes + " bytes";
    }
    procesarPropiedadesArchivo(archivo) {
        this.crearElemento("p", "Nombre del archivo: " + archivo.name, "footer");
        this.crearElemento("p", "Tamaño del archivo: " + archivo.size + " bytes", "footer");
        this.crearElemento("p", "Tipo del archivo: " + archivo.type, "footer");
        this.crearElemento("p", "Fecha de la última modificación: " + archivo.lastModifiedDate, "footer");
    }
    procesarContenidoArchivo(archivo) {
        this.crearElemento("p", "Contenido del archivo:", "footer");
        var lector = new FileReader();
        lector.onload = function(evento) {
            var elemento = document.createElement("pre");
            elemento.innerHTML = lector.result;
            $("footer").before(elemento);
        }
        lector.readAsText(archivo);
    }
    soporteApiFile() {
        if (window.File && window.FileReader && window.FileList && window.Blob)
            document.getElementById("soporte").innerHTML = "<p>Este navegador soporta el API File </p>";
        else document.getElementById("soporte").innerHTML = "<p>¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!</p>";
    }
    crearElemento(tipoElemento, texto, insertarAntesDe) {
        var elemento = document.createElement(tipoElemento);
        elemento.innerHTML = texto;
        $(insertarAntesDe).before(elemento);
    }
}

var procesar = new Procesamiento();