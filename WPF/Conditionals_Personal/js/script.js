// Daniel Carroll, 25 July, Conditionals Assignment

//I Will create a function that will determine what activity I can afford this weekend.

//I will name activities and their associated cost.
var act1 = "Go to the movies";
var act1cost = 50;
var act2 = "Go golfing";
var act2cost = 100;
var act3 = "Get Married";
var act3cost = 50000;

// Name the function
function partyTime(){
    var goOut =prompt("Would you like to go out this weekend? (Please enter Y or N)");
    var cash =prompt("How much money do you have in your checking?");
    var buffer =prompt("What is the minimum you will let your checking account reach?");
    var income =prompt("What is your weekly net income after bills?");
    if (goOut.toUpperCase()==YES || goOut.toUpperCase()==Y){
        prompt("Lets see what you can afford to do.");
        if (cash-buffer+income>=act3cost){
            console.log("You can easily afford to "+act3+" so you better go out and pay for you and all of your friends to "+act1+" and "+act2+" so you dont have to pay for a wedding.");
        }else if (cash-buffer+income>=act1cost && cash-buffer+income<=act3cost){
            console.log("You can afford to "+act1+" or "+act2+ " so have fun!");
        }else if (cash-buffer+income>=act1cost && cash-buffer+income<=act2cost){
            console.log("You have enough money to "+ act1+" have fun!");
        }else if (cash-buffer+income<act1cost){
            console.log("You cannot afford to go out this weekend.");
        }
    }
    else prompt("Thats good, save your money!");

}
  partyTime();