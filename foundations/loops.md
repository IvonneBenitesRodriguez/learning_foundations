### For in Loops:
It iterates a variable over the properties of an object. This loop is especially useful when working with dictionaries and sets.
Dictionarios and sets have relation with cybersecurity well perhaps a bit yes, since it reminded me to dictionary attack. The reality is that dictionaries in programming are related to dictionary attacks but both are used in a different way:<br/>
Dictionaries in programming are key-value pairs for storing data:<br/><br/>
Example:<br/>
let userPasswords = {
    "admin": "lomosaltado",
     "ivonne": "isparta2027",
};
<br/><br/>
By opposite Dictionary Attack is:<br/>
A text file containing common passwords.<br/>
Example:<br/>
password123<br/>
admin<br/>
123456<br/>
booksvisits<br/>

Example using for..in:<br/>

let userPasswords = {
    "admin"= "lomosaltado", 
    "ivonne"= "isparta2027",
    "olivia"= "booksvisits"
};

let passwordDictionary = ["lomosaltado", "123456", "admin", "test", "isparta2027", "booksvisits"];<br/><br/>

Using for..in and try password against each user:<br/>
for (let username in userPasswords){<br/>
console.log(`\nTrying passwords for user: ${username}`);<br/>
}

for (let i in passwordDictionary){<br/>
    let attempt = passwordDictionary[i];
    if( attempt === userPasswords[username]){
        console.log(`Password cracked for ${username}: ${attempt}`);
        break;
    } else {
        console.log(`Failed ${attempt}`);
    }
}
console.log("Attack finished!");