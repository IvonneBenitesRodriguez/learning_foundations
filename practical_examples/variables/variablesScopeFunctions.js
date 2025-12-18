//Variable Scope in Functions
//The Scope of a Function means from where a variable can be accessed.
//  it is accessed outside the function before the function or after the function
// Then the scope is Global:
function showScope(){
    return scope;
}
var scope ="global";
console.log(scope); // global
console.log(showScope());  //global

//Now we define a second scope within the function showScope()
function showScope(){
    var scope = "local"; /// here is defined the scope with the word local
    return scope;
}
var scope = "global";
console.log(scope); // global
console.log(showScope()); //local
//important : if we use the keyword var it is automatically considered global
// no matter if the var is placed inside the function itself.
// Because the var variable has automatically Global Scope.
//JavaScript has function scope. It does not have a block scope.