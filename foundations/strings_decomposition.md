### Strings Decomposition:
Once we apply a method named .split( ) to our strings, it automatically convert it to an array of substrings.<br/><br/>
Example<br/><br/>
var test1 = 'chicken, noodle, salt, carrot'; // this is an string <br/>
test1.split(","); // ["chicken", "noodle", "salt", "carrot"]; <br/><br/>
But if we want to pass an empty separator, it will create an array with all the characters of the string.<br/><br/>
Example:<br/>
var test2 = "brot";<br/>
tes2.split( ); // ["b", "r","o", "t"];<br/>
This is very convenient once we want to iterate through all the characters.<br/> 

