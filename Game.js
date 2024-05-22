let userscore = 0;
let compscore = 0;
let userScoreBoard = document.querySelector("#user-score");
let compScoreBoard = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");

let reset_btn = document.querySelector("#reset");

const choices = document.querySelectorAll(".choice")

const getCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice)=>
    {
        console.log("User: "+userChoice);
        const compChoice = getCompChoice();
        console.log("Computer: "+compChoice);

        let userWin = true;
        if(userChoice === compChoice)
            {
                msg.innerText = "It's a Draw!";
                msg.backgroundColor = "black";
                return
            }
        else if(userChoice==="rock")
            {
                userWin = compChoice==="scissors"?true:false;
            }
        else if(userChoice==="paper")
            {
                userWin = compChoice==="rock"?true:false;
            }
        else
        {
            userWin = compChoice==="paper"?true:false;
        }
        if(userWin)
            {
                msg.innerText = "You Won! || You: "+userChoice+" || Computer: "+compChoice;
                msg.style.backgroundColor = "green";
                userscore+=1;
                userScoreBoard.innerText = userscore;

            }
        else
        {
            msg.innerText = "You Lose! || You: "+userChoice+" || Computer: "+compChoice;
            msg.style.backgroundColor = "red";
            compscore+=1;
            compScoreBoard.innerText = compscore;
        }
    }

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
 })

reset_btn.addEventListener("click",()=>{
    userScoreBoard.innerText = 0;
    compScoreBoard.innerText = 0;
    userscore = 0;
    compscore = 0;
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "black";
    alert("Game Reset!");
})