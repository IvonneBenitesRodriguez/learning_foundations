let cursos = ["matematicas", "fisica", "historia","filosofia"];
let nuevosCursos = ["mandarin", "hindi","espanol", "aleman", "ingles"];
// Para esto debo crear una nueva variable donde colocar los elementos:
let cursos2025= cursos.concat(nuevosCursos);
console.log(cursos2025);
console.log(cursos2025.join("-")); 
//Me gustaria saber cual es el ultimo elemento de mi lista 
console.log(cursos2025[cursos2025.length-1]);