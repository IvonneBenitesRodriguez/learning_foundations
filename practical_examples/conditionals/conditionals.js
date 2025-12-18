//conditionals
//only one if statement
var mid = 25;
var hight = 60;
var current = 16;
var low = 1;
var found = -1;
if ( current < mid){
    mid = (current - low)/2;
}
console.log(mid);

// if - else statement
var mid = 25;
var high = 60;
var current = 16;
var low = 1;
var found = -1;
if ( current < mid){
    mid = (current - low)/2;
} else {
    mid = (current + high)/2;
}

// if - else - if statement
var mid = 25;
var high = 60;
var current = 16;
var low = 1;
var found = -1;
if ( current < mid){
    mid = (current - low)/2;
} else if (current > mid) {
    mid = (current + high)/2;
} else {
    found = current;
}
// mi ejemplo : if else if statement:
var redTeam = 30;
var blueTeam = 10;
var  whiteTeam = 44;
var complianceTeam = 4;
var digitalForensicTeam = 2;
if( redTeam > whiteTeam){ // siempre colocar el conditional
blueTeam = (complianceTeam - digitalForensicTeam)/2;
} else if (redTeam < whiteTeam) {  // siempre colocar el conditional
    blueTeam = (complianceTeam + digitalForensicTeam)/2;
} else {
    blueTeam;
}
// otro ejemplo
var casaMiraflores = 583;
var casaJesusMaria = 323;
var casaLince = 245;
var casaMiami = 800;
var casaMichigan = 150;
var casaBerlin = 980;
if (casaLince + casaJesusMaria > casaMiraflores){
    console.log("vende esas casas");
}else if(casaMiami > casaBerlin) {
    console.log("No vendas casa de Berlin");
}else{
    console.log("vende casa de Michigan");
}

// Time complexity:
//if statement, if else statement o if else if statement 
// depende de la expresion a evaluar que lo acompagna 
//ejemplo:

const america = ["mexico", "argentina", "chile", "peru"];
const seleccion = [];
if ( america === "peru"){
    america.pop();
}else if( america === "mexico" || "argentina" || 
    "chile")
    {
        america.push("venezuela");
    }else {
        console.log("no hay resultados");
    }
console.log(seleccion);