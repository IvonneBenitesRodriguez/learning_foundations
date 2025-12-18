// with method 
//Allows you to create a new array where one element at a specific index
// is replaced just specify the index and the new value added.
const cities = ["Berlin", "Prague", "Poland", "Vienna", "Madrid"];
const newCities =  cities.with(2, "Paris");
console.log(newCities);
// this method also does not mutate the original array
// this method avoid side effects in the code.
// with helps maintain inmutability which is needed to handle data in larger applications.
// we can use it confidently without concerning about accidental changes
// to the original data
// with is an excellent alternative when you need to update data
// but still need to reference the original array elsewhere in the code
console.log(cities);
//Another example using the with method:
let conductoresTV = ["Maria Pia", "Carlos Galdos", "Magaly Medina", "Aldo Miyashiro"];
let conductoresTV2026 = conductoresTV.with(0,"Veronica Scribens");
console.log(conductoresTV2026);
//Another example using the with method:
let productos2025 = ["iphone 12", "videogame2030", "agendaSmart", "smartfridge"];
let productos2026 = productos2025.with(0,"iphone20");
console.log(productos2026);