const lista = []
while (true) {
  let y = parseInt(prompt('Anna jokin kokonaisuluku, (0 lopettaa):'))
  if (y === 0) {
    break;
  }
  lista.push(y)}
lista.sort(function(a, b){
  return b-a
});
console.log(lista);
