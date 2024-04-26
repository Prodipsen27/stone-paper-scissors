let userScore=0;
let botScore=0;


const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#res");
let you=document.getElementById("userScore");
let botPt=document.getElementById("botScore");
let bot= document.getElementById("bot");
let p= document.getElementById("p");

const genBotChoice = ()=>{
    const opt=["rock","paper","scissors"];
    const randomIdx= Math.floor(Math.random()*3);
   
    if (randomIdx==0) {
        bot.src="img/rock.png";
        p.innerText="ROCK";
    }
    if (randomIdx==1) {
        bot.src="img/paper.png";
        p.innerText="PAPER";
    }
    if (randomIdx==2) {
        bot.src="img/scissors.png";
        p.innerText="SCISSORS";
    }
    
    console.log(bot);
    return opt[randomIdx];
}

const drawGame=()=>{
    console.log("DRAW!, Try AGAIN!");
    msg.innerText="DRAW!, Try AGAIN!";
};

const winner=(userWin)=>{
    if (userWin) {
        console.log("You Won!");
        msg.innerText="You Won!";
        userScore++;
        console.log(userScore);
        console.log(botScore);
        you.innerText=userScore;

        
    }else{
        console.log("You Lose!");
        msg.innerText="You Lose!";
        botScore++;
        console.log(userScore);
        console.log(botScore);
        botPt.innerText=botScore;
    }
};


const playGame=(userChoice)=>{
    console.log("User: ",userChoice);
    const botChoice= genBotChoice();
    console.log("Bot: ",botChoice);

    if (userChoice===botChoice) {
        drawGame();
    }else{
        let userWin = true;
        if (userChoice==="rock") {
            userWin=botChoice==="paper"?false:true;
        }else if (userChoice==="paper") {
            userWin= botChoice==="scissors"?false:true;
        }else{
            userWin= botChoice==="rock"?false:true;
        }
        winner(userWin);
    }
  
}


choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    })
})

bot.addEventListener("click",()=>{
    bot.src="img/bot.png";
    p.innerText="We Can Play More!";
})