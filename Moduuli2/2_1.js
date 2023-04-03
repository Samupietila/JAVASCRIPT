'use strict';
const list = [];
for (let i = 0; i < 5; i++) {
  let Numero = parseInt(prompt('Anna numero:'));
  list.push(Numero);
}
list.sort((a,b) => b-a);
console.log(list)