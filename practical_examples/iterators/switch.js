//switch
// it is better to use when you several decisions to make
// As always its time complexity depends of the other functions that are written with switch.
// putstr("Enter a month number: ");
// var monthNum = readline();
var monthNum;
var monthName;
switch(monthNum) {
    case "1": 
    monthName = "January";
    case "2":
        monthName = "February";
    case "3":
        monthName = "March";
    case "4":
        monthName ="April";
    case "5":
        monthName ="May";
    case "6":
        monthName="June";
    case "7":
        monthName="July";
    case "8":
        monthName="August";
    case "9":
        monthName="September";
    case "10":
        monthName="October";
    case "11":
        monthName="November";
    case "12":
        monthName="December";
        break;
        default:
        console.log("Bad input");    
}
// mdn example:
const discount = "Potatoes";
switch (discount) {
    case "Oranges":
        console.log("Oranges are a $0.59 a pound");
    case "Mangos":
    case "Potatoes":
        console.log("Mangos and Potatoes are $2.78 a pound");//expected output
        break;
        default:
        console.log(`sorry, we are out of ${discount}.`);
}
// my example:
const musicFavoriteCd = "Michael Jackson";
switch(musicFavoriteCd) {
    case "Beatles":
        console.log("Great album 1989");
    case "Bon Jovi":
        console.log("Live my life album");
    case "Cindy Lauper":
        console.log("Time after time album");
    case "Michael Jackson":
        console.log("Beat it"); // expected output
        break;
        default:
        console.log(`There are not available ${musicFavoriteCd}, sorry.`)
}
// other example:
const favoriteDestination = "Isparta";
switch(favoriteDestination) {
    case "Paris":
        console.log("Great city");
    case "Milan":
        console.log("Great place for shopping");
    case "Florence":
        console.log("Good place for culture and history");
    case "Istambul":
        console.log("Exotic place!");
    case "Egypt":
        console.log("Mystic place!");
    case "Isparta":
        console.log("Rose city! my next birthday destination!!");
    break;
    default:
    console.log("I have reviewed lots of cities!");
}
//other example:
const newLanguages = "mandarin";
switch(newLanguages) {
    case "spanish":
        console.log("exotic language!");
    case "mandarin":
        console.log("future language!");
        break;
        default:
            console.log("I do consider few options to learn!");
}
// Another example:
function getLetter(s) {
    let letter;
    // Write your code here
    let firstChar = s.charAt(0)
    switch(firstChar){
       case 'a':
       case 'e':
       case 'i':
       case 'o':
       case 'u':
     letter = "A";
     break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
       letter = "B";
       break;
       case 'h':
       case 'j':
       case 'k':
       case 'l':
       case m:
       letter = "C";
       break;
       case 'n':
       case 'p':
       case 'q':
       case 'r':
       case 's': 
       case 't': 
       case 'v':
       case 'w':
       case 'x':
       case 'y':
       case 'z':
       letter = "D";
        break;
        default: 
        console.log("Difficult to find the letter!");
    }
    return letter;
}

