window.onload = () => {
  generarCartaAleatoria();
};

let card_head = document.querySelector('#header');
let card_footer = document.querySelector('#footer'); 
let boton_cargar_carta = document.querySelector('.button_new_card');
let numberSelection = document.querySelector('#number');
let numberColor = document.querySelector('.number');

boton_cargar_carta.addEventListener('click', () => {
  generarCartaAleatoria();
});

let card_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function generarNumeroAleatorio() {
  let card_numberValue = card_arr[Math.floor(Math.random() * card_arr.length)];
  
  if (card_numberValue === 1) {
    return 'A';  
  } else if (card_numberValue === 11) {
    return 'J';  
  } else if (card_numberValue === 12) {
    return 'Q';  
  } else if (card_numberValue === 13) {
    return 'K'; 
  } else {
    return card_numberValue.toString(); 
  }
}

function generarPintaAleatoria() {
  let num_aleatorio_pinta = Math.floor(Math.random() * 4) + 1;
  let pinta; 

  switch (num_aleatorio_pinta) {
    case 1:
      pinta = 'heart';
      numberColor.style.color = "red";
      break;
    case 2:
      pinta = 'diamond';
      numberColor.style.color = "red";
      break;
    case 3:
      pinta = 'spade';
      numberColor.style.color = "black";
      break;
    case 4:
      pinta = 'club';
      numberColor.style.color = "black";
      break;
    default:
      pinta = 'unknown';
      break;
  }

  return pinta;
}

function generarCartaAleatoria() {
  card_head.className = '';
  card_footer.className = '';
  let pinta = generarPintaAleatoria();
  numberSelection.textContent = generarNumeroAleatorio();
  card_head.className = pinta;
  card_footer.className = pinta + ' inverse';
}