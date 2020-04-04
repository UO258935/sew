"use strict";
class CalculadoraRPN extends CalculadoraBasica {
    constructor() {
        super();
        this.pila = new Array();
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

    btnSumar() {
        var suma = this.pop();
        this.display = eval(this.display + "+" + suma);
        this.actualizaDisplay();

    }

    btnRestar() {
        var resta = this.pop();
        this.display = eval(resta + "-" + this.display);
        this.actualizaDisplay();
    }

    btnDiv() {
        var div = this.pop();
        this.display = eval(div + "/" + this.display);
        this.actualizaDisplay();
    }

    btnMult() {
        var mult = this.pop();
        this.display = eval(this.display + "*" + mult);
        this.actualizaDisplay();
    }


    btnEnter() {
        this.push(this.display);
        this.display = "0";
        this.actualizaDisplay();
    }

    push(valor) {
        this.pila.push(valor);
    }

    pop() {
        return this.pila.pop();
    }

}

var calculadora = new CalculadoraRPN();