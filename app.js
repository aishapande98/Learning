/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying,lastdice;;
init();

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        //display random number
        var dice= Math.floor(Math.random() * 6) + 1;
       
    //display the result
    var DiceDOM = document.querySelector('.dice');
    DiceDOM.style.display = 'block';
    DiceDOM.src = 'dice-' + dice + '.png';
    if(lastdice === 6 && dice ===6)
    {
        scores[activePlayer]=0;
        document.querySelector('#score-' +activePlayer).textContent=0;
        NextPlayer();
    }
    //Update the round score if dice was not 1
    if(dice !== 1){
        roundscore += dice;
        document.querySelector('#current-' + activePlayer).textContent=roundscore ;
    }
    else{
        NextPlayer();
    }
     lastdice=dice;
    }
    

})

function NextPlayer()
{
    activePlayer === 0 ? activePlayer =1 :activePlayer =0;
        roundscore=0;
        
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display="none";
}
document.querySelector('.btn-hold').addEventListener('click',function(){
   
   if(gamePlaying){
          //Add current score to global score
  scores[activePlayer] += roundscore;
  scores[activePlayer] = scores[activePlayer] + roundscore;
//Update to UI
 document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];
 var input=document.querySelector('.final-score').value;
 console.log(input);
 var WinningScore;
 if(input){
     WinningScore=input;
 }
 else{
     WinningScore=100;
 }
; // check if player won th game
 if(scores[activePlayer] >=WinningScore)
 {
     document.querySelector('#name-' +activePlayer).textContent='WINNER!';
     document.querySelector('.dice').style.display='none';
     document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
     document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
     gamePlaying=false;
 }
//NextPlayer
else{
    NextPlayer();
}

   } 
})
document.querySelector('.btn-new').addEventListener('click',function(){
      init();
})


function init(){
     
scores =[0,0];
roundscore=0;
activePlayer=0;
gamePlaying=true;
//document.querySelector('#current-' + activePlayer).textContent=dice ;
//var x=document.querySelector('#score-0').textContent;
//console.log(x);

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.querySelector('.dice').style.display='none';
document.getElementById('name-0').textContent='Player-1';
document.getElementById('name-1').textContent='Player-2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');
}