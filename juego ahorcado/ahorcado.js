//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta="";
esMayuscula=function(caracter){
    if(caracter.charCodeAt(0)>=65 && caracter.charCodeAt(0)<=90){
        return true;
    }else{
        return false;
    }
}
function guardarPalabra() {
    let palabra = recuperarTexto("txtSecreta");

    if (palabra.length !== 5) {
        alert("La palabra debe tener exactamente 5 letras mayusculas");
        return;
    }

    for (let i = 0; i < palabra.length; i++) {
        let letra = palabra.charAt(i);
        let codigo = letra.charCodeAt(0);

        if (codigo < 65 || codigo > 90) {
            alert("Todas las letras deben ser mayusculas");
            return;
        }
    }

    // Si pasó todas las validaciones, guardar la palabra
    palabraSecreta = palabra; // asegúrate de declarar `palabraSecreta` en el contexto correcto
}


