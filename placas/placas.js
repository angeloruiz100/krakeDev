validarPlaca = function () {
    let cajaTexto;
    let erroresEstructura;
    let provincia;
    let dia;
    let tipo;
    cajaTexto = recuperarTexto("cajaTexto");
    console.log(cajaTexto);
    erroresEstructura = validarEstructura(cajaTexto);
    console.log(erroresEstructura);
    if (erroresEstructura == "") {
        provincia = obtenerProvincia(cajaTexto);
        console.log(provincia);
        tipo = obtenerTipoVehiculo(cajaTexto);
        dia=obtenerDiaPicoYPlaca(cajaTexto);
        mostrarTexto("lblResultado", "Estructura valida;" + " " + provincia + " " + tipo+" "+dia);
        if (provincia == null && tipo == null) {
            mostrarTexto("lblError", "Provincia incorrecta ");
            mostrarTexto("lblError2", "Vehiculo Incorrecto");
        } else {
        }

    } else {
        mostrarTexto("lblResultado", "Estructura Incorrecta; ");

    }

}
obtenerProvincia = function (placa) {
    if (placa[0] == "A") {
        return "Pertenece a la provincia de Azuay; ";
    } else if (placa[0] == "B") {
        return "Pertenece a la provincia de Bolivar; ";
    } else if (placa[0] == "U") {
        return "Pertenece a la provincia de Canar; ";
    } else if (placa[0] == "C") {
        return "Pertenece a la provincia de Carchi; ";
    } else if (placa[0] == "X") {
        return "Pertenece a la provincia de Cotopaxi; ";
    } else if (placa[0] == "H") {
        return "Pertenece a la provincia de Chimborazo; ";
    } else if (placa[0] == "O") {
        return "Pertenece a la provincia de El Oro; ";
    } else if (placa[0] == "E") {
        return "Pertenece a la provincia de Esmeraldas; ";
    } else if (placa[0] == "W") {
        return "Pertenece a la provincia de Galapagos; ";
    } else if (placa[0] == "G") {
        return "Pertenece a la provincia de Guayas; ";
    } else if (placa[0] == "I") {
        return "Pertenece a la provincia de Imbabura; ";
    } else if (placa[0] == "L") {
        return "Pertenece a la provincia de Loja; ";
    } else if (placa[0] == "R") {
        return "Pertenece a la provincia de Los Rios; ";
    } else if (placa[0] == "M") {
        return "Pertenece a la provincia de Manabi; ";
    } else if (placa[0] == "V") {
        return "Pertenece a la provincia de Morona Santiago; ";
    } else if (placa[0] == "N") {
        return "Pertenece a la provincia de Napo; ";
    } else if (placa[0] == "S") {
        return "Pertenece a la provincia de Pastaza; ";
    } else if (placa[0] == "P") {
        return "Pertenece a la provincia de Pichincha; ";
    } else if (placa[0] == "K") {
        return "Pertenece a la provincia de Sucumbios; ";
    } else if (placa[0] == "Q") {
        return "Pertenece a la provincia de Orellana; ";
    } else if (placa[0] == "T") {
        return "Pertenece a la provincia de Tungurahua; ";
    } else if (placa[0] == "Z") {
        return "Pertenece a la provincia de Zamora Chinchipe; ";
    } else if (placa[0] == "Y") {
        return "Pertenece a la provincia de Santa Elena; ";
    } else {
        return null;
    }

}
obtenerTipoVehiculo = function (placa) {
    if (placa[1] == "A" || placa[1] == "Z") {
        return "Pertenece a un vehiculo comercial (como taxi o autobus)";
    } else if (placa[1] == "E") {
        return "Pertenece a un vehiculo gubernamental";
    } else if (placa[1] == "X") {
        return "Vehiculo de uso oficial";
    } else if (placa[1] == "S") {
        return "Pertenece a un vehiculo del gobierno provincial";
    } else if (placa[1] == "M") {
        return "Vehiculo municipal"
    } else if(placa[1]!="A" & placa[1]!="Z" & placa[1] != "E"&placa[1] != "X"& placa[1] != "S"&placa[1] != "M") {
        return "Vehiculo particular (privado)";
    }else{
        return null;
    }
}
obtenerDiaPicoYPlaca=function(placa){
    let letra;
    let ultimaPosicion;
    ultimaPosicion=placa.length -1;
    letra=placa.charCodeAt(ultimaPosicion);
    if(letra==49 || letra==50){
        return "Lunes Pico y Placa";
    }else if (letra==51 || letra==52) {
        return "Martes Pico y Placa";
    }else if (letra==53 || letra==54){
        return "Miercoles Pico y Placa";
    }else if(letra==55 || letra==56){
        return "Jueves Pico y Placa";
    }else if(letra==57 || letra==48){
        return "Viernes Pico y Placa";
    }
    else{
        return "libre circulacion";
    }
}
limpiar= function(){
    mostrarTextoEnCaja("cajaTexto","");
    mostrarTexto("lblResultado","");
    mostrarTexto("lblError","");
    mostrarTexto("lblError2","");

}