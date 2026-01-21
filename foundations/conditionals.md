### Conditionals, Ternaries and Switch Statements:<br/>
we can represent a conditional statement using also a ternary operator:<br/>
Example 1: <br/>
if (number === 1) {<br/>
    number--;<br/>
} else {<br/>
    number++;<br/>
}<br/><br/>
Example 2: <br/>
if ( city == "Lima"){<br/>
    console.log("That is the capital of Peru");<br/>
} else {<br/>
    console.log("Try again");<br/>
}<br/><br/>
<strong>Using a ternary operator:</strong><br/><br/>
Example 1<br/><br/>
number === 1 ? number-- : number++;<br/><br/>
Example 2<br/><br/>
city == "Lima" ? "that is the capital of Peru" : "Try again";<br/><br/>
<strong>Note</strong>:<br/>
Ternary Operators are used to evaluate to a value, whereas the if-statement is only an imperative statement. If statements can be used directly within another expression, assign its result to a variable, or use its an argument in a function call.<br/>

<strong>Switch Statements</strong><br/><br/>
It work perfectly if we have multiple conditions. It evaluates an expression and matches its value against several cases. If a match is found, the code associated with that case is executed.<br/> <br/>
Example<br/><br/>
switch (month) {<br/>
    case 1:<br/>
    console.log('January');<br/>
    break;<br/>
    case 2: <br/>
    console.log('February'); <br/>
    break; <br/>
    case 3: <br/>
    console.log('March'); <br/>
    break;<br/>
    default: <br/>
    console.log('Month is not January, February, or March')<br/>
}<br/>