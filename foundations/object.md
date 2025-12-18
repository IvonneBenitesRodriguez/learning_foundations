## Object:
An object in JavaScript is like an object in the real life.
It has its owns properties and characteristics.<br/> We can create an object
with the object initializer. <br/>
Example creating an object:<br/>
const object = { }<br/>
or <br/>
const object = { <br/>
    foo:"bar", <br/>
    age: 42, <br/>
    bax: {myProp: 12}, <br/>
};<br/><br/>
You may access an object using dot notation:<br/>
object.foo; //output : "bar" <br/>
You may access an object using []: <br/>
object["age"];//output: 42 <br/>
Some other examples:<br/>
object.bax.myProp;// Output : 12 <br/>
object.bax;//{myProp:12} <br/>


### Techniques for creating objects: <br/>
Using a constructor function for checking an account object:<br/>
Example: <br/>
the this keyword ties each function and property to an object instance.<br/>

function Checking(amount){ <br/>
    this.balance = amount; // property <br/>
    this.deposit = deposit;  // function <br/>
    this.withdraw = withdraw; //function<br/>
    this.toString = toString; //function<br/>
}<br/>
Now here the function definitions for the 
preceding declarations:<br/>
function deposit(amount){<br/>
    this.balance +=amount;<br/>
}<br/>
function withdraw(amount){ <br/>
    if(amount <= this.balance){<br/>
        this.balance -= amount; <br/>
    }<br/>
    if(amount > this.balance) {<br/>
        console.log("insuficient funds");<br/>
    }<br/>
}<br/><br/>
function toString() {<br/>
return "Balance: " + this.balance; <br/>
}<br/>
<br/>
#### Example: Defining and using the Checking Object <br/>

function Checking(amount) { <br/>
this.balance = amount;<br/>
this.deposit = deposit;<br/>
this.withdraw = withdraw;<br/>
this.toString = toString;<br/>
}<br/>
<br/>
function deposit(amount){<br/>
this.balance +=amount;<br/>
}<br/>
function withdraw(amount){<br/>
    if (amount <= this.balance){<br/>
        this.balance -= amount;<br/>
    }<br/>
    if (amount > this.balance){<br/>
        console.log("insuficient funds");<br/>
    }<br/>
}<br/>
function toString(){<br/>
    return "Balance: " + this.balance;<br/>
}<br/>
var account = new Checking(500);<br/>
account.deposit(1000);<br/>
console.log(account.toString());<br/>
account.withdraw(750);<br/>
console.log(account.toString());<br/>
account.withdraw(800);<br/>
console.log(account.toString());<br/>

### Creating object using the word "new":
Example:<br/><br/>
function Car (make, model, color){<br/>
    this.make=make;<br/>
    this.model=model;<br/>
    this.color=color;<br/>
}<br/><br/>
const car1 = new Car ("Chevrolet", <br/>
"Amazing124", "blue"); <br/>
console.log(car1.make); //"Chevrolet"<br/>

### The this keyword used in objects:
It refers to the object used and its usage.<br/>Using <strong>this</strong> keyword permits to be reused on different objects.<br/>
Inside of a function, the value of this depends on how the function is called.<br/>
For a regular function: not an arrow function, not a bound function, the value of this is the object that the function is accessed on. <br/>





