'use strict';
const osallistujat = parseInt(prompt('Anna osallistujien määrä:'));
const lista = []
for (let i = 1; i < osallistujat+1; i++) {
  let nimi = prompt('Anna osallistujan nro ' + i +' nimi:')
  lista.push(nimi)
}
lista.sort()
for (let i = 0; i < osallistujat; i++) {
  const x = document.createElement('li');
  let y = document.createTextNode(lista[i]);
  x.appendChild(y);
  const element = document.getElementById('ol');
  element.appendChild(x);
}