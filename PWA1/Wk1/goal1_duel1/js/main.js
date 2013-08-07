// Script

//Define player variables IAW FSO directions.
var playerOneName = "Scott";
var playerOneHealth = 100;
var playerOneDamage = 50;
var playerTwoName = "Vid";
var playerTwoHealth = 100;
var playerTwoDamage = 50;
//store round number in a variable
var round = 0;


//Create function that interacts with player health, simulating combat.
function fight(){
    console.log("FIGHT!");
alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
for (i=0;i<10;i++){
    //calculate amount of damage each player will inflict.
    var minimumDamageP1 = playerOneDamage * .5;
    var minimumDamageP2 = playerTwoDamage * .5;
    var player1ActualDamage = Math.floor(Math.random()*(playerOneDamage-minimumDamageP1)+minimumDamageP1);
    var player2ActualDamage = Math.floor(Math.random()*(playerTwoDamage-minimumDamageP2)+minimumDamageP2);

    //inflict damage
    playerOneHealth=playerOneHealth+player1ActualDamage;
    playerTwoHealth=playerTwoHealth-player2ActualDamage;

    console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

    //check for victor
    var result = winnerCheck();
    console.log(result);
    if (result=="no winner")
    {
        round++;
        alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

    } else{
        alert(result);
        break;
    }

}
}


function winnerCheck(){
    var result="no winner";
    if (playerOneHealth<1 && playerTwoHealth<1)
    {
        result = "You Both Die";
    } else if(playerOneHealth<1){
        result =playerTwoName+" WINS!!!"
    } else if (playerTwoHealth<1)
    {
        result = playerOneName+" WINS!!!"
    }
    return result;
}

fight();