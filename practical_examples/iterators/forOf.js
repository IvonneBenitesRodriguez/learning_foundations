//El mejor metodo: for...of 
//primero tenemos que declarar una coleccion
// uso const porque es evita errores por re-assignacion
const fruits = ["apple", "grapes", "tomato"];
const bag = [];
//voy a iterar por cada elemento de esta coleccion fruits
//usare for...of
// const fruit porque es la mejor practica en Js para evitar re-assignacion
for(const x of fruits){
if(x === "apple" || x === "grapes"){
    bag.push(x);
}
}
console.log(bag);