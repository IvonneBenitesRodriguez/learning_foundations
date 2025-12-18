// usando toReversed() method to be used for not mutating the original Array
//We use this method once we need to preserve the original elements of the array
// it does not affect the original array - to keep the original data intact
// you avoid bugs in case original items of the array are needed
// In functional programming the idea of preserving the original data in the array
// is pretty important that is the reason why to choose toReversed() method
let numerosImpares = [1,3,5,7,9];
let nuevaLista = numerosImpares.toReversed();
console.log(nuevaLista);
//example authors
//original array :
let authors = ["Stephen King", "Isabel Allende", "Tom Smith"];
// usando toReversed method
let reverseAuthors = authors.toReversed();
console.log(reverseAuthors);
console.log(authors);
//using reverse method: this method changes the original array
let italianCities = ["Puglia", "Roma","Florencia"];
let reverseItalianCities = italianCities.reverse();
console.log(reverseItalianCities);
console.log(italianCities);
//using toReversed method: this method does not change the original array
let frenchCities = ["Nice", "Marseille", "Paris"];
let reverseFrenchCities = frenchCities.toReversed();
console.log(reverseFrenchCities);
console.log(frenchCities);