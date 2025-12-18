//For Statement with Strings:
let frutas = ["apple", "pigna","pera","naranja"];
let len =frutas.length;
let bag = "";
for (let i=0 ; i < len ; i++){
    bag += frutas[i] + ',';
   
}

console.log(bag);
const separandoElementos = bag.match(/[a-z]+/g);
console.log(separandoElementos);