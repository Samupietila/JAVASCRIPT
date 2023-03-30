'use strict';
let Aloitusvuosi = parseInt(prompt('Anna aloitusvuosi:'));
const Lopetusvuosi = parseInt(prompt('Anna lopetusvuosi:'));
while (Aloitusvuosi % 4 !== 0) {
  Aloitusvuosi++;
}
const x = document.createElement('li');
let y = document.createTextNode(Aloitusvuosi);
x.appendChild(y);
const element = document.getElementById('ul');
element.appendChild(x);
do {
  Aloitusvuosi += 4;
  const x = document.createElement('li');
  let y = document.createTextNode(Aloitusvuosi);
  x.appendChild(y);
  element.appendChild(x);
} while (Aloitusvuosi < Lopetusvuosi);
