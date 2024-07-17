let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWins = false;

    if (userChoice === 'rock' && compChoice === 'scissors') {
      userWins = true;
    } else if (userChoice === 'paper' && compChoice === 'rock') {
      userWins = true;
    } else if (userChoice === 'scissors' && compChoice === 'paper') {
      userWins = true;
    }
    showWinner(userWins, userChoice, compChoice);
  }
  return compChoice;
};

let userchoice = document.querySelector("#show");
let compchoice = document.querySelector("#show2");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    const compChoice = playGame(userChoice);
    userchoice.innerHTML = userChoice;
    compchoice.innerHTML = compChoice;
  });
});