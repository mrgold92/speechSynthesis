const texto = document.getElementById('texto');
const btn = document.getElementById('btn');
const all = document.getElementsByClassName('all');

const leerTextoEnVozAlta = () => {

  if (texto.value.trim() === '') {
    alert('No hay texto para leer');
    return;
  }

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
    all[0].classList.remove('oscurecer')
  }
}

btn.addEventListener('click', leerTextoEnVozAlta);

