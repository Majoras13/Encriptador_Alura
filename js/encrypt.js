//esto carga el elemento html del input del mensaje del primer cuadro de texto
const textArea = document.querySelector("#message-input");
//esto carga el elemento html del output del segundo cuadro donde se muestra el resultado
const message = document.querySelector("#message-output");

//esto llama a la funcion de encriptar y remplaza el texto con el resultado de la encriptacion, tambien conecta el hacer clic con la funcion
function btnEncrypt() {
  const encryptText = encrypt(textArea.value);
  message.value = encryptText;
  textArea.value = "";
}

//esta es la funcion de encriptar 
function encrypt(stringEncrypt) {
  let keyWords = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
  ]; //esto es un array con arrays anidados que nos da el cambio de texto
  stringEncrypt = stringEncrypt.toLowerCase(); //esto convierte las mayusculas a minusculas para que el array funcione
  stringEncrypt = stringEncrypt.replace(/[^\wñ!¡.,¿? ]/g, "");

  //para verificar cada letra hacemos un loop
  for (let i = 0; i < keyWords.length; i++) {

    //esta seria la condicion para verificar la coincidencia de letras y cambiarlo a la segunda opcion de los arrays
    if (stringEncrypt.includes(keyWords[i][0])) {
      stringEncrypt = stringEncrypt.replaceAll(keyWords[i][0], keyWords[i][1]);
    }

  }
  return stringEncrypt;

}


function btnDecrypt() {
  const decryptText = decrypt(textArea.value);
  message.value = decryptText;
  textArea.value = "";
}

//esta es la funcion de desencriptar, es lo mismo que la de encriptar solo que tiene cambiados los valores de la condicional
function decrypt(stringDecrypt) {
  let keyWords = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
  ];
  stringDecrypt = stringDecrypt.toLowerCase();
  stringDecrypt = stringDecrypt.replace(/[^\wñ!¡.,¿? ]/g, "");

  for (let i = 0; i < keyWords.length; i++) {
    if (stringDecrypt.includes(keyWords[i][1])) {
      stringDecrypt = stringDecrypt.replaceAll(keyWords[i][1], keyWords[i][0]);
    }
  }
  return stringDecrypt;
}

//este boton copia el texto
function btnCopyTCB() {
  const element = document.querySelector("#message-output");
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied the text: " + message.value);
}
