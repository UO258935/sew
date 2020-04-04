class Ejercicio {
    constructor() {}

    allowDrop(ev) {
        ev.preventDefault();
    }

    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));

    }

    procesar(files) {
        var file = files[0];
        var imageType = /image.*/;

        if (file.type.match(imageType)) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $("input").remove();

                var img = document.createElement('img');
                img.setAttribute("draggable", "true");
                img.setAttribute("ondragstart", "e.drag(event)");
                img.setAttribute("width", "336");
                img.setAttribute("height", "69");
                img.setAttribute("id", "drag2");
                img.src = reader.result;
                document.body.appendChild(img);


            }

            reader.readAsDataURL(file);
        }
    }
}
var e = new Ejercicio();