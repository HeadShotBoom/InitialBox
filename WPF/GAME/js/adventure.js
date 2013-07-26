//Swamp = 20%
//Caves = 20%
//Volcano = 50%
//Acid = 10%

var world=[];
function landType(){
    var counter = Math.floor(100*Math.random()+1);
    if (counter<=20){
        var theLand="Swamp";
    }else if (counter<= 40 && counter>20){
    var theLand="Caves";
    }else if (counter<=90 && counter>40){
        var theLand="Volcano";
    }else if (counter<=99 && counter>90){
        var theLand="Acid";
    }else if (counter=100){
        var theLand="FINISH"

}
return (theLand);

}



function makeGrid(){
    var counter = Math.floor(100* Math.random());
    var dirtType ='';
    for(i=0;i<3;i++){
        world[i]=[];
        for(j=0;j<3;j++){
        world[i][j]=landType();
        }console.log(world[i])}

}
makeGrid();

var Y = 0;
var X = 0;
var positionChange=''
var playGame = "ON"
while (playGame=='ON'){
    var positionChange=prompt("Which direction would you like to move? Use standard WASD movement keys... Type QUIT to end the game.");
if (positionChange.toUpperCase()=='W'&& Y>0){
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
var positionNow = world[Y][X];
    console.log(positionNow);
}
alert("You have ended the game.");
