// Find the Maximum Edge of a Triangle:
// Write a function that creates the maximum range of a triangle third edge
// where all the side lengths are integers
// always use the return keyword
//Notes
// (side1 + side2) - 1 = maximum range of third edge.

//Solution:
function nextEdge(side1, side2){
    return (side1 + side2) - 1;
}
console.log(nextEdge(10, 8));