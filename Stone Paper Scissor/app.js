    let userScore = 0;
    let compScore = 0;

    const choices = document.querySelectorAll(".choice");
    const msg = document.querySelector("#msg");

    const userScorePara = document.querySelector ("#user-score");
    const compScorePara = document.querySelector ("#comp-score");
    const  genCompChoice = () => {
        const options = ["stone", "paper","scissor"];
        const randIdx = Math.floor(Math.random() * 3);
        return options[randIdx];
    };


    const drawGame = () => {
        msg.innerText = "Game was Draw. Play again. !";
        msg.style.backgroundColor = "#081b31";
    };

    const showWinner = (userWin , userChoice, CompChoice) => {
        if(userWin){
            userScore++;
            userScorePara.innerText = userScore;
            msg.innerText = `You win! Your ${userChoice} beats ${CompChoice} `;
            msg.style.backgroundColor = "Green";
        }else{
            compScore++;
            compScorePara.innerText = compScore;
            msg.innerText = `You lost! ${CompChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "Red";
        }
    };

    const playGame = (userChoice) => {
        // Generate computer choice ->modular
        const CompChoice = genCompChoice();

        if(userChoice === CompChoice) {
            // Draw Game
            drawGame();
        }else {
            let userWin = true;
            if(userChoice === "stone"){
                //scissor ,paper
                userWin = CompChoice ==="paper" ? false : true ;
            }else if(userChoice === "paper"){
                //stone,scissor
                userWin = CompChoice === "scissor" ? false : true ;
            }else {
                // stone, paper
                userWin =  CompChoice === "stone" ? false : true;
            }
            showWinner (userWin, userChoice,CompChoice);
        }
    };

    choices.forEach((choice) =>{
        choice.addEventListener("click", ()=> {
            const userChoice = choice.getAttribute("id");
        playGame(userChoice);

        });
    });