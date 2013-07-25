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
90F is 32.22C  */

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
/*



var convertType =prompt("What temp type are you converting TO? F or C (Please press F or C)");

if (convertType=="C"){
    fTOc
} */