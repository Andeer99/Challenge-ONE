let textoUsuario;
let textoEncriptado;
let textoDesencriptado;
function encriptarTexto(){
    textoUsuario = document.getElementById("containertexto").value;
    textoEncriptado = textoUsuario.replace(/[aeiou]/gi, function(match) {
        switch (match.toLowerCase()) {
            case 'a': return 'ai';
            case 'e': return 'enter';
            case 'i': return 'imes';
            case 'o': return 'ober';
            case 'u': return 'ufat';
        }
    });
    document.getElementById("desEncriptador").innerText = textoEncriptado;

}
function desencriptarTexto(){
    textoUsuario = document.getElementById("containertexto").value;
    textoDesencriptado = textoUsuario
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById("desEncriptador").innerText = textoDesencriptado;
}