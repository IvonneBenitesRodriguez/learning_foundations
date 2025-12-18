//Se veria mejor si agrego un - despues de cada curso
// Uso metodo join
let cursos = ["matematicas", "fisica", "historia","filosofia"];
let nuevosCursos = ["mandarin", "hindi","espanol", "aleman", "ingles"];
// Para esto debo crear una nueva variable donde colocar los elementos:
let cursos2025= cursos.concat(nuevosCursos);
console.log(cursos2025);
console.log(cursos2025.join("-"));