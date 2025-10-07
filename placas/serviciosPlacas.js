validarEstructura = function (placa) {
    let error = "";
    if (placa.length > 6 && placa.length < 9) {
        if (caracterMayuscula(placa[0])) {
        } else {
            console.log(placa[0])
            error = error + "El primer caracter no es una Mayuscula-  "
        }
        if (caracterMayuscula(placa[1])) {
        } else {
            error = error + " El segundo caracter no es una Mayuscula-  "
        }
        if (caracterMayuscula(placa[2])) {
        } else {
            error = error + " El tercer caracter no es una Mayuscula-  "
        }
        if (esGuion(placa[3])) {
        }
        else {
            error = error + " El caracter no es un guion-  "
        }
        if (esDigito(placa[4])) {
        }
        else {
            error = error + " El quinto caracter no es un  digito-  "
        }
        if (esDigito(placa[5])) {
        }
        else {
            error = error + "El sexto caracter no es un  digito-  "
        }
        if (esDigito(placa[6])) {
        }
        else {
            error = error + "El septimo caracter no es un  digito-  "
        }
        if (placa.length == 8) {
            if (esDigito(placa[7])) {
            } else {
                error = error + "El octavo caracter no es un  digito-  "
            }
        }
    } else if (placa.length >= 0 && placa.length < 9) {
        error = error + "Falta caracteres"
    } else {
        error = error + "La cadena de texto supera los caracteres"

    }
    console.log(error);
    return error;
}
