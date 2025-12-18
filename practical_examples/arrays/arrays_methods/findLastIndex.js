//findLastIndex iterates the array in reverse order 
// returns the index of the first element that
// satisfies the provided testing function.
// If no elements are satisfied it returns -1
//Example:
// la idea es encontrar el index del elemento que cumple la condicion
const ages = [25, 45, 65, 85];
const largerAge = (element) => element > 66;
console.log(ages.findLastIndex(largerAge));

