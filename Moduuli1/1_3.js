'use strict';
    'use strict';
    const numero1 = parseInt(prompt('Anna jokin kokonaisluku'));
    const numero2 = parseInt(prompt('Anna jokin kokonaisluku'));
    const numero3 = parseInt(prompt('Anna jokin kokonaisluku'));
    let summa = numero1 + numero2 + numero3;
    let product = numero3 * numero1 * numero2;
    let average = summa / 3;

    document.querySelector('#target').innerHTML = 'kokonaislukujen summa on '+summa;
    document.querySelector('#target2').innerHTML = 'kokonaislukujen tulo on '+product;
    document.querySelector('#target3').innerHTML = 'kokonaislukujen keskiarvo on '+average;