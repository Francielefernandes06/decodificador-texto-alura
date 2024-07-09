const inputTexto = document.querySelector(".entrada")
const mensagem = document.querySelector(".saida")
const copiar = document.querySelector("#copy")
const areaButtons = document.querySelector(".area-e-buttons")
const areaTextoH2 = document.querySelector(".texto-area")
const areaSubTexto= document.querySelector(".subtexto-area")



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
      'a': 'ai', 'b': 'bt', 'c': 'ct', 'd': 'dj', 'e': 'ex', 'f': 'fu', 'g': 'gz', 'h': 'hj', 'i': 'ix',
      'j': 'jt', 'k': 'kv', 'l': 'ly', 'm': 'mz', 'n': 'nx', 'o': 'ov', 'p': 'pt', 'q': 'qv', 'r': 'rw',
      's': 'sz', 't': 'tv', 'u': 'uv', 'v': 'vw', 'w': 'wx', 'x': 'xy', 'y': 'yz', 'z': 'zx'
  };
  stringEncriptada = stringEncriptada.toLowerCase();

  let textoEncriptado = '';
  for (let i = 0; i < stringEncriptada.length; i++) {
      const char = stringEncriptada[i];
      textoEncriptado += matrizCodigo[char] || char;
  }

  return textoEncriptado;
}

function botaoDesencriptar() {
  const textoDesencriptado = desencriptar(inputTexto.value);
  mensagem.value = textoDesencriptado;
  mensagem.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptada) {
  const matrizCodigo = {
      'ai': 'a', 'bt': 'b', 'ct': 'c', 'dj': 'd', 'ex': 'e', 'fu': 'f', 'gz': 'g', 'hj': 'h', 'ix': 'i',
      'jt': 'j', 'kv': 'k', 'ly': 'l', 'mz': 'm', 'nx': 'n', 'ov': 'o', 'pt': 'p', 'qv': 'q', 'rw': 'r',
      'sz': 's', 'tv': 't', 'uv': 'u', 'vw': 'v', 'wx': 'w', 'xy': 'x', 'yz': 'y', 'zx': 'z'
  };
  stringDesencriptada = stringDesencriptada.toLowerCase();

  let textoDesencriptado = stringDesencriptada;
  for (const key in matrizCodigo) {
      const regex = new RegExp(key, 'g');
      textoDesencriptado = textoDesencriptado.replace(regex, matrizCodigo[key]);
  }

  return textoDesencriptado;
}

async function copia() {
	
	const textInput = document.getElementById('saida');
    const copy = document.getElementById('copy');

    copy.addEventListener('click', () => {
        textInput.select();
        document.execCommand('copy');
    })
	}

function limpeza() {
	document.getElementById("saida").value ="";
	document.getElementById("entrada").value ="";

};

onclick="botaoEncriptar()";
onclick="botaoDesencriptar()";
onclick="copia()";