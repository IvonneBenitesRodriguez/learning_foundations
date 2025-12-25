//BigO Notation:
//1st Exercise
function  someFunction(n) {
    for(var i=0; i < n*1000; i++){
        for(var j=0; j < n*20; j++){
            console.log(i+j);
        }
    }
}
//Solution:
// 1000n
// 20n
// 1000n * 20n = 20000n²
// The coefficient rule is applied, then the 20000 is deleted.
// BigO Notation is O(n²)
//2nd Exercise:
function someFunction(n) {
for(var i=0; i < n; i++){
    for( var j=0; j < n; j++){
        for (var k=0; k < n; k++){
            for (var l=0; l < 10; l++){
                console.log(i+j+k+l);
            }
        }
    }
}
}
// first loop ^ second loop ^ third Loop = n ** 3 (function cubic)
// fourth loop is O (1)
//  console.log is O(1)
// then => n cubico * O(1) * O(1) => n cubico is the answer
//3rd Exercise:
function someFunction(n) {
    for(var i=0; i < 1000; i++){
        console.log("hi");
    }
}
// first loop is O(1)
// second lopp is O(1)
// the reply is O(1)
//Fourth Exercise:
function someFunction(n) {
    for(var i=0; i < n*10; i++) {
        console.log(n);
    }
}
//first loop : O (n)
// second loop : O(1)
// third loop : O(n)
//Fifth Exercise:
function someFunction(n) {
    for (var i=0; i < n; i*2){
        console.log(n);
    }
}
// this function has logaritmic complexity of (log2n).

//Sixth Exercise: 
function someFunction(n) {
    while(true){
        console.log(n);
    }
}
// This loop is infinite ( it has no end).