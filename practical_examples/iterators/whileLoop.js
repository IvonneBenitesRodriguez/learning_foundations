//While Loops
//We want to execute a set of statements while a condition is true
//The condition is evaluated before executing the statement.
//example:
var number = 1;
var sum = 0; 
while ( number < 11) {
    sum += number;
    ++number;
}
console.log(sum);

// mdn example:
let n = 0;
while (n < 3) {
    n++;
}
console.log(n);
// mi ejemplo:

let securityTeamAtOffice = 0;
while ( securityTeamAtOffice < 4) {
        securityTeamAtOffice++;
}
console.log(securityTeamAtOffice);
//otro ejemplo mio

var number1 = 1;
var sum1 = 0;
while (number1 < 12){
sum1 += number1;
++number1;
}
console.log(sum1);

// nuevo ejemplo:
// While Loop
let n1 = 0;
let x = 0;
while (n < 3) {  // Esta es la condicion mientras n sea menor que 3
    n++;  // n va subiendo de valor o recorriendo elementos
    x += n;  // x es el valor nuevo de acuerdo a cada recorrido hecho por n
}
//otro ejemplo:
let i = 0; // this i is initialized with the value of 0
while (i < 10) { //here comes the condition we want the value of i to be logged while i is less than 10
    console.log(i); // the output will be values from 0 to 9
    i++;
}
//Note: in the while loop the condition is evaluated before executing the script.