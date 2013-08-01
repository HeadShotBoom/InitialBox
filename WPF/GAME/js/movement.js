makeGrid();
function fillWithMonsters(){
    var A=0;
    var B=0;

    for(h=0;h<10;h++){
        var creatureThisTime=makeCreature();
        A++;
        for(i=0;i<10;i++){
            world[1][A][B]=creatureThisTime[7];
            B++;
        }

    }}
fillWithMonsters();


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
    console.log(world[1][Y][X]);
}
alert("You have ended the game.");



