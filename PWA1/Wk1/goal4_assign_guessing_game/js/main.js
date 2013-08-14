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

    function correct(){
        var randomNumber = Math.floor(Math.random()*10+1);
        console.log(randomNumber);
        var playerEntry = document.querySelector('#input').value;
        console.log(playerEntry);
        var playerEntryToInterger = parseInt(playerEntry);
        console.log(playerEntryToInterger);

    }

 var playerEntryAccept = document.getElementsByTagName('button');
    playerEntryAccept[0].addEventListener('click', correct, false);

})();