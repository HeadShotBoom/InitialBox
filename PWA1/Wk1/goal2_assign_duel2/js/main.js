// Script

//Define player variables IAW FSO directions.
var playerOne = ["Scott", 100, 50];

var playerTwo = ["Vid", 100, 50];

//store round number in a variable
var round = 0;


//Create function that interacts with player health, simulating combat.
function fight(){
    console.log("FIGHT!");
alert(playerOne[0]+":"+playerOne[1]+"  *START*  "+playerTwo[0]+":"+playerTwo[1]);
for (i=0;i<10;i++){
    //calculate amount of damage each player will inflict.
    var minimumDamageP1 = playerOne[2] * .5;
    var minimumDamageP2 = playerTwo[2] * .5;
    var player1ActualDamage = Math.floor(Math.random()*(playerOne[2]-minimumDamageP1)+minimumDamageP1);
    var player2ActualDamage = Math.floor(Math.random()*(playerTwo[2]-minimumDamageP2)+minimumDamageP2);

    //inflict damage
    playerOne[1]=playerOne[1]-player1ActualDamage;
    playerTwo[1]=playerTwo[1]-player2ActualDamage;
    if (playerOne[1]<50){playerOne[1]=playerOne[1]+50}

    console.log(playerOne[0]+": "+playerOne[1] + " " + playerTwo[0]+":"+playerTwo[1]);

    //check for victor
    var result = winnerCheck();
    console.log(result);
    if (result=="no winner")
    {
        round++;
        alert(playerOne[0]+":"+playerOne[1]+"  *ROUND "+round+" OVER"+"*  "+playerTwo[0]+":"+playerTwo[1]);

    } else{
        alert(result);
        break;
    }

}
}


function winnerCheck(){
    var result="no winner";
    if (playerOne[1]<1 && playerTwo[1]<1)
    {
        result = "You Both Die";
    } else if(playerOne[1]<1){
        result =playerTwo[0]+" WINS!!!"
    } else if (playerTwo[1]<1)
    {
        result = playerOne[0]+" WINS!!!"
    }
    return result;
}

fight();