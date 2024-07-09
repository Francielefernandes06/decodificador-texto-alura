const inputTexto = document.querySelector(".entrada");
const mensagem = document.querySelector(".saida");
const copiar = document.querySelector("#copy");
const areaButtons = document.querySelector(".area-e-buttons");
const areaTextoH2 = document.querySelector(".texto-area");
const areaSubTexto = document.querySelector(".subtexto-area");

function botaoEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
    copiar.style.display = "block";
    areaTextoH2.style.display = "none";
    areaSubTexto.style.display = "none";
    areaButtons.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
    const matrizCodigo = {
        'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat'
    };
    stringEncriptada = stringEncriptada.toLowerCase();

    let textoEncriptado = '';
    for (let char of stringEncriptada) {
        textoEncriptado += matrizCodigo[char] || char;
    }

    return textoEncriptado;
}

function botaoDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensagem.value = textoDesencriptado;
    mensagem.style.backgroundImage = "none";
    copiar.style.display = "block";
    areaTextoH2.style.display = "none";
    areaSubTexto.style.display = "none";
    areaButtons.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptada) {
    const matrizCodigo = {
        'ai': 'a', 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ufat': 'u'
    };

    let textoDesencriptado = stringDesencriptada.toLowerCase();
    for (const [key, value] of Object.entries(matrizCodigo)) {
        const regex = new RegExp(key, 'g');
        textoDesencriptado = textoDesencriptado.replace(regex, value);
    }

    return textoDesencriptado;
}

async function copia() {
    const textInput = document.getElementById('saida');
    textInput.select();
    document.execCommand('copy');
}


document.getElementById('encriptar').addEventListener('click', botaoEncriptar);
document.getElementById('desencriptar').addEventListener('click', botaoDesencriptar);
document.getElementById('copy').addEventListener('click', copia);
