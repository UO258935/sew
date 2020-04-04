"use strict";
class Ejercicio7 {
    constructor() {

    }

    ocultarTexto() {
        $("p").hide();
    }

    mostrarTexto() {
        $("p").show();
    }

    modificarIngles() {
        $("#modificable").text("Is an American animated sitcom created by Matt Groening for the Fox Broadcasting Company. The series is a satirical depiction of working-class life. The show is set in the fictional town of Springfield and parodies American culture and society, television, and the human condition.");
    }

    modificarCastellano() {
        $("#modificable").text("Es una serie estadounidense de comedia, en formato de animación, creada por Matt Groening para Fox Broadcasting Company y emitida en varios países del mundo. La serie es una sátira de la sociedad estadounidense que narra la vida y el día a día de una familia de clase media de ese país que vive en un pueblo ficticio llamado Springfield.");
    }

    añadirPersonaje() {
        $("#añadir").append("Se añade un nuevo personaje \n");
    }

    eliminarPersonaje() {
        $("#añadir").remove();
    }

    recorrer() {
        $("*", document.body).each(function() {
            var etiquetaPadre = $(this).parent().get(0).tagName;
            $(this).prepend(document.createTextNode("Etiqueta padre : <" + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName + "> valor: "));
        });
    }

    sumar() {
        var o = 0;
        $("table tr").each(function() {
            o++;
        });
        o--;
        var j = 0;
        $("table th").each(function() {
            j++;
        });

        alert("Valor de las filas: " + o + " Valor de las columnas: " + j);
    }

}

var ejercicio = new Ejercicio7();