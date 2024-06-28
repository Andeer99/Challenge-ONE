let imagenSustituida;
let textoDesencriptado;

function sutituirTextoPorImagen(){
    imagenSustituida= document.getElementById("desEncriptador").style.display= "none";
}
function devolverImagen(){
    imagenSustituida= document.getElementById("desEncriptador").style.display= "flex";
    return;
}
function encriptarTexto(){
    let textoUsuario = document.getElementById("containertexto").value;
    let textoEncriptado = textoUsuario.replace(/[aeiou]/gi, function(match) {
        switch (match.toLowerCase()) {
            case 'a': return 'e';
            case 'e': return 'i';
            case 'i': return 'o';
            case 'o': return 'u';
            case 'u': return 'a';
        }
    });
    sutituirTextoPorImagen();
    document.getElementById("desEncriptador").innerText = textoEncriptado;

}
function condicionesIniciales(){
    devolverImagen();
}