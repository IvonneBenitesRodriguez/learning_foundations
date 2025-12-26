// Using modulus % operator
function isPrimeNumber(n){
    if(n <= 1){
        return false;
    } else if(n === 2){
        return true;
    }else if(n % 2 === 0){
        return false;
    }
    for(let i=0; i <= Math.sqrt(n); i +=2){
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrimeNumber(7));
//Example of Cryptography - RSA
//Fist we need to generate RSA passwords:
//For it: we need to 2 big prime numbers:
p = 61;
q = 53;
//Then, we need to verify if these two numbers are prime:
if(!isPrimeNumber(p) || !isPrimeNumber(q)){
    throw new Error("!No prime numbers!");
}
//Then, calculate n
n = p * q === 3233;
