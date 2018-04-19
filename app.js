/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//function switchPlayer(){
//        
//        document.querySelector('player-' + activePlayer + '-panel').classList.remove('active');    
//    
//        (activePlayer === 0) ? activePlayer = 1 : activePlayer = 0;
//        
//        roundScore = 0;
//        
//        document.getElementById('current-0').textContent = '0';
//        document.getElementById('current-1').textContent = '0';
//    
//        document.querySelector('player-' + activePlayer + '-panel').classList.add('active');
//        
//}



var scores, roundScore, activePlayer, gamePlaying, prevRoll, maxScore;

this.init();




//scores = [0, 0];
//roundScore = 0;
//activePlayer = 0;
//
//
////document.querySelector('#current-' + activePlayer).textContent = dice;
////document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//
////var x = document.querySelector('#score-0').textContent;
//
//document.querySelector('.dice').style.display = 'none';
//
//document.getElementById('score-0').textContent = '0';
//document.getElementById('score-1').textContent = '0';
//document.getElementById('current-0').textContent = '0';
//document.getElementById('current-1').textContent = '0';


function switchPlayer() {

    prevRoll = -1;

    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

    //CAN ALSO USE CLASSLIST.TOGGLE TO ADD OR REMOVE CLASSES
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

    (activePlayer === 0) ? activePlayer = 1: activePlayer = 0;

    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');

}


document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gamePlaying) {

        var dice1 = Math.floor(Math.random() * 6) + 1;

        var dice2 = Math.floor(Math.random() * 6) + 1;

        if (prevRoll === 6 && (dice1 === 6 || dice2 === 6) ) {
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        }

        prevRoll = dice1;

        var diceDOM = document.querySelector('.dice1');

        diceDOM.style.display = 'block';

        diceDOM.src = 'dice-' + dice1 + '.png';

        var diceDOM2 = document.querySelector('.dice2');

        diceDOM2.style.display = 'block';

        diceDOM2.src = 'dice-' + dice2 + '.png';

        if (dice1 !== 1 && dice2 !== 1) {

            roundScore += (dice1 + dice2);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {

            switchPlayer();

        }

    }


});



document.querySelector('.btn-hold').addEventListener('click', function () {

    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];


        if (scores[activePlayer] >= maxScore) {
            document.getElementById('name-' + activePlayer).innerHTML = '<em>Winner</em><br>';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.dice1').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            gamePlaying = false;
            //document.querySelector('.btn-roll').style.display = 'none';
            //document.querySelector('.btn-hold').style.display = 'none';
        } else {

            switchPlayer();

        }


    }

});


function init() {

    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    gamePlaying = true;
    prevRoll = -1;
    maxScore = prompt('Enter Max Score');
    
   // console.log(maxScore);
    
    if(!maxScore)
        maxScore = 100;
    
    //console.log(maxScore);
    //document.querySelector('.player-0-panel').classList.add('active');

    //document.querySelector('.btn-roll').style.display = 'block';
    //document.querySelector('.btn-hold').style.display = 'block';

    document.getElementById('name-0').innerHTML = 'Player 1';
    document.getElementById('name-1').innerHTML = 'Player 2';

    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');





}

document.querySelector('.btn-new').addEventListener('click', init);
