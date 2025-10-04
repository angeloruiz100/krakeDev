
calcularIVA= function(monto){
    let iva;
    iva=monto*12/100;
    return iva;
}
calcularSubtotal= function(precio,cantidad){
    let subtotal;
    subtotal=precio*cantidad;
    return subtotal;
}
 
calcularTotal= function(subtotal,descuento,iva){
    let total1;
    let total;
    total1=subtotal-descuento;
    total=total1+iva
    return total;
}
calcularDescuentoPorVolumen=function(subtotal,cantidad){
    
    if(cantidad<3){
       mostrarTexto("lblDescuento","No obtiene descuento"); 
    }else if(cantidad>3 && cantidad<5){
        cantidad=subtotal*3/100;
    }else if(cantidad>6 && cantidad<11){
        cantidad=subtotal*4/100;
    } else{
        cantidad=subtotal*5/100;
    }
    return cantidad
}