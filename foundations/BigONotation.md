## Big O Notation:
#### In Big O notation there are 4 important Rules:
<strong>Coeficient Rule:</strong><br/>
if the numbers that belong to the input are bigger, then the constant number does not matter, it means we can eliminate it. With high inputs, the constant becomes negligible.<br/>
<br/> Example:<br/>
If a function is 5(n) and the other function is f(n),the constant number 5 will disappear and then both functions will have an <strong>O(n) linear time </strong> that means <strong>an execution time that grows linear with n.</strong><br/><br/>
<strong>Sum Rule:</strong><br/>
The Sum Rule is about a master algorithm which contains 2 algorithms inside of it. 
<strong>These two algorithms are sequential.</stromg>
Therefore, here comes the addition once both algorithms are detected and it is confirm that both algorithms are sequential.
Then, the coefficient rule comes at the end to eliminate any constant that is present.
Finally, you will have to keep only the most dominant Time complexity.<br/><br/>
<strong>Multiply Rule:</strong><br/>
When you have a nested loop, you multiply the iterations of each loop.<br/>
Example <br/><br/>
function multiply(arr) {  // External Loop <br/><br/>
for (let i = 0; i < arr.length; i++)
{ // n times <br/><br/>
        for (let j = 0; j < arr.length; j++) {  // n times and internal loop <br/>
            console.log(arr[i], arr[j]);<br/>
        }
    }
    
    // Total: O(n) × O(n) = O(n²)
}<br/><br/>

<strong>Polynomial Rule:</strong><br/>
In a polynomial only matters the term with the highest exponent of n. Because it dominates totally to the others.<br/>