const texto = document.getElementById('texto');
const btn = document.getElementById('btn');
const all = document.getElementsByClassName('all');

const leerTextoEnVozAlta = () => {

  if (texto.value.trim() === '') {
    alert('No hay texto para leer');
    return;
  }

  // al div .all añadir la clase .oscurecer
  all[0].classList.add('oscurecer');
 

  const speech = new SpeechSynthesisUtterance();
  speech.text = texto.value;
  speech.lang = 'es-ES';
  speech.rate = 1;
  speech.pitch = 1;
  speech.volume = 1;
  speech.voice = speechSynthesis.getVoices()[0];
  speechSynthesis.speak(speech);

  speech.onend = () => {
    // mostrar body
    all[0].classList.remove('oscurecer')
  }
}

// Agregar evento al boton
btn.addEventListener('click', leerTextoEnVozAlta);

