var boton = document.getElementById("crear");

function cesarFunction(positions, word) {
    let newWord = ""
    let abc = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < word.length; i++) {
        var currentPos = abc.indexOf(word[i]) + positions;
        currentPos > abc.length ? newWord += abc[currentPos - 26] : newWord += abc[currentPos];
    }

    console.log(newWord);

    return newWord;
}

$(document).ready(function () {
    $("#crear").click(function () {
        var desplazamientos = $("#des").val();
        var frase = $("#frase").val();

        var resultado = cesarFunction(Number(desplazamientos), frase);
        $('.resultado').text(resultado);    
    });
});