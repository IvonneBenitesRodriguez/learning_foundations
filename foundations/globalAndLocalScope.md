### Global Scope 
In client-side JS : Generally it is the website inside which all the code is being executed.<br/>
Avoid the use of Global Scope.Because it can produce name collissions, difficult debugging, unexpected secondary effects,difficult testing, and memory leaks.<br/>
To prevent it please use:<br/>
Function Scope <br/>
Let and Const with Block Scope <br/>
Classes(ES6).<br/>
Modules (ES6).<br/>
Inmediately Invoked Function Expressions. <br/>
### Block Scope:
The scope created with a pair of curly braces.

Some examples:<br/>

function exampleFunction() {<br/>
  const x = "declared inside function"; 
  // <br/> x can only be used in exampleFunction<br/>
  console.log("Inside function");<br/>
  console.log(x);<br/>
}

### Note:
 Also JavaScript is defined as function scope which means that variable's value is visible within the function definition where the variable is declared and defined and within
any functions that are nested within that function.

If a variable is defined outside the function, it is a global scope variable.
Its value can be accessed by any part of a program, including functions.<br/>
console.log(x); // Causes error <br/>
