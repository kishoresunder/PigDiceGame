/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var currentPlayer, totalDiceNo,totalScore,documentDom, gameContinue;
init();
gameContinue = true;

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gameContinue){
        documentDom.style.display = 'block'; 
        var diceNumber = Math.floor(Math.random() * 6) + 1;  
        if(diceNumber > 1){
            totalDiceNo+=diceNumber;
            document.querySelector('#current-'+currentPlayer).textContent = totalDiceNo;
            documentDom.src = 'dice-'+diceNumber+'.png';    
        } else {
            secondPlayer();
        }
    }
})

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameContinue){
        totalScore[currentPlayer] += totalDiceNo
        document.querySelector('#score-'+currentPlayer).textContent = totalScore[currentPlayer];
        if(totalScore[currentPlayer] > 20){
            console.log('currentPlayer'+currentPlayer)
            document.querySelector('#name-'+currentPlayer).textContent="Winner!!";
            documentDom.style.display = 'none';
            document.querySelector('.player-'+currentPlayer+'-panel').classList.add('winner')
            document.querySelector('.player-'+currentPlayer+'-panel').classList.remove('active')
            gameContinue = false;
        } else {
            secondPlayer();
        } 
    }     
})

document.querySelector('.btn-new').addEventListener('click',init)

function secondPlayer(){
    if(gameContinue){
        totalDiceNo = 0
        documentDom.style.display = 'none';
        document.querySelector('#current-'+currentPlayer).textContent = totalDiceNo;
        currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    }
}

function init(){
    documentDom = document.querySelector('.dice');
    totalScore = [0,0]
    document.querySelector('.dice').style.display = 'none';
    currentPlayer = 0;
    totalDiceNo = 0;
    document.querySelector('#name-0').textContent="Player 1";
    document.querySelector('#name-1').textContent="Player 2";
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.add('active')
}