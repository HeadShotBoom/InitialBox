function varyValue(N,M){
    var rangeOfvariance = (Math.floor(Math.random()*100)+1)/100;
    var posOrNeg = Math.floor((Math.random()*10)+1);
    if (posOrNeg%2==0){
        var variance = (N*(M/100)*rangeOfvariance)+N;
    }else { variance = ((N*(M/100)*rangeOfvariance)*-1)+N;}
    return Math.floor(variance);
}

var intStuff2 =[['Armor','Shield','Sword'],['Diamond','Wood','Steel', 'Glass'],['Elven','Nord','Dwarven','Made In Japan','HMS']];

function makeStuff(intStuff){
    var itemType =0;
    var material=1;
    var racial=2;
    var lenItem=intStuff[itemType].length;
    var lenMat=intStuff[material].length;
    var lenRace=intStuff[racial].length;

    var itemTypeName = Math.floor(Math.random()*lenItem);
    var materialName= Math.floor(Math.random()*lenMat);
    var racialComponentName= Math.floor(Math.random()*lenRace);

    var completeName = intStuff[racial][racialComponentName]+' '+intStuff[material][materialName]+' '+intStuff[itemType][itemTypeName];
    return (completeName);
}

function makeHorde (character){
    var hordeSize=Math.ceil(Math.random()*character);
        return hordeSize;
    }


function designCreature(Q){
var creatureBaseStatProto = [];
//player=0, SSS=1, Sexy Toad=2, Death Leach=3, Horse=4,
creatureBaseStatProto[0]=[0,varyValue(20,50),1,.5,.01,0,'Player',[1,1],makeStuff(intStuff2)];
creatureBaseStatProto[1]=[0,varyValue(5,75),2,.2,.2,1,'Slimy Slippery Snake',[1,3],makeStuff(intStuff2)];
creatureBaseStatProto[2]=[0,varyValue(5,20),2,.2,.05,1,'Sexy Toad',[1,5],makeStuff(intStuff2)];
creatureBaseStatProto[3]=[0,5,.1,.9,.991,1, 'Death Leach',[1,1],makeStuff(intStuff2)];
creatureBaseStatProto[4]=[50,varyValue(1000,50),10,.5,0,1,'Dragon', makeHorde(10),makeStuff(intStuff2)];
//var player =0;
//var sss =1;
//var sexyToad=2;
//var deathLeach=3;
//var dragon=4;
//var armor=0;
//var health=1;
//var damage=2;
//var startHit=3;
//var startDodge=4;
//var startXp=5;
//var title=6;
//var horde=7;
//var booty=8
    return creatureBaseStatProto[Q];
}




//This function allows me to adjust the starting value of any stat dynamically




//**************************Remove this when testing is complete
var arrayWithStatsPass=[];
var arrayWithStatsCrap = arrayWithStatsPass;
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
    stats[7]="";//Armor
    stats[8]="";//Weapon
    stats[9]="";//Treasure
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
            stats[7]="";//Armor
            stats[8]="";//Weapon
            stats[9]="";//Treasure
            stats[10]=3;//horde Size
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
            stats[7]="";//Armor
            stats[8]="";//Weapon
            stats[9]="";//Treasure
            stats[10]=10;//horde Size
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
            stats[7]="";//Armor
            stats[8]="";//Weapon
            stats[9]="";//Treasure
            stats[10]=2;//horde Size
            break;
            }

        case "Plains":
            var dragonOrHorse =Math.random();
            if (dragonOrHorse<.999){
            //This case will be dragon
                var monsterNow = designCreature(4);
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
                stats[7]="";//Armor
                stats[8]="";//Weapon
                stats[9]="";//Treasure
                stats[10]=4;//horde Size
                break;
            }
    }

}return monsterNow;}


var makeIt = makeCreature();
console.log(makeIt);