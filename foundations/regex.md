### Regular Expressions "regex":
Regex are important because they check the validity of user input in JavaScript. An example of it, is that Regex validate if they are numeric characters.<br/>
These are a set of characters that define a search pattern.<br/>
i => perform case-insensitive matching<br/>
g => perform a global match(<strong>>find all matches rather than stopping at the first match.</strong>).<br/> 
m => perform multiline matching.<br/>
Regex has 2 functions: <br/>
search( ): Tests for matches in a string, and returns the index of the match.<br/>
match( ): Tests for matches and returns all the matches.<br/>
exec( ): Tests for matches in a string. This returns the first match.<br/>
test( ): Tests for matches in a string. This returns true or false.<br/>
<br/>
<strong>Basic Regex</strong>:<br/><br/>
^ => this is the start of a line or a string.<br/>
\d => finds any digit.<br/>
[abc] => finds any characters specified in the brakets.<br/>
[^abc] => finds any characters not in the brakets.<br/>
[0-9] => finds any digit specified in the brakets.<br/>
[^0-9] => finds any digit not specified in the brakets.<br/>
(x|y) => finds any of the alternatives specified.<br/>
<br/><br/>
<strong>Commonly used Regex:</strong><br/>
Any numeric characters <br/>
<strong>/\d+/;</strong><br/><br/>
Example<br/>
var reg = /\d+/;
reg.test("123");//true<br/>