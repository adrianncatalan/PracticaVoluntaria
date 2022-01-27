window.onload = () => {

    //Referencia del elemento canvas
    var canvas = document.querySelector('canvas');

    //Estilos del elemento canvas
    var estilosCanvas = window.getComputedStyle(canvas);

    //Tamaño de la celda
    var tamCelda = 60;

    //Número de celdas que tendrá el tablero del juego
    var numeroCeldas = Math.round((parseInt(estilosCanvas.width) / tamCelda));

    //Posición del jugador
    var posX = 0;
    var posY = 0;

    //Array donde guardamos el tablero
    var tablero = [];

    //Creando al jugador
    var prota = canvas.getContext('2d');
    
    prota.rect((posX * tamCelda), (posY * tamCelda), tamCelda, (tamCelda / 2));
    prota.fillStyle = "red";
    prota.fill();



    //Referencia de los elementos buttons
    var buttons = document.querySelectorAll('button');

    //Creando función para mover al jugador
    //Condición de mover hacia arriba
    buttons[0].addEventListener('click', () => {
        if (posY > 0) {
            posY -= 1;
            prota.moveTo(posX,posY)
            console.log("hola")
        }
    });

    //Condición de mover hacia la izquierda
    buttons[1].addEventListener('click', () => {
        if (posX > 0) {
            posX -= 1;
            prota.moveTo(posX,posY)
            console.log("hola2")
        }
    });

    //Condición de mover hacia la derecha
    buttons[2].addEventListener('click', () => {
        if (posX < (numeroCeldas - 1)) {
            posX += 1;
            prota.moveTo(posX,posY)
            prota.
            console.log("hola3")
        }
    });

    //Condición de mover hacia abajo
    buttons[3].addEventListener('click', () => {
        if (posY < (numeroCeldas - 1)) {
            posY += 1;
            prota.moveTo(posX,posY)
            console.log("hola4")
        }
    });

}




