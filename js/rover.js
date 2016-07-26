
var Rover = {
    x: 0,
    y: 0,
    direction: "N",
    goForward: function() {
        switch (Rover.direction) {
            case "N":
            [Rover.x][Rover.y++];
            break;
            case "S":
            [Rover.x][Rover.y--];
            break;
            case "E":
            [Rover.x++][Rover.y];
            break;
            case "O":
            [Rover.x--][Rover.y];
            break;
        }
        Salir();
        var node = document.getElementById("coordenadas");
        node.innerHTML = "Coordenada actual: [" + Rover.x + "]";
        node.innerHTML += "[" + Rover.y + "]";
        node.innerHTML += " Dirección: [" + Rover.direction + "]";

    },
    goBackward: function() {
        switch (Rover.direction) {
            case "N":
            [Rover.x][Rover.y--];
            break;
            case "S":
            [Rover.x][Rover.y++];
            break;
            case "E":
            [Rover.x--][Rover.y];
            break;
            case "O":
            [Rover.x++][Rover.y];
            break;
        }
        Salir();
        var node = document.getElementById("coordenadas");
        node.innerHTML = "Coordenada actual: [" + Rover.x + "]";
        node.innerHTML += "[" + Rover.y + "]";
        node.innerHTML += " Dirección: [" + Rover.direction + "]";
    },
    goRight: function() {
        if (Rover.direction === "N") {
            Rover.direction = "E";
        } else if (Rover.direction === "E") {
            Rover.direction = "S";
        } else if (Rover.direction === "S") {
            Rover.direction = "O";
        } else {
            Rover.direction = "N";
        }
        var node = document.getElementById("coordenadas");
        node.innerHTML = "Coordenada actual: [" + Rover.x + "]";
        node.innerHTML += "[" + Rover.y + "]";
        node.innerHTML += " Dirección: [" + Rover.direction + "]";
    },
    goLeft: function() {
        if (Rover.direction === "N") {
            Rover.direction = "O";
        } else if (Rover.direction === "O") {
            Rover.direction = "S";
        } else if (Rover.direction === "S") {
            Rover.direction = "E";
        } else {
            Rover.direction = "N";
        }
        var node = document.getElementById("coordenadas");
        node.innerHTML = "Coordenada actual: [" + Rover.x + "]";
        node.innerHTML += "[" + Rover.y + "]";
        node.innerHTML += " Dirección: [" + Rover.direction + "]"
    },
};


function Salir() {
    if (Rover.x > 10) {
        Rover.x = 0;
    } else if (Rover.x < 0) {
        Rover.x = 10;
    }

    if (Rover.y > 10) {
        Rover.y = 0;
    } else if (Rover.y < 0) {
        Rover.y = 10;
    }
}


var hacia_arriba = document.getElementById('adelante');
hacia_arriba.onclick = Rover.goForward;


var hacia_atras = document.getElementById('atras');
hacia_atras.onclick = Rover.goBackward;

var hacia_izquierda = document.getElementById('izq');
hacia_izquierda.onclick = Rover.goLeft;

var hacia_derecha = document.getElementById('derecha');
hacia_derecha.onclick = Rover.goRight;

var node = document.getElementById("coordenadas");
node.innerHTML = "Coordenada actual: [" + Rover.x + "]";
node.innerHTML += "[" + Rover.y + "]";
node.innerHTML += " Dirección: [" + Rover.direction + "]";