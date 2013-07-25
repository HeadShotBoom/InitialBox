//Celsius to Fahrenheit converter
/*
Convert a temperature to either degrees Celsius or degrees Fahrenheit depending on what the user has entered. If the user puts a “C” for the unit, the calculator should convert to Celsius. If the user puts “F” for the unit, the calculator should convert to Fahrenheit.


    Given:
Degrees (in F or C)
Unit (a string holding an “F” or a “C”)
Result:
    “The temperature is X degrees Celsius.” Or “The temperature is X degrees Fahrenheit.”
Data Sets to Test: (Note that data sets are not the only numbers that should work with your code.)
32F is 0C
100C is 212F
90F is 32.22C

// I will build a system of conditions and functions that is prompt driven to convert temperature.
function cTOf(){
    var currentTemp =prompt("What is the temperature in degrees Celcius? (Please type only numbers.)");
    var newTemp= (currentTemp*1.8+32);
    console.log(currentTemp+" degrees Celsius is equal to "+newTemp+" degrees Fahrenheit.");
}
function fTOc(){
    var currentTemp =prompt("What is the temperature in degrees Fahrenheit? (Please type only numbers.)");
    var newTemp= (currentTemp-32)*0.5555555;
    console.log(currentTemp+" degrees Fahrenheit is equal to "+newTemp+" degrees Celsius.");
}

function convertType(){
    var type =prompt("Would you like to convert TO Fahrenheit or Celsius? (Please enter C or F.)");
    if (type.toUpperCase()=="C"){
        fTOc();
    }else cTOf();

}
convertType() ;
 */

//Grade Letter Calculator

/*A student earns a number grade at the conclusion of a course at Full Sail.  Determine the appropriate letter grade for that number using conditional statements.

    Assume grades are whole numbers that never go below 0 or above 100.
Use the FullSail Grade scale.
    There should be only one print out to the console.

    Given:
Grade (in percent)
Result To Print Out:
    “You have a X%, which means you have earned a(n) X in the class!”  */

//I will build a function that contains a prompt to enter a numerical grade. This value will be compared to a series of If and else if statements that will print the appropriate grade






function gradeMaker(){
    var grade=prompt("Enter the numerical value you recieved as a grade in this class.");


if(grade<=100 && grade>=95){
    var letterGrade="A+";
    }else if(grade<=94 && grade>=90){
    var letterGrade="A";
}else if(grade>=85 && grade<=89){
    var letterGrade="B+";
}else if(grade>=80 && grade<=84){
    var letterGrade="B";
}else if(grade>=79 && grade<=76){
    var letterGrade="C+";
}else if(grade>=73 && grade<=75){
    var letterGrade="C";
}else if(grade>=70 && grade<=72){
    var letterGrade="D";
}else if(grade>=0 && grade<=69){
    var letterGrade="F";}
    var statement= ("You have a "+grade+"% which means you have earned a(n) "+letterGrade+" in this class!");
    console.log(statement)
}
gradeMaker();