
caracterMayuscula=function(caracter){
    if(caracter.charCodeAt(0)>=65 && caracter.charCodeAt(0)<=90){
        return true;
    }else{
        return false;
    }
}
esDigito=function(caracter){
    if(caracter.charCodeAt(0)>=48 && caracter.charCodeAt(0)<=57){
        return true;
    }else{
        return false;
    }
}
esGuion=function(caracter){
    if(caracter.charCodeAt(0)==45){
        return true;
    }else{
        return false;
    }
}
