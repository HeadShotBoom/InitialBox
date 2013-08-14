// Script

//Define player variables IAW FSO directions.

fighters = [playerOne = {name:"kabal",health:100,damage:50},playerTwo = {name:"kratos",health:100,damage:50}];

//store round number in a variable
var round = 0;


function winnerCheck(){
    var result="no winner";
    if (fighters[0].health<1 && fighters[1].health<1)
    {
        document.querySelector('#kabal p').innerHTML = "You Both Die";
        document.querySelector('#kratos p').innerHTML = "You Both Die";
    } else if(fighters[0].health<1){
        document.querySelector('#kabal p').innerHTML =fighters[1].name+" WINS!!!";
        document.querySelector('#kratos p').innerHTML =fighters[0].name+" LOSES!!!";
    } else if (fighters[1].health<1)
    {
        document.querySelector('#kratos p').innerHTML = fighters[0].name+" WINS!!!";
        document.querySelector('#kabal p').innerHTML = fighters[1].name+" LOSES!!!";
    }


}


//Create function that interacts with player health, simulating combat.
function fight(){
    console.log("FIGHT!");


    //calculate amount of damage each player will inflict.
    var minimumDamageP1 = fighters[0].damage * .5;
    var minimumDamageP2 = fighters[1].damage * .5;
    var player1ActualDamage = Math.floor(Math.random()*(fighters[0].damage-minimumDamageP1)+minimumDamageP1);
    var player2ActualDamage = Math.floor(Math.random()*(fighters[1].damage-minimumDamageP2)+minimumDamageP2);

    //inflict damage


    var score = document.querySelector('#kabal p');
    scoreToString = String(fighters[0].health=fighters[0].health-player1ActualDamage);
    score.innerHTML = fighters[0].name+' : '+scoreToString;

    var score1 = document.querySelector('#kratos p');
    scoreToString1 = String(fighters[1].health=fighters[1].health-player2ActualDamage);
    score1.innerHTML =  fighters[1].name+' : '+scoreToString1;

    console.log(fighters[0].name+": "+fighters[0].health + " " + fighters[1].name+":"+fighters[1].health);
    winnerCheck();
    round++;
    stringOfRound = String(round);
    var roundGet = document.querySelector('#round');
    roundGet.innerHTML = 'Round:'+stringOfRound+' FIGHT!';
    }
var navLinks = document.querySelector('#fight_btn a');
navLinks.onclick = function(e){
    fight();

};


