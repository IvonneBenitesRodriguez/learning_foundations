// Fix the infinite loop 
// find the issue and fix it.
// The function should:
// printArray(1) -> [1] -> the loop starts with 1 not with 0 (according the condition!).
// printArray(3) -> [1,2,3] -> the loop is passing by each value -> i++
// printArray(6) -> [1,2,3,4,5,6]

//Note:Se usa la propiedad length porque el loop va a iterar por cada
// elemento del array.
// array.length
//Note: Se usa la propiedad length porque el loop va a iterar por cada 
// elemento del string.
// string.length
//Note: No usa la propiedad length en el parametro number.

//Solution:
function printArray(number){
    let newArray = []; // place where we will store our values
    for (let i=1; i <= number; i++){ // the loop condition, it starts with 1 due to the condition declared before.
        newArray.push(i); // we are adding the values to the newArray variable
    }
    return newArray; // we are saying please return the values stored.
}

console.log(printArray(20));
console.log(printArray(12));
console.log(printArray(7));
