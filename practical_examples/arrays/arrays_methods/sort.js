const  paises = ["Panama", "Paraguay", "Puerto Rico", "Polonia", "Peru"];
paises.sort();
console.log(paises);

//usando el metodo Sort
const numeros = [ 1,4,20,3,800];
let numeros1 = numeros.sort((a,b)=> a-b);
   console.log(numeros1);
   console.log(numeros);
//usando el metodo toSorted() para evitar el cambio en el array original
const numeros2 = [10,5,3,99];
let newValues = numeros2.toSorted((a,b)=> a-b);
console.log(newValues);
console.log(numeros2);
//Si quiero ordenar de forma ascendente (menor a mayor) mi array:
// Uso el metodo toSorted() que es inmutable
let numeros3 = [3,0,2,1,5,6,8,89];
let ordenandoNumeros3 = numeros3.sort((a,b)=> a -b);
console.log(ordenandoNumeros3);
//ordenando nombres
let profesores=["Akhila", "Annie", "Joshua", "Nil", "Zed", "Allie"];
let profesoresOrden= profesores.toSorted();
console.log(profesoresOrden);
//La sintaxis es diversa cuando se ordena numeros y strings
//otro ejemplo de orden de strings
let compagneros = ["Sawraj", "Sammy", "Simran", "Anthony", "Divya", "Pritvia"];
let compagnerosOrden = compagneros.toSorted();
console.log(compagnerosOrden);
//con numeros: //metodo toSorted keeps the original elements of the array 
// and it position but it returns the array ordered too
let grades = [100, 50, 99, 65, 32, 71, 58];
const gradesOrdered = grades.toSorted((a,b) => a-b);
console.log(gradesOrdered);
console.log(grades);
