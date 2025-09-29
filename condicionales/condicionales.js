calcularTasaInteres=function(ingresoAnual){
    let valorTaza;
    if (ingresoAnual<300000){
        console.log("la tasa es del 16 %");
        valorTaza="16%";
    }else if(ingresoAnual>=300000 && ingresoAnual<500000){
        console.log("la tasa es del 15 %");
        valorTaza="15%";
    }else if(ingresoAnual>=500000 && ingresoAnual<1000000){
        console.log("la tasa es del 14 %");
        valorTaza="14%"
    }else if(ingresoAnual>=1000000 && ingresoAnual<2000000){
        console.log("la tasa es del 13 %");
        valorTaza="13%"
    }else{
        console.log("la tasa es del 12 %");
        valorTaza="12%"
    } 
    return valorTaza;
}
calcularCapacidadPago=function(edad,ingresos,egresos){
    let resultado;
    let resultado2;
    resultado= egresos-ingresos;
    if(edad>=50){
        resultado2= resultado*40/100;
    }else{
        resultado2=resultado*30/100;
    }
    return resultado2;
}
calcularDescuento=function(precio,cantidad){
    let pago;
    let resultado;
    resultado=cantidad*precio;
    if(cantidad<3){
        console.log("No recibe descuento");
        pago=0
    }else if (cantidad>=3 && cantidad<=5){
        console.log("Recibe el 2% de descuento");
        pago=resultado*2/100;
        console.log("lo que tiene que pagar es"+pago);
    }else if(cantidad<=6 && cantidad>=11){
        console.log("Recibe el 3% de descuento");
        pago=resultado*3/100;
        console.log("lo que tiene que pagar es"+pago);
    } else{
        console.log("Recibe el 4% de descuento");
        pago=resultado*4/100;
        console.log("lo que tiene que pagar es"+pago);
    }
    return pago;
}

determinarColesterolILDL=function(nivelColesterol){
    let ldlCategoria;
    if (nivelColesterol<100){
        ldlCategoria="Optimo"
    } else if(nivelColesterol>=100 && nivelColesterol<=129){
        ldlCategoria="Casi optimo"
    } else if(nivelColesterol>=130 && nivelColesterol<=159){
        ldlCategoria="Limite alto"
    }else if (nivelColesterol>=160 && nivelColesterol<=189){
        ldlCategoria="Alto"
    }else if(nivelColesterol>=190){
        ldlCategoria="Muy alto"
    }
    return ldlCategoria;
}
validarClave= function(clave){
    let caracteres= clave.length;
    if(caracteres==8){
        clave="la clave es valida"
        return true;
    } else if(clave<=16){
        clave="la clave es valida"
        return true;
    } else{
        clave="la clave es invalida"
        return false;    
    }
}
esMayuscula=function(caracter){
    let mayuscula= caracter.charCodeAt(0);
    if(mayuscula>=65 && mayuscula<=90){
        return true;
    }else{
        return false;
    }
}
esMinuscula= function(caracter){
    let minuscula= caracter.charCodeAt(1);
    if(minuscula>=97 && minuscula<=122){
        return true;
    }else{
        return false;
    }
}
esDigito= function(caracter){
    let digito= caracter.charCodeAt(2);
    if(digito>=48 && digito<=57){
        return true;
    }else{
        return false;
    }
}
darPermiso=function(notaMatematica,notaFisica,notaGeometria){
    let permiso;
    if(notaMatematica>90){
        permiso="Si tiene permiso";
        return true;
    }else if(notaFisica>90){
        permiso="Si tiene permiso";
        return true;
    }else if(notaGeometria>90){
        permiso="Si tiene permiso";
        return true;
    }else{
        permiso="No tiene permiso";
        return false;
    }
}
otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
    let permiso;
     if(notaMatematica>90){
        permiso="Si tiene permiso";
        return true;
    }else if(notaFisica>90){
        permiso="Si tiene permiso";
        return true;
    }else if(notaGeometria>80){
        permiso="Si tiene permiso";
        return true;
    }else{
        permiso="No tiene permiso";
        return false;
    }
}
dejarSalir=function(notaMatematica,notaFisica,notaGeometria){
    let permiso;
    if(notaMatematica>90){
        permiso="Si tiene permiso";
        return true;
    }else if(notaFisica>90){
        if(notaFisica>notaMatematica){
            permiso="Si tiene permiso";
            return true;
        } else{
            permiso="No tiene permiso";
            return false; 
        }
    }else if(notaGeometria>90){
        permiso="Si tiene permiso";
        return true;
    }else{
        permiso="No tiene permiso";
        return false;
    }
}