//Calculte Dog Age

var DAPY = 32;   //Given: Dogs age in people age
var DADY = DAPY*7;   //Calculate the Variable "DAPY" by 7 to define dogs age in "Dog Years"
console.log("Sparky is "+ DAPY +" human years old which is "+DADY +" in dog years."); // Print a report of both ages with explination

//Slice of Pie Part 1

//Given Items

var pizzas = 20; //Represents total number of pizzas ordered
var inclSlice = (pizzas*8);  //Calculate total number of slices in the order
var screamingBaby = 3; // Number of guests at the party

var result = (inclSlice/screamingBaby); //devide the number of slices evenly among the number of guests
console.log("Each person ate "+result+" slices of pizza at the party.");   //Display the number of slices each guest may eat

//Slice of Pie Part 2

var sparky =(inclSlice%screamingBaby); //Calculates the remainder left after dividing the 1st variable by the second variable
console.log ("Sparky got "+sparky+" slices of pizza.");   //Prints the value to the console log

//Average shopping bill

var weeksBills = [140, 220, 1254, 23, 130]; //List of grocery bills month at a time for the previous 5 months
var total = weeksBills[0]+weeksBills[1]+weeksBills[2]+weeksBills[3]+weeksBills[4]; //Add all bills to single total
var average = (total/5); //Average bill of 5 months
console.log("You have spent a total of $"+ total+" on groceries over 5 weeks. That is an average of $"+average+" per week.");//Print Result