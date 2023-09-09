let gameSeq = [];
let userSeq = [];

let btns = ["green","red","yellow","blue"];

let started = false;
let level = 0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is stared")
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText=`Level ${level}`;
    
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`); //variable so expression because .will become string part
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn)
    gameSeq.push(randColor);
    console.log(gameSeq); 
    gameFlash(randbtn);

}

 function checkans(idx){;
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp,1200);
        }
    } else{
        h2.innerHTML = `GAME OVER! Your Score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },200);
        reset();   //reset function call
    }
 }
function btnpress(){
    // console.log(this)
    let btn = this;     //function scope
    userFlash(btn);
    
    userColor = btn.getAttribute("id");
    // console.log(userColor)
    userSeq.push(userColor);


    checkans(userSeq.length-1); //last sequence
}

let allbtns = document.querySelectorAll(".btn");
for(let btn of allbtns){
    btn.addEventListener("click",btnpress)
}    


function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

