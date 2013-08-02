makeGrid();
var lootBag = "";
var mrMoneyBag = 0;
var Y = 0;
var X = 0;

var positionChange='';
var playGame = "ON";
while (playGame=='ON'){
    var positionChange=prompt("Which direction would you like to move? Use standard WASD movement keys... Type QUIT to end the game.");
    if (positionChange.toUpperCase()=='W'){
        Y--;
    }else if (positionChange.toUpperCase()=='S'){
        Y++;
    }else if (positionChange.toUpperCase()=='D'){
        X++;
    }else if (positionChange.toUpperCase()=='A'){
        X--;
    }else if (positionChange.toUpperCase()=='QUIT'){
        playGame="OFF";}
    if (Y==10){Y=0;}
    if (Y<0){Y=9;}
    if (X==10){X=0;}
    if (X<0){X=9;}
    var killIt = prompt("You have encountered a "+world[1][Y][X][6]+".\n Would you like to kill it and absorb its loot?");
    if (killIt.toUpperCase()=='Y'||killIt.toUpperCase()=='YES'){
        mrMoneyBag=mrMoneyBag+world[1][Y][X][1];
    }else{console.log('Whimp!')}
    console.log("You are now at grid position ("+X+") ("+Y+").   "+world[0][Y][X]);
    if(world[0][Y][X]=="START"){
    console.log("Your back at the Start Point");
    }else if (world[1][Y][X]!=="EMPTY") {console.log("You are in the presence of a "+world[1][Y][X][6]);}
    console.log("You are now at "+world[0][Y][X]);
}
alert("You have ended the game.");
console.log(mrMoneyBag);


