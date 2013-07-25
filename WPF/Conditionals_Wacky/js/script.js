// Daniel Carroll, 25 July, Conditionals Assignment

// I will make a set of conditionals that hopefully will pull off something wacky.
//Informing the participant of what this site will do.
alert("You will be asked to enter 3 values over the next 3 boxes. I will then do a secret math problem on those numbers. If the answer is even we will make a triangle. If it is odd we will make a box.");
//making a variable that will become loathed when it is used
var statement = "Its time to waste some time!";
//keeping with the wacky concept I made this loop which will call the alert contained within a specific number of times defined in the for statement conditions
for(var i=0;i<3;i++){

    alert(statement);
}
//The following 3 items are prompts asking for and storing whole numbers.
var num1=prompt("Please enter any series of whole numbers you wish. ONLY USE NUMBERS!! This will be repeated 2 more times");
var num2=prompt("Please enter any series of whole numbers you wish. ONLY USE NUMBERS!!");
var num3=prompt("Please enter any series of whole numbers you wish. ONLY USE NUMBERS!!");
//These are shapes we will use later in this code.
var side = "_";
var up = "|";
var right = "/";
//this is the place where they are given the option to select the "Secret math problem" that will be used

var which = prompt("Please press either 1 or 2 to select a secret math problem to use.")
//this is the first secret math problem.
function mathProb1(){
    //the following is a variable defined by addition of various variables
    var total = num1-num2+num3+num3+num2+num1+num1+num1;
    //this generates an output of the function
    return total
}
// this is the second secret math problem
function mathProb2(){
    //the following is a variable defined by addition of various variables
    var total2 = num1*num2*num3+num1+num2+num3;
    //this generates an output of the function
    return total2
}


//This conditional checks the variable they entered and chooses a function to envoke based on that information.

if (which==1){
    //this generates a variable based on the result of calling the function
    var oneTotal = mathProb1();
    //this condition determines if the result of the math problem is an even number by checking if there is a remainder after dividing by 2
    if (oneTotal%2==0){
        //This prints a series of spaces and characters in console log to make a shape
        console.log(" "+side+side);
        console.log(up+"  "+right);
        console.log(up+right);
    }else{
        //This prints a series of spaces and characters in console log to make a shape
        console.log(" "+side);
        console.log(up+side+up);}
    //This determines if the character entered before is NOT a 1 or a 2 and reloads the entire website
}else if (which!=2 && which!=1){
    //this is an alert that informs you about wasted time
    alert("You just entered an invalid character and were about to waste some more time.");
    //This reloads the browser
    location.reload();
}else {
    //this generates a variable based on the result of calling the function
    var twoTotal =mathProb2();
    //See comments on identical code above to determine function
    if (twoTotal%2==0){
        console.log(" "+side+side);
        console.log(up+"  "+right);
        console.log(up+right);
    }else
    console.log(" "+side);
    console.log(up+side+up);
}





