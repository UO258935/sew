"use strict";
class Ejercicio6 {

    constructor() {
        this.caracteresContador = 0;
        this.palabrasContador = 0;
        this.palabras = new Array();
    }

    contarPalabras(texto) {
        this.palabras = texto.split(" ");
        if (this.palabras.length == 1 && this.palabras[0] == "") {
            return 0;
        } else {
            this.palabrasContador = this.palabras.length;
            return this.palabrasContador;

        }
    }
    contarCaracteres(texto) {
        this.contarPalabras(texto);

        for (var i in this.palabras) {
            var a = this.palabras[i].split("");
            this.caracteresContador += a.length;
        }
        return this.caracteresContador;
    }

    borrar() {
        return "";
    }

    borrarPalabrasCaracteres() {
        return 0;
    }


}

var ejercicio6 = new Ejercicio6();