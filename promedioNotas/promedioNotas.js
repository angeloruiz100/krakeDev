calcularPromedioNotas= function(){
    let float1=recuperarFlotante("nota1");
    let float2=recuperarFlotante("nota2");
    let float3=recuperarFlotante("nota3");
    let promedio;
    let resultadoFormateado;
    promedio=calcularPromedio(float1,float2,float3);
    resultadoFormateado=promedio.toFixed(2);
    cambiarTexto("lblResultado",resultadoFormateado);
    if(resultadoFormateado<5 && resultadoFormateado>0){
        cambiarImagen("lblImagen","f.gif");
        cambiarTexto("mensaje","Reprobado");
    }else if(resultadoFormateado>=5 && resultadoFormateado<=8){
        cambiarTexto("mensaje","Buen trabajo");
        cambiarImagen("lblImagen","excelente.gif");
    }else if( resultadoFormateado>8 && resultadoFormateado<=10){
        cambiarTexto("mensaje","Excelente");
        cambiarImagen("lblImagen","excellent.gif");
    }else{
        cambiarTexto("mensaje","Datos incorrectos ");
        cambiarImagen("lblImagen","duck.gif");
    }
}