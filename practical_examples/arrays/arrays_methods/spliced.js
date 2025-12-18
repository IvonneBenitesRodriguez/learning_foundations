//Usando Splice en una forma "inmutable way":
const juguetes = [ "osos", "pelotas", "colores", "mugnecas"];
//creando un nuevo array agregando lego y eliminando mugnecas sin cambiar el array original
const nuevosJuguetes = juguetes.toSpliced(3,1,"lego");
console.log(nuevosJuguetes);
console.log(juguetes);
//ahora usamos el metodo splice()
const marcas =["samsung", "hitachi", "apple", "lexus"];
const nuevasMarcas=marcas.splice(1,1,"lenovo");
console.log(nuevasMarcas);
console.log(marcas);
//In real applications toSpliced() method helps you to keep 
// real data (original data intact)
//Example:
const users = ["Marco", "Miranda", "Melissa","Mary"];
const usersToRemove = users.toSpliced(1,1); //eliminamos a Miranda
console.log(usersToRemove);
console.log(users); // toSpliced conserva su array original
//Agrega un elemento :
const ciudades = ["Rio de Janeiro", "Santiago de Chile", "Istambul", "Granada"];
const ciudadNueva =  ciudades.toSpliced(ciudades.length,0,"Milano");
//Siempre agregamos una nueva variable para poder ver los nuevos datos obtenidos.
const agregandoCiudadNuevaInicio = ciudades.toSpliced(0,0,"Dusseldorf");
console.log(agregandoCiudadNuevaInicio);// [Dusseldorf, Rio de Janeiro, Santiago de Chile, Istambul, Granada]
console.log(ciudadNueva);
console.log(ciudades);
