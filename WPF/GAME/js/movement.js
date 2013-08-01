makeGrid();

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
    var positionNow = world[0][Y][X];
    var latNow = X;
    var longNow = Y;
    console.log("You are now at grid position ("+X+") ("+Y+").   "+world[0][Y][X]);
    console.log("You are in the presence of a "+world[1][Y][X][6]);

}
alert("You have ended the game.");



