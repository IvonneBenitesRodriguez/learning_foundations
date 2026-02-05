## Global Variables:
They are properties of a Global object.<br/>
In websites the global object is <strong> window</strong>. <br/>
We can read and set global variables using this syntax:<br/><br/>
<strong>window.variable.syntax</strong><br/><br/>
This is a generic pattern for accessing any global variable.<br/>
We can access any global variables declared in one window or frame from another window or frame by specifying only the <strong> window </strong> or <strong> frame </strong> name.<br/>
Example:<br/>
If a variable called phoneNumber is declared in a document, you can refer to this variable from an iframe as:<br/><br/>
<strong>parent.phoneNumber</strong><br/>
<br/>
These are more examples about how to access Global Properties:<br/><br/>
window.phoneNumber<br/>
window.userName<br/>
window.customData<br/><br/>
But since I was reviewing some security concepts, I read about this specific instance of the <strong> window.variable pattern named: </strong><br/>
<strong> window.location.hash </strong><br/><br/>
location is a global object and hash is its property.<br/><br/>
This command is dangerous because it is user-controllable via URL.<br/><br/>
<strong> For Pentesting: </strong><br/>
It is good to know :<br/>
window.phoneNumber = "1234"; // we are creating a Global variable<br/>
<strong>parent.phoneNumber</strong> // we are accessing from iframe<br/>
<strong>window.location.hash </strong>// user controls this via URL <br/>
window.location.search // user controls this via <strong> ?param=value </strong><br/>
<strong>window.name</strong> // user can set this <strong> also exploitable </strong><br/>
<br/>
Therefore, any <strong> window.*</strong> that contains user input is a <strong>potential XSS vector if improperly handled.</strong><br/>
 
