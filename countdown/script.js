// const endDate = "22 January 2024 03:50 PM";
let endDate = "";
let interval = "";
const inputs = document.querySelectorAll(".container input");
const btn = document.querySelector(".submit");
const allert = document.querySelector(".alert");
const reset = document.querySelector(".reset-btn");
const fire = document.querySelector(".main");


for(let i=0; i<4; i++){
    inputs[i].value = 0;
}

reset.addEventListener("click",()=>{
    window.location.reload();
})
btn.addEventListener("click",()=>{
    let userGiven = document.querySelector(".date-time");
    let userGivenValue = userGiven.value;
    endDate = userGivenValue;
    let interval = setInterval(
        () => {
            clock();
        },
        1000
    )
})

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;
    if(isNaN(diff)){
        allert.classList.add("active");
        setTimeout(()=>{
            window.location.reload();
        },1500);
        return;
    }
    if(diff<0){
        fire.classList.add("active");
        return;
    }
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor((diff / 3600)%24);
    inputs[2].value = Math.floor((diff / 60)%60);
    inputs[3].value = Math.floor(diff%60);
}
