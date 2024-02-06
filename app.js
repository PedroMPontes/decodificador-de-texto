

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
    
}