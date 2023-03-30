'use strict';
const Arpoja = Math.floor(Math.random() * 4 + 1);
const Nimi = prompt('Anna nimesi:');
if (Arpoja === 1) {
  document.querySelector('#target').innerHTML = Nimi + ', you are Gryffindor.';
}
else if (Arpoja === 2) {
  document.querySelector('#target').innerHTML = Nimi + ', you are Slytherin.';
}
else if (Arpoja === 3) {
  document.querySelector('#target').innerHTML = Nimi + ', you are Hufflepuff.';
}
else if (Arpoja === 4) {
  document.querySelector('#target').innerHTML = Nimi + ', you are Ravenclaw.';
}
