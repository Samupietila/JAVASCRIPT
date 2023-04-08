'use strict';
function x (t) {
  const ul = document.querySelector('#target');
  const i = document.createElement('li');
  let teksti =document.createTextNode(t);
  i.appendChild(teksti)
  ul.appendChild(i)

}
x('First item')
x('Second item')
x('Third item')
const second = document.getElementsByTagName('li')[1];
second.classList.add('my-item')