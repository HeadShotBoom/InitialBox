// This will generate creatures to populate our world.



//**************************Remove this when testing is complete
var arrayWithStatsPass=[];
arrayWithStatsPass[0]='Monster';
arrayWithStatsPass[1]='Plains';
//**************************Remove this when testing is complete
function makeCreature()
{
var playerOrMonster=arrayWithStatsPass[0];
if (playerOrMonster=='Player'){
    var stats=[];
    //armor=0, health=1, damage=2, %toHit=3, %toDodge=4, exp=5
    //starting armor value =0
    stats[0]=0;
    //starting health TBD
    stats[1]=20;
    //starting damage =1 (Punching)
    stats[2]=1;
    //starting %hit = 50%
    stats[3]=0.5;
    //starting %dodge = 1%
    stats[4]=0.01;
    ////starting experience =0
    stats[5]=0;
    // character name
    stats[6]='PlayerCharacterName';

}
if (playerOrMonster=='Monster'){
    var stats=[];
    switch(arrayWithStatsPass[1]){
        case "Swamp":
            //slimy sneaky slippery snake
            stats[0]=0;
            stats[1]=5;
            stats[2]=2;
            stats[3]=.2;
            stats[4]=.2;
            stats[5]=10;
            stats[6]='Slimy sneaky slippery snake';
            break;
        case "Plains":
            var dragonOrHorse =Math.random();
            if (dragonOrHorse<.02){
            //This case will be dragon
                stats[0]=50;
                stats[1]=105;
                stats[2]=10;
                stats[3]=.5;
                stats[4]=0;
                stats[5]=150;
                stats[6]='Fat Sad Dragon';
                break;
            }
            else {
            //this case makes a horse
                stats[0]=0;
                stats[1]=20;
                stats[2]=4;
                stats[3]=.1;
                stats[4]=.1;
                stats[5]=25;
                stats[6]='A left wing horse of a different color';
                break;
            }
    }

}return stats;}


var playerCharacter = makeCreature(arrayWithStatsPass);
console.log(playerCharacter[6]);
console.log(playerCharacter[0]);
console.log(playerCharacter[1]);
console.log(playerCharacter[2]);
console.log(playerCharacter[3]);
console.log(playerCharacter[4]);
console.log(playerCharacter[5]);
