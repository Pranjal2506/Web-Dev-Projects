let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let user = document.querySelector("#u-result");
let ip = document.querySelector("#o-result");
let op = document.querySelector(".chance");
let reset = document.querySelector(".btn")
const choise = ["rock.png", "paper.png", "scissors.png"];

function rando(userChoise){
    let ch = Math.floor(Math.random() * 3);
    let ans = choise[ch];
    op.style.transition = "all 1s";
    op.style.backgroundImage = `url(${ans})`;
    opchance(userChoise, ch+1);
}
function opchance(userChoise, ipChoise){
    console.log(userChoise, ipChoise);
    if(userChoise==1 && ipChoise==3){
        user.innerHTML = parseInt(user.innerHTML)+1;
    }
    if(userChoise==1 && ipChoise==2){
        ip.innerHTML = parseInt(ip.innerHTML)+1;
    }
    if(userChoise==2 && ipChoise==1){
        user.innerHTML = parseInt(user.innerHTML)+1;
    }
    if(userChoise==2 && ipChoise==3){
        ip.innerHTML = parseInt(ip.innerHTML)+1;
    }
    if(userChoise==3 && ipChoise==2){
        user.innerHTML = parseInt(user.innerHTML)+1;
    }
    if(userChoise==3 && ipChoise==1){
        ip.innerHTML = parseInt(ip.innerHTML)+1;
    }

}

rock.addEventListener("click",()=>{
    console.log("rock clicked");
    rando(1);
});
paper.addEventListener("click",()=>{
    console.log("paper clicked");
    rando(2);
});
scissor.addEventListener("click",()=>{
    console.log("scissor clicked");
    rando(3);
});
reset.addEventListener("click",()=>{
    ip.innerHTML = 0;
    user.innerHTML = 0;
})
