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
    for(h=0;h<2;h++){

        for(i=0;i<10;i++){
            world[h][i]=[];
        }
    }

    for(i=0;i<10;i++){
        for(j=0;j<10;j++){
            world[0][i][j]=landType();
            world[1][i][j]=makeCreature();
        }
    }

    world[1][0][0]="Starting Point";
    world[1][9][9]="Exit";
    world[0][0][0]='START';
    world[0][9][9]='FINISH';

    for(i=0;i<10;i++){
    console.log(world[0][i]);

}

}
