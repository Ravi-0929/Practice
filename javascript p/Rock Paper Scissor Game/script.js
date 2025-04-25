let yourscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const urscore = document.querySelector("#yourscore");
const comscore = document.querySelector("#compscore");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
       playgame(userchoice);
    })
})

const gencomchoice = () =>{
    const option = ["rock", "paper", "scissor"];
    const randidx = Math.floor(Math.random() *3);
    return option[randidx];
};

const draw = () =>{
    msg.innerText = "Game draw";
    msg.style.backgroundColor = "#081b31";
}

const showwinner = (userwin, userchoice, compchoice) =>{
    if(userwin){
        yourscore++;
        urscore.innerText = yourscore;
        msg.innerText = "you win";
        msg.style.backgroundColor = "green";

    }else{
        compscore++;
        comscore.innerText = compscore;
        msg.innerText = "you loose";
        msg.style.backgroundColor = "red";
    }

};

const playgame = (userchoice) =>{

    const compchoice = gencomchoice();

    if(userchoice === compchoice){
        draw();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            userwin = compchoice === "scissor" ? false : true;
        }else{
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }
};