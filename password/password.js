ejecutarValidacion=function(){
    let password;
    password=recuperarTexto("txtTexto");
    validarPassword(password);
}

validarPassword=function(password){
    let error=false;
    if(password.length<=7){
        mostrarTexto("txtResultado", "LA CONTRASEÑA DEBE TENER ALMENOS 8 CARACTERES");
        error= true;
    }
    if(password.length==16){
        mostrarTexto("txtResultado", "LA CONTRASEÑA DEBE TENER MAXIMO 16 CARACTERES");
        error= true;
    } 
    if(buscarLetraMayuscula(password)==true){
        mostrarTexto("txtResultado2","si tiene una mayuscula")
        error=true;
    }else{
        mostrarTexto("txtResultado2","A tu contraseña le falta una mayuscula")
    }
    if(buscarDigito(password)==true){
        mostrarTexto("txtResultado3","si tiene un digito")
        error=true;
    }else{
        mostrarTexto("txtResultado3","A tu contraseña le falta un digito")
    }
    if(buscarCaracterEspecial(password)==true){
        mostrarTexto("txtResultado4","si tiene un caracter especial")
        error=true;
    }else{
        mostrarTexto("txtResultado4","A tu contraseña le falta un caracter especial")
    }
    return error;

}

buscarLetraMayuscula=function(cadena){
    let letraIterada;
    let mayuscula;
    let existeLetraMayuscula=false;
    for(let i=0;i<cadena.length;i++){
        letraIterada=cadena.charAt(i);
        mayuscula=letraIterada.charCodeAt(0);
        if(mayuscula>=65 && mayuscula<=90){
            existeLetraMayuscula=true
        }
    }
    if(existeLetraMayuscula==true){
        return true
    }else {
        return false
    }
}
buscarDigito=function(cadena){
    let letraIterada;
    let digito;
    let existedigito=false;
    for(let i=0;i<cadena.length;i++){
        letraIterada=cadena.charAt(i);
        digito=letraIterada.charCodeAt(0);
        if(digito>=48 && digito<=57){
            existedigito=true
        }
    }
    if(existedigito==true){
        return true
    }else {
        return false
    }
}
buscarCaracterEspecial=function(cadena){
    let letraIterada;
    let caracterEspecial;
    let existeCaracterEspecial=false;
    for(let i=0;i<cadena.length;i++){
        letraIterada=cadena.charAt(i);
        caracterEspecial=letraIterada.charCodeAt(0);
        if(caracterEspecial==95 || caracterEspecial==45 || caracterEspecial==42){
            existeCaracterEspecial=true
            console.log(caracterEspecial);
        }
    }
    if(existeCaracterEspecial==true){
        return true
    }else {
        return false
    }
}