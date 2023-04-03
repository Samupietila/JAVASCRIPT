'use strict';
console.log('I have awaken!');
alert('terve vain');
'use strict';
const numero1 = parseInt(prompt('Anna jokin kokonaisluku'));
const numero2 = parseInt(prompt('Anna jokin kokonaisluku'));
let summa = numero1 + numero2;
document.querySelector('#target').innerHTML = 'kokonaislukujen summa on ' +
    summa;