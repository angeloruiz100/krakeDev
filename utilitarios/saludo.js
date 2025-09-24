saludar=function(){
    //recuperar el valor de la caja de texto de txtNombre
    let nombre=recuperarTexto("txtNombre");
    //recuperar el valor de la caja de texto de txtApellido
    let apellido=recuperarTexto("txtApellido");
    let edad=recuperarInt("txtEdad");
    let estatura= recuperarFloat("txtEstatura");
    let mensajeBienvenida= "Bienvenido "+nombre+" "+apellido;
    let resultado= mostrarTexto("lblResultado",mensajeBienvenida);
    mostrarImagen("imgSaludo","./imagenes/saludo.gif");
}

mostrarTexto=function(idComponente,mensaje){
    let componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
}
mostrarImagen= function(idComponente,rutaImagen){
    let cmpImagen= document.getElementById(idComponente);
    cmpImagen.src=rutaImagen;
}

recuperarTexto= function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado; 
}
recuperarInt= function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorEntero= parseInt(valorCaja);
    return valorEntero;
}
recuperarFloat= function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorFlotante= parseFloat(valorCaja);
    return valorFlotante;
}
