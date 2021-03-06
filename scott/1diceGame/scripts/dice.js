/*
Game Rules:

-The game has 2 players, they play in rounds
-Each turn the active player can roll as many times as they want and the score is tallied to curent score
-If the active player rolls a 1 the current score is lost AND the next player becomes the active player
-Each player has ability to 'hold' their score - which means that the curent score total is added to total score and play passes to next player
-The winner is the first player to reach 100 points with their total score (global score)

-We need to track: scores (global score, round score), active player,
*/

var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0; // 0 or 1

// --------- global reset -----------
// hide the dice initially
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function() {
    let dice = Math.ceil(Math.random()*6); /*or Math.floor((Math.random()*6)+1)*/
    let diceDom = document.querySelector('.dice');
    console.log(diceDom);
    console.log(dice);
    
    // display the dice
    diceDom.style.display = 'block';
    diceDom.src = 'images/dice-' + dice + '.png';
    
    // update the roundScore if not 1
    if (dice != 1) { // or (dice>1)
        roundScore += dice; // or roundScore = roundScore + dice
        // current score of active player
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // if a 1 is rolled: set roundScore to 0 and activePlayer = 1;
        activePlayer == 0 ? activePlayer = 1 : activePlayer = 0; // if activePlayer is 0 then activePlayer should be 1 else activePlayer is 0. The is a ternary operatory
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
    }
    
    
})