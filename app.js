let activePlayer, score, totalScore, activeGame;
/****
Rolling the dice
****/
document.querySelector('.btn-roll').addEventListener('click', function(){

if(activeGame){
  // 1. Generate a random number between 1 and 6
  let diceRoll = Math.floor(Math.random() * 6) +1;

  // 2. Display the corresponding image
  let image = document.querySelector('.dice');
  image.style.display = 'block';
  image.src = 'dice-' + diceRoll + '.png';

  // 3. Add the corresponding score of the dice to the current score
  if(diceRoll !== 1){
    totalScore += diceRoll;
      document.getElementById('current-' + activePlayer).textContent = totalScore;
  }else{
    nextPlayer();
    }
  }
});

/****
Next Player
****/
function nextPlayer(){
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  totalScore = 0;

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.dice').style.display = 'none';
}


/****
Holding your score
****/
document.querySelector('.btn-hold').addEventListener('click', function(){

if(activeGame){
  score[activePlayer] += totalScore;
  document.getElementById('score-' +activePlayer).textContent = score[activePlayer];

  if(score[activePlayer] > 20){
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-'+activePlayer +'-panel').classList.add('winner');
    document.querySelector('.player-'+activePlayer +'-panel').classList.remove('active');
    document.getElementById('name-' +activePlayer).textContent = 'WINNER!!';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    activeGame = false;
  }else{
    nextPlayer();
  }
}

});


/****
Resetting the score
****/
document.querySelector('.btn-new').addEventListener('click', init)

function init(){
  activePlayer = 0;
  totalScore = 0;
  score = [0,0];
  activeGame = true;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.getElementById('name-0').textContent = 'PLAYER 1';
  document.getElementById('name-1').textContent = 'PLAYER 2';

}

init();
