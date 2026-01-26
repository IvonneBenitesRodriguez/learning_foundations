### Includes
The includes method is an <strong>array method</strong>.
It confirms if an array contains a specific value in its entries. It returns true or false.<br/><br/>
### Syntax:
1) Array.prototype.includes( );<br/><br/>
2) includes(searchElement);<br/><br/>
3) includes(searchElement, fromIndex);<br/><br/>

The <strong>searchElement </strong> is the value to search for.<br/><br/>
<strong>fromIndex:</strong><br/>
It is zeroBased index since it is an array where the search is performed.<br/><br/>

<strong>The Return value:</strong> is a boolean value which is true, if the value is found inside the array

Example:<br/>
const animals = ["cat", "lion", "cow"]; <br/>
console.log(animals.includes("cat")); // output: cat <br/>
<br/>
<strong>Note:</strong>
Includes has O(n) linear complexity. It means that the execution time that this method uses <strong>depends on the size of the array.</strong>.<br/><br/>