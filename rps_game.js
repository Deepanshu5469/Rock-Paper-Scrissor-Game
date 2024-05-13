let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const playGame = (userChoice) =>{
    //console.log("user choice =",userChoice)
    // Generate Computer Choice
    const compChoice = genCompChoice();
    //console.log("Comp choice =",compChoice);

    if(userChoice===compChoice){
        // Draw Game
        drawGame(userChoice);
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            // scissors, paper
            userWin = compChoice === "paper" ? false : true ;
        } else if (userChoice === "paper"){
            // scissors, rock
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }

};

const drawGame = (userChoice) =>{
    //console.log("Game was draw.");
    msg.innerText = `Game was Draw. Play again. Both Chooses ${userChoice}`;
    msg.style.background = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = `${userScore}`;
        msg.innerText = `You Win!. Your ${userChoice} beats ${compChoice}`;
        msg.style.background = "green";

    } else {
        compScore++;
        compScorePara.innerText = `${compScore}`;
        //console.log("You Lose!");
        msg.innerText = `You Lost. ${compChoice} beats your ${userChoice}`;
        msg.style.background = "red";
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked is", userChoice);
        playGame(userChoice);
    })
})