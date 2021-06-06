'use strict';

let randomNum = document.querySelector('.number');

randomNum = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

//console.log(randomNum);

const btn = document.querySelector('.check');

const again = document.querySelector('.again');

function displayMessage (message) {
  document.querySelector('.message').innerHTML = message;
}

btn.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('please enter a number');
  } else if (guess === randomNum) {
    displayMessage('😲 You won! Congratulations 🎊');
    document.querySelector('.number').textContent = randomNum;
    if(score => highScore) {
      document.querySelector('.highscore').textContent = score;
    }
    document.body.style.backgroundColor = 'green';
  } else if (guess !== randomNum) {
    if(score > 1) {
      displayMessage(guess < randomNum ? 'Too low' : 'Too high');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.body.style.backgroundColor = 'red';
      document.querySelector('.number').textContent = randomNum;
    }
  }
})

again.addEventListener('click', () => {
   document.querySelector('.number').textContent = '?';
   score = 20;
   document.querySelector('.score'). textContent = score;
   document.body.style.backgroundColor = '#2b2b2b';
   document.querySelector('.guess').value = '';
   randomNum = Math.trunc(Math.random() * 20) + 1;
   //alert (randomNum)
})