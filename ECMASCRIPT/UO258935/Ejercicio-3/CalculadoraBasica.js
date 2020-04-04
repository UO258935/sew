"use strict";
class CalculadoraBasica {
    constructor() {
        this.display = "0";
        this.memoria = "0";
    }

    addDisplay(digito) {
        if (this.display == "0")
            this.display = digito;
        else
            this.display += digito;

        this.actualizaDisplay();
    }

    clearDisplay() {
        this.display = "0";
        this.actualizaDisplay();
    }

    igual() {

        try {

            this.display = eval(this.display);

        } catch (error) {
            this.display = "Error: " + error.message;
        }
        this.actualizaDisplay();
        this.memoria = this.display;
    }

    memoriaMas() {
        try {
            this.display = eval(this.display + "+" + this.memoria);
        } catch (error) {
            this.display = "Error: " + error.message;
        }
        this.actualizaDisplay();
        this.memoria = this.display;
    }

    memoriaMenos() {
        try {
            this.display = eval(this.memoria + "-" + this.display);
        } catch (error) {
            this.display = "Error: " + error.message;
        }
        this.actualizaDisplay();
        this.memoria = this.display;
    }


    memoriaClear() {
        this.memoria = "0";
    }

    memoriaRC() {
        this.display = this.memoria;
        this.actualizaDisplay();
    }

    actualizaDisplay() {
        document.getElementById("display").value = this.display;
    }

}

var calculadora = new CalculadoraBasica();