### Searching for a Value:
<strong>indexOf()</strong> method looks if the argument passed to the function is found in the array.<br/>
if the argument is inside the array, it returns the position of the argument.<br/>
If the argument is not found it returns - 1 <br/><br/>
Example:<br/><br/>
var names = ["Terence", "Victoria", "Annie"];<br/>
var position = name.indexOf(name);<br/>
if (position >= 0) {<br/>
    console.log("Found" + name + "at position" + position);<br/>
} else {<br/>
    console.log(name + "not found in an array");<br/>
}<br/>
#### Note: if you have multiple elements in an array.<br/> The <strong>indexOf</strong> will always return the position of the first occurrence.<br/>

<strong>lastIndex()</strong> is another method that always will return the last occurrence found.<br/><br/>
Example:<br/>
var names = ["David", "Mike", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"]; <br/>
var name = "Mike"; <br/>
var firstPos = names.indexOf(name); <br/>
console.log("First found " + name + " at position " + firstPos); //position 1 <br/>
var lastPos = names.lastIndexOf(name); <br/>
console.log("Last found " + name + " at position " + lastPos); // position 5<br/>
