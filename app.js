var contador = 0;
var presionado = false;

function cesarFunction(positions, word) {
    let newWord = ""
    let abc = "abcdefghijklmnopqrstuvwxyz";

    word = word.replace(/ /g, "");

    for (let i = 0; i < word.length; i++) {
        var currentPos = abc.indexOf(word[i]) + positions;
        currentPos > abc.length ? newWord += abc[currentPos - 26] : newWord += abc[currentPos];
    }

    return newWord;
}

function decodeCesarFunction(positions, word) {
    let newWord = ""
    let abc = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < word.length; i++) {
        var currentPos = abc.indexOf(word[i]) - positions;
        currentPos > abc.length ? newWord += abc[currentPos + 26] : newWord += abc[currentPos];
    }

    return newWord;
}


$(document).ready(function () {
    $("#crear").click(function () {
        let desplazamientos = $("#des").val();
        let frase = $("#frase").val();
        let resultado = "";

        if (presionado) {
            resultado = cesarFunction(Number(desplazamientos), frase);
        } else {
            resultado = decodeCesarFunction(Number(desplazamientos), frase);
        }

        $('.resultado').text(resultado);
    });

    $(".slider").click(function () {
        contador++;
        if (contador % 2 == 0) {
            presionado = false
        } else {
            presionado = true
        }
    });

});