const inquirer = require('inquirer');
var userScore = 0;
var computerScore = 0;
var userObject = '';
var computerObject = '';
var randNum;

var choice = [
  {
    type: 'input',
    name: 'object',
    message: 'Rock, Paper or Scissors?'
  }
];


  console.log('Now Playing...');
  console.log('Pick Rock, Paper, or Scissors');
  ask();


function ask() {
  inquirer.prompt(choice).then(answers => {
    userObject = answers.object;
    userObject = userObject.toUpperCase();
    console.log(computerScore, userScore)
    if (computerScore < 3 && userScore < 3) {
      switch (userObject) {
        case 'ROCK':
          choose();
          break;
        case 'PAPER':
          choose();
          break;
        case 'SCISSORS':
          choose();
          break;
        default:
          console.log('Invalid Input... Try Again!');
          ask();
      }
    } else {
      if (computerScore === 3) {
        console.log('YOU LOSE THE GAME!');
      } else {
        console.log('CONGRATS! YOU WIN!');
      }
    }

    function choose() {
      console.log(`You Chose ${userObject}`);
      pick();
      check();
    }
  });
}

function pick() {
  randNum = Math.random() * 3;
  randNum = Math.floor(randNum);
  let computerObjects = ["PAPER", "ROCK", "SCISSORS"];
  if (randNum === 0) {
    computerObject = computerObjects[randNum];
  } else if (randNum === 1) {
    computerObject = computerObjects[randNum];
  } else {
    computerObject = computerObjects[randNum];
  }
  console.log(`CPU chose ${computerObject}`);
}

function check() {
  if (computerObject === userObject) {
    console.log('TIE!');
    console.log(`PLAYER Score: ${userScore} CPU Score: ${computerScore}`);
    ask();
  } else if (userObject === 'PAPER' && computerObject === 'ROCK') {
    winCase();
  } else if (userObject === 'ROCK' && computerObject === 'SCISSORS') {
    winCase();
  } else if (userObject === 'SCISSORS' && computerObject === 'PAPER') {
    winCase();
  } else {
    console.log('You Lost This Round');
    computerScore++;
    console.log(`PLAYER Score: ${userScore} CPU Score: ${computerScore}`);
    ask();
  }

  function winCase() {
    console.log('You Won This Round!');
    userScore++;
    console.log(`PLAYER Score: ${userScore} CPU Score: ${computerScore}`);
    ask();
  }
}
