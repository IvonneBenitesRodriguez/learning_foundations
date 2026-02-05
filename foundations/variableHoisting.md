## Variable Hoisting:<br/>
In relation to variable hoisting, I need to highlight that the only variable type which we can refer anywhere in its scope and even if its declaration is not reached yet is the variable <strong> var </strong>.<br/>
Although, in this case if the access to the variable is before it is declared, its value's output will be <strong>undefined</strong>.<br/>
The reason of it is that only its declaration and default initialization with undefined is hoisted, <strong> but not its value assignment.</strong><br/>
Examples:<br/>
console.log(x=== undefined); // true <br/>
var x = 3; <br/>

Continue with <strong> var variables </strong> as a good practice it is advisable to place all <strong> var statements </strong> in a function as <strong>near to the top of the function as possible.</strong><br/>
<br/>
In the case of <strong>Let and Const variables</strong>:<br/>
If we reference in the block the let or const variables before the variable declaration always results in a <strong> Reference Error </strong> because the variable is in <strong>Temporal Dead Zone</strong>.<br/><br/>
Examples: <br/><br/>
Referencing Const before:<br/>
console.log(x); // Reference Error <br/>
const x = 3;
<br/><br/>
Referencing Let before:<br/>
console.log(y); // Reference error <br/>
let y = 3;

