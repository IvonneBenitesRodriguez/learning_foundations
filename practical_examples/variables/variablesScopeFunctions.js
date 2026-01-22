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

//Example of how Variable Scope works:
let movie = "Lord of the Rings"; // this variable movie is declared in the global scope and it is assigned to the value Lord of the Rings
function starsWarsFan(){
    const movie = "Star Wars";//this variable is declared const but it exists only in the function scope
    return movie; // this effect is called "shadowing" the local variable hiddes the global variable
}// the local variable hiddes the global variable due to function context.
function marvelFan(){//this function does not declare a new variable using let or const
    movie = "The Avengers";//it directly modifies the global movie variable by assigning it the value "The Avengers"
    return movie;
}
//now lets log :
console.log(movie);//here we print the initial value of the global scope variable.
console.log(starsWarsFan()); // it prints Star Wars because we are working with the local variable leaving outside the global variable.
console.log(marvelFan());// the output is The Avengers because there is no local variable to shadow the global one, so we can change the name of the variable.
console.log(movie);//this prints the value of the global variable which was modified and the output is The Avengers.

//Second Example:
//To showcase how a variable affects the visibility and value of the variables within different parts of the code:

function blizzardFan(){
    const isFan = true;
    let phrase = 'warcraft';
    console.log('Before if: ' + phrase);
    if (isFan){
        let phrase = 'initial text';
        phrase = 'For the Horde!';
        console.log('Inside if: ' + phrase);
    }
    phrase = 'For the Alliance';
    console.log('After if: ' +  phrase);
}
console.log(blizzardFan());
