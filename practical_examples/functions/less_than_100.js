// Less than 100 exercise
// Given two numbers, return true, if the sum of both numbers is less
// than 100, otherwise return false.
// always use the return keyword

//Solution:
function lessThan100 (a,b){
if ((a + b) < 100) {
    return true;
    } else{
    return false;
    }
}

console.log(lessThan100(10,20));
console.log(lessThan100(100,200));