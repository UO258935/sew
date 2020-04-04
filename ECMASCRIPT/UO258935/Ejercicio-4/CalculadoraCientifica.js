"use strict";
class CalculadoraCientifica extends CalculadoraBasica {
    constructor() {
        super();
    }

    cuadrado() {
        this.display = Math.pow(eval(this.display), 2);
        this.actualizaDisplay();
    }

    menosCuadrado() {
        this.display = Math.pow(eval(this.display), -2);
        this.actualizaDisplay();
    }

    cubo() {
        this.display = Math.pow(eval(this.display), 3);
        this.actualizaDisplay();
    }

    factorial() {
        this.display = this.factorialN(this.display);
        this.actualizaDisplay();
    }

    factorialN(n) {
        if (n == 0) return 1;
        if (n > 1) return n * this.factorialN(n - 1);
        else return n;
    }

    abs() {
        this.display = Math.abs(this.display);
        this.actualizaDisplay();
    }

    menosCubo() {
        this.display = Math.pow(eval(this.display), -3);
        this.actualizaDisplay();
    }

    diezElevadoAX() {
        this.display = Math.pow(10, eval(this.display));
        this.actualizaDisplay();
    }

    eElevadoAX() {
        this.display = Math.pow(Math.E, eval(this.display));
        this.actualizaDisplay();
    }

    tan() {
        this.display = Math.tan(this.display);
        this.actualizaDisplay();
    }

    seno() {
        this.display = Math.sin(this.display);
        this.actualizaDisplay();
    }

    coseno() {
        this.display = Math.cos(this.display);
        this.actualizaDisplay();
    }

    log() {
        this.display = Math.log(this.display);
        this.actualizaDisplay();
    }

    raizCuadrada() {
        this.display = Math.sqrt(eval(this.display));
        this.actualizaDisplay();
    }

    pi() {
        if (this.display == "0")
            this.display = Math.PI;
        else
            this.display += Math.PI;
        this.actualizaDisplay();
    }

}

var calculadora = new CalculadoraCientifica();