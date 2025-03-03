// let input=document.querySelector(".input")
// let result=document.querySelector(".number")

// let random=Math.floor(Math.random()*4)
// let userInput=input

// if(
    
//     random){
//     console.log("correct")
// }
let randomNumber = Math.floor(Math.random() * 10) + 1;
let score = 10;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);
    if (userGuess === randomNumber) {
        document.getElementById("result").textContent = `Congratulations! You guessed the correct number in ${11 - score} attempts: ${randomNumber}`;
    } else if (userGuess > randomNumber) {
        document.getElementById("result").textContent = "Your guess is greater. Try again.";
    } else {
        document.getElementById("result").textContent = "Your guess is less. Try again.";
    }
    
    score -= 1;
    updateScore();

    if (score < 0) {
        document.getElementById("result").textContent = `Game Over! The number was ${randomNumber}`;
        document.getElementById("userGuess").setAttribute("disabled", true);
    }
}

function updateScore() {
    document.getElementById("score").textContent=score;
}

