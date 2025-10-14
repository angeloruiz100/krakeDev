generarRuta= function(nombre){
    if(nombre=="piedra"){
        nombre=document.getElementById("lblImg");
        nombre.src="./imagenes/piedra.jpg"
    }else if(nombre=="papel"){
        nombre=document.getElementById("lblImg");
        nombre.src="./imagenes/papel.jpg"
    }else if(nombre=="tijera"){
        nombre=document.getElementById("lblImg");
        nombre.src="./imagenes/tijera.jpg"
    }else {
        return null;
    }
}
determinarGanador=function(eleccionJugador1,eleccionJugador2){
    if(eleccionJugador1=="piedra" && eleccionJugador2=="papel"){
        return 2;
    }else if(eleccionJugador1=="papel" && eleccionJugador2=="piedra"){
        return 1;
    }else if(eleccionJugador1=="tijera" && eleccionJugador2=="piedra"){
        return 2;
    }else if(eleccionJugador1=="piedra" && eleccionJugador2=="tijera"){
        return 1;
    }else if (eleccionJugador1=="papel" && eleccionJugador2=="tijera"){
        return 2;
    }else if (eleccionJugador1=="tijera" && eleccionJugador2=="papel"){
        return 1;
    }else if(eleccionJugador1=="papel" && eleccionJugador2=="papel"){
        return 0;
    }else if (eleccionJugador1=="piedra" && eleccionJugador2== "piedra"){
        return 0
    }else{
        return 0 
    }
}
generarElemento= function(){
    let aleatorio=obtenerAleatorio();
    if(aleatorio==1){
        return "piedra";
    }else if(aleatorio==2){
        return "papel";
    }else{
        return "tijera";
    }
}

obtenerAleatorio= function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorAleatorio;
    aleatorio=Math.random();
    numeroMultiplicado=aleatorio*3;
    numeroEntero=parseInt(numeroMultiplicado);
    valorAleatorio= numeroEntero;
    console.log(valorAleatorio)
    return valorAleatorio;
}