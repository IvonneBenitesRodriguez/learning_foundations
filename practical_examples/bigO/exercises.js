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
// Se aplica la regla del coeficiente y se elimina el 20
// BigO Notation es O(n²)
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
// first loop = O(n)
// second loop = O(n²)
// third loop = O(1)
// fourth = O(1)
// (O(n) + O(n²) + O(1) + O (1))= (O(n) + O(n²) + 2(O(1))) = O(n) + O(n²) + O(1) = O(1)
