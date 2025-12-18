//For Statement with arrays
let vegetales = ["patatas", "lechuga", "zanahoria", "apio", "berenjena"];
let longitudVeggies = vegetales.length;
let bolsa = [];
for (let i=0; i < longitudVeggies; i++){
    bolsa.push(vegetales[i]);//aca estan los elementos del array vegetales agregados a la bolsa
}
console.log(bolsa);