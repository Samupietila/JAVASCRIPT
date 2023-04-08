'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
function x (t, t2) {
  const ul = document.querySelector('#target');
  const y = document.createElement('option');
  y.value = t2
  let teksti = document.createTextNode(t);
  y.appendChild(teksti)
  ul.appendChild(y)
}
for (let i = 0; i < 3; i++) {
    x(students[i].name, students[i].id)
}
