### == vs === 
In JavaScript, we have these two signs, one is equality => == <br/>
which means equality but only for the value.
Conversely, the other sign is strict equality which measures the equality for the value and for the type.<br/>
<br/>
### Note: In the case of Objects<br/>
Please do not use the == operator to verify if two objects are true.<br/>
The reason for it, is that it won't ever evaluate to true.<br/>
Despite that these two objects have the same properties and values, they are not equal because they have different addresses in memory.<br/>
Solution: <br/>
For each project is better to use <strong>lodash</strong> and download it. You will be using its function named <strong>isEqual</strong><br/> 
#### Note:<br/>
Please remember that objects cannot be compare using == or === operators, you have to use lodash or underscore for an automate comparison. <br/>
Or you can write your own isEquivalent( ) function for comparing each property manually. <br/>
These == or === operators can only compare strings, numbers, or booleans.<br/>