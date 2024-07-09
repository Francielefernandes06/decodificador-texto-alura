const inputTexto = document.querySelector(".entrada")
const mensagem = document.querySelector(".saida")
const copiar = document.querySelector(".copy")
const areaButtons = document.querySelector(".area-e-buttons")
const areaTexto = document.querySelector(".area-texto")



function botaoEncriptar() {
  const textoEncriptado = encriptar(inputTexto.value);
  mensagem.value = textoEncriptado;
  areaButtons.style.backgroundImage = "none";
  copiar.style.display = "block";
  areaTexto.style.display = "none";
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++) {
      if(stringEncriptada.includes(matrizCodigo[i][0])) {
          stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
      }
  }

  return stringEncriptada;
}

function botaoDesencriptar() {
  const textoDesencriptado = desencriptar(inputTexto.value);
  mensagem.value = textoDesencriptado;
  mensagem.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
      if (stringDesencriptada.includes(matrizCodigo[i][0])) {
          stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
      }
  }

  return stringDesencriptada;
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
onclick="limpeza()";