makeGrid();
var lootBag = "";
var mrMoneyBag = 0;
var Y = 0;
var X = 0;

var positionChange='';
var playGame = "ON";
while (playGame=='ON'){
    if(world[0][Y][X]!=="START"){console.clear();}
    for(i=0;i<10;i++){
        console.log(world[0][i]);}
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
        Y=9;
        X=9;
    }
    if (Y>8&&Y!=9&&X==9){Y=0;}
    if (Y<0){Y=8;}
    if (X>8&&X!=9&&Y==9){X=0;}
    if (X<0){X=8;}
    console.log("You are now at "+world[0][Y][X]+"    Grid ("+Y+")("+X+")");
    console.log("You now have $"+mrMoneyBag+" in your account.");

    if (world[0][Y][X]!="START"&&world[0][Y][X]!="FINISH"){
    var killIt = prompt("You have encountered a "+world[1][Y][X][6]+".\n Would you like to kill it and absorb its loot?");
    if (killIt.toUpperCase()=='Y'||killIt.toUpperCase()=='YES'){
        mrMoneyBag=mrMoneyBag+world[1][Y][X][1];
    }else{console.log('Whimp!')}
    console.log("You are now at grid position ("+X+") ("+Y+").   "+world[0][Y][X]);
    if(world[0][Y][X]=="START"){
    console.log("Your back at the Start Point");
    }else if (world[1][Y][X]!=="EMPTY") {console.log("You just killed a "+world[1][Y][X][6]);}
    }
    else if (X==9 && Y==9){
        if (mrMoneyBag<1000){
            alert("You do not have enough money to exit! Back to the START!!!");
            Y=0;
            X=0;
        }else {
            var exitNow=prompt("You have reached the exit and can afford to leave, would you like to exit?");
            if (exitNow.toUpperCase()=="Y"|| exitNow.toUpperCase()=="YES"){
                alert("You were able to leave the game with $"+mrMoneyBag-1000+" in your pocket!");
                playGame="OFF";
                console.clear();
            }
        }
    } for(i=0;i<10;i++){
        console.log(world[0][i]);}
}
console.clear();

alert("You have ended the game.");



