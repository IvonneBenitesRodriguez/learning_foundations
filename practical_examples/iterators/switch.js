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