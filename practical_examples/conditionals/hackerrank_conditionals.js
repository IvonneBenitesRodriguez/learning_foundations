//Objective
//In this challenge, we learn about if-else statements. Check out the attached tutorial for more details.
//Task
//Complete the getGrade(score) function in the editor. It has one parameter: an integer, , denoting the number of points Julia earned on an exam. It must return the letter corresponding to her  according to the following rules:
//If , then .
// If 25 < score <= 30 , then grade = A.
// If 20 < score <= 25 , then grade = B.
// If 15 < score <= 20, then grade = C.
// If 10 < score <= 15, then grade = D.
// If 5 < score <= 10, then grade = E.
// If 0 <= score <= 5, then grade = F.

//Constraints:  0 <= score <= 30

//Output Format

//The function must return the value of grade (i.e., the letter grade) that Julia earned on the exam.
//Solution:
function getGrade(score) {
    let grade;
    // Write your code here
    if(0 <= score && score <= 5){
        grade ="F";
    } else if( 5 < score && score <= 10){
        grade = "E";
    } else if ( 10 < score && score <= 15){
        grade = "D";
    } else if (15 < score && score <= 20){
        grade = "C";
    }else if(20 < score && score <= 25){
        grade = "B";
    }else if (25 < score && score <= 30){
        grade = "A";
    }
    return grade;
}

