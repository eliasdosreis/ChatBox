$(document).ready(function () {
    $('#character-container').hide();
    $('#container').hide();
  });


   function falar() {
    $('#character-container').fadeIn(400); // duração em milissegundos
    $('#container').fadeIn(400);
    escreverTexto()
    
  }
  
const texto = "Ei, aventureiro! Que tal aprender uma magia poderosa chamada JavaScript? Venha comigo e descubra como controlar a lógica dos mundos digitais!";
const legenda = document.getElementById("legenda");

let indice = 0;

function escreverTexto() {

  legenda.textContent = texto.substring(0, indice);
  indice++;

  if (indice <= texto.length) {
    setTimeout(escreverTexto, 100); 
    // setTimeout chama a função depois de 100 milissegundos (0.1s)
  }else{
    const img = document.getElementById('myGif')
    img.classList.add("character")
    img.src = "Maria.jpg"

  }
  
}
