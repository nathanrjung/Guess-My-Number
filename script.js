'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);
//
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 18;
//
// console.log(document.querySelector('.number').textContent);
// console.log(document.querySelector('.message').textContent);
//
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number Entered';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = `${secretNumber}`;
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.highscore').textContent = `${score}`;
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Your Guess is too High';
    score--;
    document.querySelector('.score').textContent = `${score}`;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Your guess is too Low';
    score--;
    document.querySelector('.score').textContent = `${score}`;
  }
  if (score === 0) {
    document.querySelector('.message').textContent = '😭 You Lose!';
  }
});
