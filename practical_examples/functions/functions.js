//There are functions that return values 
//and functions that do not return values
//Functions returning values:
//Ex : A value returning function:
function factorial(number){
    var product = 1;
    for (var i = number; i >= 1; --i){
        product *= i;
    }
    return product;
}
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(10));

// using an array in a subprocedure or void function in JavaScript
function curve(arr,amount){
    for (var i=0; i < arr.length; i++){
        arr[i] +=amount;
    }
}

var grades = [77,73,74,81,90];
curve(grades, 5);
console.log(grades);

// What is a function and its parts:
function solution(number){
return number * number;
} 
// the function name is solution
// the parameter this function has is number
// the function is performing a set of operations

//Ex: An Object as a parameter of a Function
function myFunc(theObject){
    theObject.make="Toyota";
}
const myCar ={
    make: "Honda",
    mode: "Accord",
    year: 1998,
};
console.log(myCar.make);
myFunc(myCar); // note see this!!!!
console.log((myCar.make));
//note: when you pass an object as a parameter, and if the function changes the object's properties
//the change is visible outside the function.

//Also here with the Array as parameter
//if the function changes the values of the array, the changes are visible outside the function
function myFunc(theArr){
    theArr[0] =30;
}
const arr = [45];
console.log(arr[0]);
myFunc(arr); // note
console.log(arr[0]);
// Pero siempre tenemos que volver a llamar a la funcion para volver a traer 
// el valor original.

//Functions nested inside another function
function addSquares(a,b){
    function square(x){
        x * x;
    }
    return square(a) + square(b);
}
//Function expressions: no name of the function present 
const square = function (number){
    return number * number;
};
console.log(square(4));
//otro ejemplo de Functions expressions or function without a name:
const addition = function (number){
    return number + number;
};
console.log(addition(10));
//A function expression with a name provided
const addition1 = function addit(n){
    return n < 2 ? 1 : n * addit(n-1);
};
console.log(addition1(9));
//Here we are passing a function as an argument to another function.
// the function named map is receiving a function as the first argument
// and an array as second argument.
function map(f,a){ // f is a function and a is an array
const result = new Array(a.length);
for (let i=0; i < a.length; i++){
    result[i] = f(a[i]); 
}
return result;
}
const numbers = [0,1,2,5,10];
const cubedNumbers = map(function (x){
    return x*x*x;
}, numbers);
console.log(cubedNumbers); 
//Function defined as a condition in JS
let myFunc1;
if(num === 0) {
    myFunc = function (theObject){
        theObject.make = "Toyota";
    };
}
console.log(myFunc1());