### Arrays
The most common data structure in computer programming.<br/>
They are very efficient and good choices for <strong>data storage purposes</strong>.<br/>
It is a specialized type of JS object with indices being property names that
can be integers used to represent offsets.<br/>
Arrays are very flexible.<br/><br/>
1.Creating an array:<br/> 
Using [ ] square brackets. Example:<br/>
var numbers  = [] ;<br/>
2.Verifying an array using length property:<br/>
numbers.length; <br/>
3.Another way to create an array declaring an array variable with set of elements 
inside the [] operator:<br/>
var numbers = [1,2,3,4,5]; <br/>
console.log(numbers.length); <br/>
4.<strong>Create an array calling the array constructor:</strong><br/>
var numbers = new Array(); <br/>
console.log(numbers.length); // output 0 <br/>
5.You can call the Array constructor with a set of elements as arguments to the constructor: <br/>
var numbers = new Array(1,2,3,4,5); <br/>
console.log(numbers.length);// output 5 <br/>
6.You can create an Array by calling the Array constructor with a single argument specifying the length of the array: <br/>
var numbers = new Array(10); <br/>
console.log(numbers.length); // output 10 <br/>
7.We can verify than an object is an array<br/> by calling the Array.isArray() function, like this: <br/>
var numbers = 3; <br/>
var arr = [7,4,1776]; <br/>
console.log(Array.isArray(number)); // <br/>output false<br/>
console.log(Array.isArray(arr)); // output <br/>
true<br/>

