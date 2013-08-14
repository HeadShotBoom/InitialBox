/**
 * GUESSING GAME:
 *
 * Created By:Daniel Carroll
 * Date:13 Aug 2013
 * 
 * GUESSING GAME
 */

//Game variables

(function (){
    var round = 0;
    var roundLeft ='';

    function correct(){
        round++;
        roundLeft = 3-round;
        var randomNumber = Math.floor(Math.random()*10+1);
        var playerEntry = document.querySelector('#input').value;
        var playerEntryToInterger = parseInt(playerEntry);

        var title = document.querySelector('#output');
        if (playerEntryToInterger>randomNumber){
            title.innerHTML = 'Your guess is higher than my number. You have '+roundLeft+' guesses left';
        }
        if (playerEntryToInterger<randomNumber){
            title.innerHTML = 'Your guess is lower than my number. You have '+roundLeft+' guesses left';
        }
        if (playerEntryToInterger==randomNumber){
            title.innerHTML = 'Your guess is correct, You win!';
        }
        if (roundLeft==0){
            title.innerHTML = 'You have run out of guesses. GAME OVER!';
        }
        if(roundLeft==0){
            playerEntryAccept[0].removeEventListener('click', correct, false);

        }
    }



    var playerEntryAccept = document.getElementsByTagName('button');
    playerEntryAccept[0].addEventListener('click', correct, false);
    var pressEnter = document.querySelector('#input');
        pressEnter.addEventListener('keypress',function(e){
            if (13 == e.keyCode && roundLeft!==0){
                correct();
            }
        })





})();