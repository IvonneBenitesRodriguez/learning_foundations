//Ahora tengo un array con elementos duplicados,
// puedo remover esos elementos usando metodo new Set
let numeros = [1,2,3,4,5,5,6,6,7,7,8,8,9,10,11,2,3,1,4,4,5,6];
let numerosSinDuplicados = [...new Set(numeros)];
console.log(numerosSinDuplicados);
//otro ejemplo:
let ataques = ["malware", "DoS", "phishing", "injections", "ramsomware", "DDoS","malware","injections"];
let ataquesVersion = [...new Set(ataques)];
console.log(ataquesVersion);
//otro ejemplo de newSet
const payTools = ["Acunetix", "IbmAppScan", "Burp Suite Pro", "Nessus Pro", "Acunetix", "Nessus Pro"];
const payToolsVersion = [...new Set(payTools)];
console.log(payToolsVersion);
// Remove Duplicates items of an array using new Set method
let singers = ["Maria Carey", "Adele", "Celine Dion", "Aretha Franklin", "Celine Dion"];
const solution = [... new Set(singers)];
console.log(solution);
//Example
let colors = ["pink","blue","yellow","white","white","blue","orange", "light blue", "gray", "black", "brown", "brown"];
const uniqueColors = [...new Set(colors)];
console.log(uniqueColors);