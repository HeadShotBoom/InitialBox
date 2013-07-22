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
var positionChange=prompt("Which direction would you like to move? Use N S E or W to Indicate North South East or West");
if (positionChange.toUpperCase()=='N'&& Y>0){
    Y--;
}else if (positionChange.toUpperCase()=='S'){
    Y++;
}else if (positionChange.toUpperCase()=='E'){
    X++;
}else if (positionChange.toUpperCase()=='W'){
    X--;
}else {prompt("You have made a mistake and it has cost you your progress. Press Enter");
    location.reload();}

var positionNow = world[Y][X];

console.log(positionNow);
