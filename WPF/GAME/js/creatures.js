// This will generate creatures to populate our world.

//This function allows me to adjust the starting value of any stat dynamically
function varyValue(N,M){
    var rangeOfvariance = (Math.floor(Math.random()*100)+1)/100;
    var posOrNeg = Math.floor((Math.random()*10)+1);
    if (posOrNeg%2==0){
        var variance = (N*(M/100)*rangeOfvariance)+N;
    }else {var variance = ((N*(M/100)*rangeOfvariance)*-1)+N;}
    return Math.floor(variance);
}
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
    stats[0]=0;//starting armor value =0
    stats[1]=20;//starting health TBD
    stats[2]=1; //starting damage =1 (Punching)
    stats[3]=0.5;//starting %hit = 50%
    stats[4]=0.01;//starting %dodge = 1%
    stats[5]=1;////starting experience =0
    stats[6]='PlayerCharacterName'; // character name

}
if (playerOrMonster=='Monster'){
    var stats=[];
    switch(arrayWithStatsPass[1]){
        case "Swamp":
            var animalTypeSwamp =Math.random();
            if (animalTypeSwamp<.1){
            //Slimy sneaky slippery snake
            stats[0]=0;//starting armor value =0
            stats[1]=5;//starting health
            stats[2]=2;//starting damage
            stats[3]=.2;//starting %hit
            stats[4]=.2;//starting %dodge
            stats[5]=1;//starting experience
            stats[6]='Slimy sneaky slippery snake';// character name
            break;
            }
            else if (animalTypeSwamp>=.1 && animalTypeSwamp<=.9){
            //Frog
            stats[0]=0;//starting armor value =0
            stats[1]=2;//starting health
            stats[2]=2; //starting damage
            stats[3]=.2;//starting %hit
            stats[4]=.05;//starting %dodge
            stats[5]=1;//starting experience
            stats[6]='Sexy Toad';// character name
            break;
            }
            else {
            //Death Leach
            stats[0]=0;//starting armor value =0
            stats[1]=5;//starting health
            stats[2]=.1;//starting damage
            stats[3]=.9;//starting %hit
            stats[4]=.991;//starting %dodge
            stats[5]=1;//starting experience
            stats[6]='Death Leach'; // character name
            break;
            }

        case "Plains":
            var dragonOrHorse =Math.random();
            if (dragonOrHorse<.01){
            //This case will be dragon
                stats[0]=50;//starting armor value =0
                stats[1]=1000;//starting health
                stats[2]=10; //starting damage
                stats[3]=.5; //starting %hit
                stats[4]=0;//starting %dodge
                stats[5]=1;//starting experience
                stats[6]='Fat Sad Dragon';// character name
                break;
            }
            else {
            //this case makes a horse
                stats[0]=0;//starting armor value =0
                stats[1]=20;//starting health
                stats[2]=4;  //starting damage
                stats[3]=.1;//starting %hit
                stats[4]=.1;//starting %dodge
                stats[5]=1; //starting experience
                stats[6]='A left wing horse of a different color';// character name
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



