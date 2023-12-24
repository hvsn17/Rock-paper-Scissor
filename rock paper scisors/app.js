let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector(".move")
const userScorePara = document.querySelector('#user')
const compScorePara = document.querySelector("#comp");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    // Randomly Generates Rock, Paper, Scissors
}

const drawGame = () => {
    msg.innerText = "Draw Buddy!";
    msg.style.backgroundColor = "blue";
        msg.style.color = "gold";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
      userScore++;
      userScorePara.innerText = userScore;
        console.log("You win Buddy !");
        msg.innerText = `You win ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "seagreen";
        msg.style.color = "azure";
    } else {
      compScore++;
      compScorePara.innerText = compScore;
        msg.innerText = `You lose ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "black";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice); //Generate Computer Choice ---> Modular Work
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute('id');
        console.log("Choice Was Clicked", userChoice);
        playGame(userChoice);
    })
})
