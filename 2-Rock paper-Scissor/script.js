//
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");

choices.forEach((delts) => {
  delts.addEventListener("click", () => {
    //user choice
    let userChoice = delts.getAttribute("id");
    playGame(userChoice);
  });
});
function genCompChoice() {
  let options = ["rock", "paper", "scissor"];
  let random = Math.floor(Math.random() * 3);
  return options[random];
}
function playGame(userChoice) {
  console.log("user =", userChoice);
  let compChoice = genCompChoice();
  console.log("comp =", compChoice);

  if (userChoice === compChoice) {
    console.log("draw");
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // paper scissor
      userWin = compChoice === "paper" ? false : true;
    }
  }
  if (userChoice === "paper") {
    //rock scisor
    userWin = compChoice === "scissor" ? false : true;
  } else if (userChoice === "scissor") {
    //paper rock
    userWin = compChoice === "rock" ? false : true;
  }
  return showWinner(playGame);
}

function showWinner(playGame) {
  if (userWin) {
    console.log("youwin");
  } else {
    console.log("you loose");
  }
}
playGame();
