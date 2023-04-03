'use strict';
const koiralista = [];
for (let i = 0; i < 6; i++){
  let nimi = prompt('Anna '+i+'. koiran nimi:');
  koiralista.push(nimi)
}
koiralista.sort().reverse()
for (let i = 0; i < koiralista.length; i++) {
  const x = document.createElement('li');
  let y = document.createTextNode(koiralista[i]);
  x.appendChild(y);
  const element = document.getElementById('ul');
  element.appendChild(x);
}