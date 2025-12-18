//creando un array:
let frutas = ["peras", "manzanas","fresas", "uvas"];
console.log(frutas);
console.log(frutas.length);
let newShop = frutas.push("Mandarina");
console.log(frutas);
//Accediendo un array mediante el indice
let primero = frutas[0];
let ultimo = frutas[frutas.length - 1 ];
console.log(primero);
console.log(ultimo);
//recorriendo un array: usando forEach que es un metodo iterativo.
//forEach always returns undefined and it is not chainable.
// There is no way to stop or break a forEach() loop other than by 
// throwing an exception
// Use forEach only if you want to process all the elements of the array
frutas.forEach((element) => console.log(element));
//otro metodo usando forEach:
frutas.forEach(function(element, index, array){
    console.log(element, index);
});
//Adding an element at the end of an array:
let frutas2 = ["kiwi", "berries", 'Lucuma'];
const supermarket= frutas2.push("Mango");
console.log(supermarket);
console.log(frutas2);
//Eliminar el ultimo elemento de un Array
let artefactos = ["televisor", "radio","licuadora", "microondas"];
let eliminandoUltimoArtefacto = artefactos.pop();
console.log(artefactos);
//Agregar un elemento al inicio de un Array
artefactos.unshift("lamparas");
console.log(artefactos);
//Eliminar el primer elemento de un Array
artefactos.shift();
console.log(artefactos);
//Encontrar el indice de un elemento de un Array
frutas.push("papaya");
console.log(frutas);
//Usando el metodo indexOf podemos saber que posicion tiene un item en un array
let ubicacionFrutas = frutas.indexOf("papaya");
console.log(ubicacionFrutas);
//Elimina un unico elemento mediante su ubicacion
// Usando el metodo splice retiramos el item agregado de la variable ubicacionFrutas
let elementoEliminado = frutas.splice(ubicacionFrutas,1);
console.log(frutas);
//Eliminar varios elementos usando su posicion de index usando splice
let juguetes = ["peluches", "colores", "libros", "lego"];
console.log(juguetes);
let elementos1 = 1;
posicionElementos = 2;
let juguetesEliminados = juguetes.splice(elementos1, posicionElementos);
console.log(juguetesEliminados);
// array mutado: ya que hemos cambiado el array original:
console.log(juguetes);
//Copiar el array: usando slice devuelve el array modificado
let copiaDelArray  = juguetes.slice();
console.log(copiaDelArray);
//Accediendo a los elementos del array
//el indice del array inicia con la posicion 0 
// el indice del array termina con el valor de la propiedad length del Array - 1
let temas = ["comportamiento vial", "aspectos tecnicos", "segnales de trafico"];
console.log(temas[0]);
console.log(temas[1]);
console.log(temas[temas.length - 1]);
//creo una copia de este array:
console.log(temas.slice());
//Propiedad length del array y sus propiedades numericas:
//Usando el metodo push:
const cursos = ["historia", "matematica", "filosofia", "ingles"];
console.log(cursos.length);
const profesores = [];
profesores.push("Alvaro", "Elena", "Maria", "Paco");
console.log(profesores.length);
console.log(profesores);
// observando sus indices:
console.log(profesores[3]);
//Agnadir un elemento al principio del array profesores
console.log(profesores.unshift("Claudia"));
console.log(profesores);
//Eliminar el primer elemento usando shift
console.log(profesores.shift());
console.log(profesores);
// sigamos con length
profesores[5] = "Victoria";
console.log(profesores[5]);
console.log(profesores);
profesores[4] ="Fernando";
console.log(profesores);
//usando object keys:
console.log(Object.keys(profesores));
console.log(profesores.length);
//Aumentando el numero de elementos usando empty items
profesores.length = 10;
console.log(profesores);
console.log(Object.keys(profesores));
console.log(profesores.length);
console.log(profesores[8]);
//Usando join en el array:
let estaciones = ["Verano", "Invierno","Otogno", "Primavera"];
console.log(estaciones.join());
console.log(estaciones.join(""));
console.log(estaciones.join("-"));
console.log(estaciones.join(","));
console.log(estaciones.join("+"));
//usando concat en el array:
const ingredientes = ["manzana", "harina", "azucar"];
const ingredientes1 = ["mantequilla", "pasas", "huevo"];
const receta = ingredientes.concat(ingredientes1);
console.log(receta);
//Ejercicio olvide agregar un ingrediente:
receta.push("aceite");
console.log(receta);
//agregando el primer elemento a la receta con unshift
console.log(receta.unshift("vainilla"));
console.log(receta);
//retirando el primer elemento del array receta
console.log(receta.shift());
console.log(receta);
//retirando el ultimo elemento del array:
console.log(receta.pop());
console.log(receta);
//Usando concat para unir tres arrays:
let primos = ["Malena", "Pilar", "Karla"];
let hermanos = ["Selena", "Julia", "Celia"];
let amigos = ["Carmen", "Sheila", "Julissa"];
let personas = primos.concat(hermanos, amigos);
console.log(personas);
//Practicando Splice: Este metodo cambia el estado original del Array
//agrega y/o elimina elementos
// y lo transforma en un nuevo array:
let departments = ["marketing", "HR", "finance"];
departments.splice(1,0,"bookings");
console.log(departments);
departments.splice(2,1,"accounting");
console.log(departments);
//Removiendo con splice 2 elementos y agrego 3 nuevos elementos
departments.splice(0,2,"events", "engineering", "food and beverage");
console.log(departments);
//Eliminar los elementos tras el indice 2
//conociendo que tengo el array
// departments = [events, engineering, food and beverage, accounting, finance]
// eliminando todos los elementos a partir del indice de posicion 2
// usando splice resulta solo dos elementos restantes events, and engineering
departments.splice(2);
console.log(departments);
//Usando el metodo reverse
const numeros = [1,2,3,4,5];
const numerosDeReversa = numeros.toReversed();
console.log(numerosDeReversa);
//Ejercicio:

let fechasNacimiento = [1979,1980,1981,1982];
let storeValuesReversedNew = [];
let box;
for(let i=0; i < fechasNacimiento.length; i++){
    if(fechasNacimiento > 1978){
        box = fechasNacimiento.toReversed();
        storeValuesReversedNew = box.push();
       console.log(storeValuesReversedNew);
    }else{
        return 0;
    }
  
}

  console.log(storeValuesReversedNew(box));
