function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function computerPlay() {
    let plays = Array('Rock', 'Paper', 'Scissors')
    let play = plays[Math.floor(Math.random() * plays.length)];
    return play
}
function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
          switch (computerSelection) {
              case "Rock":
                return "tie";
              case "Scissors":
                return "win";
              case "Paper":
                return "lose";
          }
        case "scissors":
          switch (computerSelection) {
              case "Rock":
                return "lose";
              case "Scissors":
                return "tie";
              case "Paper":
                return "win";
          }
        case "paper":
          switch (computerSelection) {
              case "Rock":
                return "win";
              case "Scissors":
                return "lose";
              case "Paper":
                return "tie";
          }
  }
}
function game(e) {
    user_in = e.target.id;
    let computerSelection = computerPlay();
    let result = playRound(user_in, computerSelection);
    let results = document.getElementById("results");
    if (result == "lose") {
      let message = `You lose! ${computerSelection} beats ${capitalizeFirstLetter(user_in)}`
      console.log(message);
      results.innerHTML = message + "<br>";
      computerScore++;
    }
    else if (result == "win") {
      let message = `You win! ${capitalizeFirstLetter(user_in)} beats ${computerSelection}`
      console.log(message);
      results.innerHTML = message + "<br>";
      yourScore++;
    }
    else {
      let message = `No one wins. You both chose ${computerSelection}`
      console.log(message);
      results.innerHTML = message + "<br>";
    }
    determineWinner();
}
function determineWinner() {
  const yourScoreCounter = document.getElementById("yourScore");
  yourScoreCounter.innerHTML = yourScore
  const computerScoreCounter = document.getElementById("computerScore");
  computerScoreCounter.innerHTML = computerScore
  const winner = document.querySelector("#winner");
  if (yourScore == 5) {
    let message = "congrats winner"
    winner.innerHTML += message + "<br>";
  }
  else if (computerScore == 5) {
    let message = "try again loser"
    winner.innerHTML += message + "<br>";
  }
  else {
    return true;
  }
}

const btns = document.querySelectorAll(".choice");
const btn = document.querySelector(".choice");
let yourScore = 0;
let computerScore = 0;
btns.forEach(btn => btn.addEventListener('click', game));