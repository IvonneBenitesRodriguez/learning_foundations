// For in Loop
//This loop is especially useful when working with dictionaries and sets.
//Examples of For..in related to cybersecurity Guessing an user password using for..in loop:
let userPasswords = {
    "admin":"lomosaltado", 
    "ivonne": "isparta2027",
    "olivia": "booksvisits"
};

let passwordDictionary = ["lomosaltado", "123456", "admin", "test", "isparta2027", "booksvisits"];

//Using for..in and try password against each user:<br/>


for (let i in passwordDictionary){
    let attempt = passwordDictionary[i];
    if( attempt === userPasswords["olivia"]){
        console.log(`Password cracked: ${attempt}`);
        break;
    } else {
        console.log(`Failed ${attempt}`);
    }
}
console.log("Attack finished!");

// Another example:
let userPasswords1 = {
    "admin": "lucasEusebio",
    "nicola": "dancingmoon",
    "raquel": "excel_learning_top"
};

let passwordDictionary1 = ["top123456", "houseofdolls", "lucasEusebio", "dancingmoon", "excel_learning_top"];

for (let i in passwordDictionary1){
    let attempt1 = passwordDictionary1[i];
    if(attempt1 === userPasswords1["admin"]){
        console.log(`Password cracked : ${attempt1}`);
        break;
    } else {
        console.log(`Failed ${attempt1}`);
    }
}
console.log("Attack Finished!");