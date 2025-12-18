//function creating new Arrays from an existing one:
var eventsDpt = ["Katia", "Diana", "Milu","Stefania"];
var cateringDpt = ["Aldo", "Marco", "Pedrito"];
var bestDpts = eventsDpt.concat(cateringDpt);
console.log(bestDpts);
bestDpts = cateringDpt.concat(eventsDpt);
console.log(bestDpts);
//Luego usamos la funcion Splice()
var bestDpts = ["Katia", "Diana", "Milu","Aldo", "Marco", "Pedrito","Stefania"];
var cateringDpt = bestDpts.splice(5,2);
var eventsDpt = bestDpts;
console.log(cateringDpt);
console.log(eventsDpt);
//hacer mas ejercicios estoy en el tema Mutator!!!