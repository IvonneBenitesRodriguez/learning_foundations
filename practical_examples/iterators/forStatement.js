//For Statement 
//for Statement:
// ejercicio : Buscar todos los puertos menores o iguales al puerto 80
// Del puerto 1 al puerto 80

function busquedaPuertos() {
    const puertosEncontrados = [];
    for (let i= 1; i <= 80; i++){
        puertosEncontrados.push(i);
    }
    return puertosEncontrados;
}

let informacionSolicitada = busquedaPuertos();
console.log(informacionSolicitada);

//for Loop example
// important: you can use it once you have to execute a set of statements for a specified 
//number of times!!!
//Summing integers using a for loop
var number = 1;
var sum = 0; 
for ( var number = 1; number < 11 ; number++){
    sum += number;
}
console.log(sum);

// Using a for loop in an array:
// here because it is an array the starts is with 0
var numbers = [3,7,12,22,100];
var sum = 0;
for (var i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(sum);