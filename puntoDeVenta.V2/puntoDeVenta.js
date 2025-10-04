calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    let porcentajeDescuento;
    

    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    //1. Recuperar el nombre del producto como String 
    nombreProducto=recuperarTexto("txtProducto");
    esProductoValido(nombreProducto,"lblError1");
    //2. Recuperar el precio como float
    precioProducto=recuperarFloat("txtPrecio");
    esPrecioValido(precioProducto,"lblError3")
    //3. Recuperar cantidad como int
    cantidad=recuperarInt("txtCantidad");
    esCantidadValida(cantidad,"lblError2")
    //4. Recuperar el porcentaje de descuento como int
    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    valorSubtotal=calcularSubtotal(precioProducto,cantidad);
    // Tomar en cuenta el orden de como pasa los parametos de la funcion y colocar bien
    // los parametros cuando invoca la funcion.
    //5. Mostrar valorSubtotal en el componente lblSubtotal
    mostrarTexto("lblSubtotal", valorSubtotal);
    // Utilizar mostrarTexto
        /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4  
            Subtotal esperado: 54
        Si el caso de prueba es exitoso, hacer un commit
     */
    //6. Invocar a calcularValorDescuento y lo que devuelve guardar en la variable valorDescuento
   if(esProductoValido(nombreProducto,"lblError1") &  esCantidadValida(cantidad,"lblError2") &  esPrecioValido(precioProducto,"lblError3")){
    valorDescuento=calcularDescuentoPorVolumen(valorSubtotal,cantidad);
    //7. Mostrar el resultado en el componente lblDescuento
     mostrarTexto("lblDescuento",valorDescuento);
    /*
        Caso de prueba: 
            - cantidad: 10 
            - precioProducto: 5.4  
            - descuento: 10
            - Descuento esperado: 5.4
        Si el caso de prueba es exitoso, hacer un commit
     */
    //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
    valorIVA=calcularIVA(valorSubtotal-valorDescuento);
    // El IVA debe calcularse sobre el valor del subtotal menos el descuento
    //9. Mostrar el resultado en el componente lblValorIVA    
    mostrarTexto("lblValorIVA",valorIVA);
        /*
            Caso de prueba: 
                - cantidad: 10 
                - precioProducto: 5.4  
                - descuento: 10

                    - valorSubtotal: 54
                    - descuento:5.4
                    - valorSubtotal 
                    - descuento: 48.6

                IVA esperado: 5.832

            Si el caso de prueba es exitoso, hacer un commit
        */
    //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
    valorTotal=calcularTotal(valorSubtotal,valorDescuento,valorIVA);
    //11. Mostrar el resultado en el componente lblTotal
    mostrarTexto("lblTotal",valorTotal);
    /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4 
            - descuento: 10

                --valorSubtotal: 5.4
                --descuento: 5.4
                --IVA: 5.832

                Total esperado: 54.432

                Si el caso de prueba es exitoso, hacer un commit
       */
            
    //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
    mostrarTexto("lblResumen","Valor a pagar por "+cantidad+" "+nombreProducto+" con "+porcentajeDescuento+"% de descuento:"+" USD "+valorTotal);
    /*
        Ejemplo: 
            Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
        Si funciona, hacer un commit
    */
   }else{
    mostrarTextoEnCaja("txtProducto",nombreProducto);
    mostrarTextoEnCaja("txtCantidad",cantidad);
    mostrarTextoEnCaja("txtPrecio",precioProducto);
    mostrarTextoEnCaja("txtPorcentajeDescuento","");
    mostrarTexto("lblSubtotal","0.0");
    mostrarTexto("lblDescuento","0.0");
    mostrarTexto("lblValorIVA","0.0");
    mostrarTexto("lblTotal","0.0");
    mostrarTexto("lblResumen","");
   }
}
limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
    mostrarTextoEnCaja("txtProducto","");
    mostrarTextoEnCaja("txtCantidad","");
    mostrarTextoEnCaja("txtPrecio","");
    mostrarTextoEnCaja("txtPorcentajeDescuento","");
    mostrarTexto("lblSubtotal","0.0");
    mostrarTexto("lblDescuento","0.0");
    mostrarTexto("lblValorIVA","0.0");
    mostrarTexto("lblTotal","0.0");
    mostrarTexto("lblResumen","");
}

esProductoValido= function(nombreProducto, idComponente){
    let hayErrores=false
    let tamanio=nombreProducto.length;
    if(tamanio==isNaN(nombreProducto)){
        mostrarTexto(idComponente,"*CAMPO OBLIGATORIO");
        hayErrores=true;
    }
    if(tamanio<0 || tamanio>10){
        mostrarTexto(idComponente, "No puede tener mas de 10 caracteres");
        hayErrores=true;
    }
    if (hayErrores== false){
        mostrarTexto(idComponente,"")     
    }
    return !hayErrores;
}
esCantidadValida=function(cantidad,idComponente){
    hayErrores=false
    if(isNaN(cantidad)){
        mostrarTexto(idComponente,"*CAMPO OBLIGATORIO");
        hayErrores=true;
    }
    if(cantidad<0 || cantidad>100){
        mostrarTexto(idComponente, "DEBE SER UN NUMERO ENTRE 0 Y 100");
        hayErrores=true;
    }
    if (hayErrores== false){
        mostrarTexto(idComponente,"")
    }
    return !hayErrores;

}
esPrecioValido=function(precioProducto,idComponente){
        hayErrores=false
    if(isNaN(precioProducto)){
        mostrarTexto(idComponente,"*CAMPO OBLIGATORIO");
        hayErrores=true;
    }
    if(precioProducto<0 || precioProducto>50){
        mostrarTexto(idComponente, "DEBE SER UN NUMERO ENTRE 0 Y 50");
        hayErrores=true;
    }
    if (hayErrores== false){
        mostrarTexto(idComponente,"")
    }
    return !hayErrores;
}
/* SI TODO FUNCIONA, HACER UN PUSH */