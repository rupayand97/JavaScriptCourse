let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click", ()=>{
        // console.log("choice was clicked");
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked:", userChoice);
        playGame(userChoice);        
    })
})

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    // console.log("Game was draw");
    msg.innerText = "Game was Draw. play again!";
    msg.style.backgroundColor = "#081b81";
}

const showWinner = (userWin,userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You Lose");
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    // console.log("User Choice:", userChoice );
    //generate computer choice
    const compChoice = genCompChoice();
    // console.log("Computer Choice:", compChoice);
    
    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock"){
            //we kown comp choice will be either scissors or paper, if comp pick rock it will go to previoes if. i.e, draw.
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice==="paper") {
            userWin = compChoice === "scissors" ? false : true;
        }  else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice, compChoice);
    }
};

