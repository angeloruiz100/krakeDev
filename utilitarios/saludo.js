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
    mostrarTextoEnCaja("txtNombre","");
}