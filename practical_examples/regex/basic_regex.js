//i perform case-insensitive matching
//Examples:
const regex1 =/admin/;
console.log(regex1.test("Admin"));
console.log(regex1.test("admin"));
console.log(regex1.test("ADmIn"));
//But once you use i the output is different:
const regex2 = /admin/i;
console.log(regex2.test("ADmIn"));
console.log(regex2.test("AdMin"));
console.log(regex2.test("ADMIN"));
console.log(regex2.test("house"));
// g perform a global match (find all matches rather than stopping at first match)
// Example without using g
const text = "cat cat cat dog cat";
const regex3 = /cat/;
const result = text.match(regex3);
console.log(result);
//Example using g
const text1 ="cat cat cat dog cat";
const regex4 = /cat/g;
// using match to find all the coincidences:
const result2 = text1.match(regex4);
console.log(result2);
//using m of multi-line matching:
// ^ inicio del string completo o inicio de cada linea
// $ fin del string completo o fin de cada linea
//Example without flag m
const text2 = "Line 1\nLine 2\nLine 3";
console.log(/^Line 2/.test(text2));
// Now with test this exercise using the flag m
console.log(/^Line 2/m.test(text2));
console.log(/^Line 3/m.test(text2));
console.log(/^Line 1/m.test(text2));
// now again without m flag in this exercise which has multi-lines:
console.log(/^Line 2/.test(text2));
