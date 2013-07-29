//Swamp = 20%
//Caves = 20%
//Volcano = 50%
//Acid = 10%

var world=[[],[]];
function landType(){
    var counter = Math.floor(100*Math.random()+1);
    if (counter<=20){
        var theLand="Swamp";
    }else if (counter<= 40 && counter>20){
    var theLand="Caves";
    }else if (counter<=90 && counter>40){
        var theLand="Volcano";
    }else if (counter<=100 && counter>90){
        var theLand="Acid";
    }

return (theLand);

}



function makeGrid(){
    var counter = Math.floor(100* Math.random());
    var dirtType ='';
    for(h=0;h<1;h++){

        for(i=0;i<10;i++){
            world[h][i]=[];
        }
    }

    for(i=0;i<10;i++){
        for(j=0;j<10;j++){
            world[0][i][j]=landType();

        }
    }


    world[0][0][0]='START';
    world[0][9][9]='FINISH';
    for(i=0;i<10;i++){
    console.log(world[0][i]);
}

}
makeGrid();

/*
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
    if (Y==3){Y=0;}
    if (Y<0){Y=2;}
    if (X==3){X=0;}
    if (X<0){X=2;}
var positionNow = world[0][Y][X];
    console.log(positionNow);
}
alert("You have ended the game.");
 */