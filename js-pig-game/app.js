/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scoreOne = 0;
var scoreTwo = 0;
var finalScore = 0;
var activePlayer=0;

var dice = Math.floor(Math.random()*6) + 1;
console.log(dice);

// Lets create a function that gonna hide the dice initially - before rolling dice
// How to change the css styling using JS
document.querySelector('.dice').style.display='none';

// Now the dice will be visible on page when we hit the roll dice button
// document.querySelector('.btn-roll').addEventListener('click', function(){
//  document.querySelector('.dice').style.display='block'; // block is display value to display
// })

document.getElementById('current-1').textContent=0;
document.querySelector('#current-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.querySelector('#score-0').textContent=0;


// Lets try to access all the elements value
var score0 = document.querySelector('#score-0').textContent;
console.log(score0);
var score1 = document.getElementById('score-1').textContent;
console.log(score1);
var score1 = document.querySelector('#score-1').textContent;
console.log(score1);
// Lets change the value of score or we can say score-0 and score-1 elements with some random number

// Now lets make some event handler and try to set some values to score-0 when we click on it
// document.querySelector('#score-0').addEventListener('click', function(){
//   var randNum = Math.floor(Math.random()*100);
//   console.log(randNum);
//   document.querySelector('#score-0').textContent = randNum;
// })

// Now lets make changes to the score-1 simply when we hover on it
// document.getElementById('score-1').addEventListener('mouseover', function(){
//   var randNum = Math.floor(Math.random()*100);
//   console.log(randNum);
//   document.querySelector('#score-1').textContent = randNum;
// })

// Lets implement new game button logic. So here when we click on new game buton, all the values should get reset to 0
function reset(){
  scoreOne = 0;
  scoreTwo = 0;
  finalScore = 0;
  activePlayer=0;
  document.getElementById('current-1').textContent=0;
  document.querySelector('#current-0').textContent=0;
  document.getElementById('score-1').textContent=0;
  document.querySelector('#score-0').textContent=0;
  document.querySelector('.dice').style.display='none';
  document.getElementById('name-0').textContent='Player 1';
  document.getElementById('name-1').textContent='Player 2';
}

document.querySelector('.btn-new').addEventListener('click', reset);

// Now lets implement when user click on roll dice it should change at every click
// so here simply we mean to change the image of dice at every click based on random number generated
document.querySelector('.btn-roll').addEventListener('click', function(){
 document.querySelector('.dice').style.display='block'; // block is display value to display
 var dice = Math.floor(Math.random()*6) + 1;
 document.querySelector('.dice').src='dice-' + dice + '.png';
 //currentScore = currentScore + dice;
 //scoreOne = scoreOne + dice;
 //document.getElementById('current-'+activePlayer).textContent=scoreOne;
 if(dice === 1){
   //document.querySelector('.dice').src='dice-' + dice + '.png';
   document.querySelector('#current-'+activePlayer).textContent=0;
   document.querySelector('#score-'+activePlayer).textContent=0;
   if(activePlayer==0){
     scoreOne=0;
     document.querySelector('#current-'+activePlayer).textContent=scoreOne;
     activePlayer=1
     document.querySelector('.player-0-panel').classList.remove('active');
     document.querySelector('.player-1-panel').classList.add('active');
     alert('WELL PLAYED !! IT\'S PLAYER 2 TURN !!');
     //activePlayer==0? activePlayer=1 : activePlayer=0;
   }else{
     scoreTwo=0;
     document.querySelector('#current-'+activePlayer).textContent=scoreTwo;
     activePlayer=0;
     document.querySelector('.player-1-panel').classList.remove('active');
     document.querySelector('.player-0-panel').classList.add('active');
     alert('WELL PLAYED !! IT\'S PLAYER 1 TURN !!');
   }
 } else{
   if(activePlayer==0){
     scoreOne = scoreOne+dice;
     document.getElementById('current-'+activePlayer).textContent=scoreOne;
   } else{
     scoreTwo= scoreTwo+dice;
     document.getElementById('current-'+activePlayer).textContent=scoreTwo;
   }

 }
})

// On clicking hold the current score shuld get added to the final score

document.querySelector('.btn-hold').addEventListener('click', function(){
  if(activePlayer==0){
    var finalScore = document.querySelector('#current-'+activePlayer).textContent;
    document.getElementById('score-'+activePlayer).textContent= finalScore;
    if(finalScore>=50){
      document.getElementById('name-'+activePlayer).textContent='WINNER!!'
    }
    activePlayer=1;

  } else{
    var finalScore = document.querySelector('#current-'+activePlayer).textContent;
    document.getElementById('score-'+activePlayer).textContent= finalScore;
    if(finalScore>=50){
      document.getElementById('name-'+activePlayer).textContent='WINNER!!'
    }
    activePlayer=0;

  }
})

// var randNum = Math.floor(Math.random()*100);
// console.log(randNum);
// document.querySelector('#score-0').textContent = randNum;

// var randNum = Math.floor(Math.random()*100);
// console.log(randNum);
// document.getElementById('score-1').textContent= randNum;
// score1 = randNum;
