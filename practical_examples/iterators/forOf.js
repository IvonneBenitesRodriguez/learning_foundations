//El mejor metodo: for...of 
//primero tenemos que declarar una coleccion
// uso const porque evita errores por re-assignacion
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

// The for..of loop iterates over the values of an array, map or set.
// Example:
const arr = [1, 2, 3];
for (const value of arr){
    console.log(value);
}
//Another example:
const cyberattacks = ["malware", "phishing", "DDS"];
for (const cyberattack of cyberattacks){
    if ( cyberattack.startsWith("m")){
        console.log(`We found the attack: ${cyberattack}!`)// usando template literals muy importante!!!
        break; // es muy importante considerar agregar este break para parar el loop!!
    } else {
        console.log("Continue searching!")
    }
}