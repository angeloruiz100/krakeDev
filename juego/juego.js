let puntosUsuario = 0;
let puntosComputadora = 0;

jugar = function (seleccionado) {
    let aleatorio = generarElemento();
    generarRuta(aleatorio);
    let resultado = determinarGanador(aleatorio, seleccionado);

    if (resultado == 1) {
        mostrarTexto("lblResultado", "Has perdido la partida");
        incrementarComputadora();
        mostrarTexto("puntosComputadora", "Puntaje=" + puntosComputadora);
    } else if (resultado == 2) {
        mostrarTexto("lblResultado", "Has ganado la partida");
        incrementarUsuario();
        mostrarTexto("puntosUsuario", "Puntaje=" + puntosUsuario);  
    } else {
        mostrarTexto("lblResultado", "Empate");
    }
    if(puntosUsuario==5){
            alert("!!WIIN!! Has ganado la partida");
    }else if(puntosComputadora==5){
            alert("GAME OVER !El computador te ha vencido!");
    }else{

    }
}

limpiar = function () {
    mostrarTexto("lblResultado", "");
    mostrarTexto("puntosComputadora", 0);
    mostrarTexto("puntosUsuario", 0);
    mostrarImagen("lblImg", "")
    puntosComputadora=0
    puntosUsuario=0
}

incrementarUsuario = function () {
    puntosUsuario += 1;
}

incrementarComputadora = function () {
    puntosComputadora += 1;
}
