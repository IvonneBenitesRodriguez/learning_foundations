// Example:
function factorizingPrimes(n){
    const factores = [];
    // divide / 2 if it is possible
    while (n % 2 === 0){
        factores.push(2);
        n = n/2;
    }
    for (let i=3; i < Math.sqrt(n); i +=2){
        while( n % i === 0){
            factores.push(i);
            n = n/i;
        }
    } 
    if(n > 2){
        factores.push(n);
    } 
    return factores;
    
}
console.log("12 =", factorizingPrimes(12));