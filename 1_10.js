'use strict';

function nopanheitto() {
  return Math.floor(Math.random() * 6) + 1;
}

const Noppienmaara = parseInt(prompt('Anna noppien määrä:'));
const Haluttusumma = parseInt(prompt('Anna haluttu summa:'));
let summa = 0;
let kierros = 0;
let osumat = 0;
do {
  for (let i = 1; i <= Noppienmaara; i++) {
    summa = summa + nopanheitto();
  }
  if (summa === Haluttusumma) {
    osumat++;
  }
  kierros++;
  summa = 0;
} while (kierros < 10000);
const prosentit = osumat / 10000 * 100;
document.querySelector('#target').innerHTML = 'Propbability to get sum ' +
    Haluttusumma + ' with ' + Noppienmaara + ' dice is ' + prosentit + '%';

