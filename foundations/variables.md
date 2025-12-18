### Variables store a value
It need to be declared before its use.
let x = 42;<br/>
let x is a declaration of the variable x
= 42 is the initializer <br/>
sometimes in let variables is not necessary to write the initializer.<br/>
If the variable is not assigned to an initializer then it is assigned
to an undefined value. <br/><br/>
By opposite, const declarations always need an initializer.<br/>
Example of Local Scope and Global Scope:<br/>
if (Math.random() > 0.5) {<br/>
  const y = 5;<br/>
}<br/>
console.log(y); // ReferenceError: y is not defined <br/>
Here we are getting the result of Reference Error y is not defined
because the variable  Y is not available outside the function 
because we declared at first inside the function. <br/>
Then it is <strong>Local scope</strong>.<br/>

<strong>Const and Let</strong> are block scope variables.<br/>
<strong>Const</strong> only prevent reassignments <strong>but not mutations.</strong><br/>

#### Hoisting:
Type 3 Hoisting behavior : Let, Const and Class.<br/>

what is considered a behavior of Hoisting?<br/>
Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")<br/>

Some specifications about variables:<br/>
<strong>var</strong><br/>
Declares a variable, optionally initializing it to a value.<br/>

<strong>let</strong><br/>
Declares a block-scoped, local variable, optionally initializing it to a value.

<strong>const</strong><br/>
Declares a block-scoped, read-only named constant.