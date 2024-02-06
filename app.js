
function criptografar(){

    let texto = document.getElementById('textarea').value;

    let textoCriptografado = texto
        .replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById('conteudo__area__texto').style.display = 'none';

    let campoMostrarTexto = document.getElementById('conteudo__area__criptografia');
    campoMostrarTexto.innerHTML = textoCriptografado;
    
}

function descriptografar(){

    let texto = document.getElementById('textarea').value;

    let textoDescriptografado = texto
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    document.getElementById('conteudo__area__texto').style.display = 'none';

    let campoMostrarTexto = document.getElementById('conteudo__area__criptografia');
    campoMostrarTexto.innerHTML = textoDescriptografado;
    
}