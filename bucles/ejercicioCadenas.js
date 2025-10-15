ejecutarPrueba1= function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
    
}
ejecutarPrueba2=function(){
    let mensaje;
    let mensaje2;
    mensaje=recuperarTexto("txtCadena");
    mensaje2=cadenaInversa(mensaje);
    mostrarTexto("txtResultado",mensaje2);
    
}

recorrerCadena= function(cadena){
    //0123
    //juan
    let caracter;

    for(let posicion=0;posicion<cadena.length;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("Caracter "+caracter+" posicion "+posicion);
    }
    for(let posicion=0;posicion<=cadena.length-1;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("CARACTER "+caracter+" posicion "+posicion);
    }
}
cadenaInversa=function(cadena){
    let caracter="";
    let ultimaPosicion;
    ultimaPosicion=cadena.length -1;

    for(let posicion=ultimaPosicion;posicion>=0;posicion--){
        caracter+=cadena.charAt(posicion); 
    }
    return caracter;
}
