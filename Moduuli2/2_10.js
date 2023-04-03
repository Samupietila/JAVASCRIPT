'use strict';
const Kandidaatit = parseInt(prompt('Anna kandidaattien määrä:'));
const list = []
for (let i = 1; i < Kandidaatit+1; i++) {
  let Henkilo = {
    Nimi : prompt('Kandidaatin nimi:'),
    Aanet : 0,
  }
    list.push(Henkilo);}

const Voters = parseInt(prompt('Anna äänestäjien määrä:'));
function Voting() {
  for (let i = 1; i < Voters+1; i++) {
    confirm('Äänestäjä nro ' + i + ' on nyt äänestysvuorossa.');
    let nimi = prompt('Kirjoita äänestämäsi kandidaatin nimi:');
    for (let i = 0; i < list.length; i++) {
       if (nimi === list[i].Nimi)
          list[i].Aanet++
          }
  }

  }
Voting()
list.sort(function(a, b) {
  return b.Aanet - a.Aanet
});
console.log('Winner is '+list[0].Nimi+ ' with '+list[0].Aanet+' votes.');
console.log('results:')
for (let i = 0; i < Kandidaatit; i++) {
  console.log(list[i].Nimi+': '+ list[i].Aanet)
}
