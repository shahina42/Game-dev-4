const player = document.querySelector(".player-box")
const computer = document.querySelector("#comp_hand")
var player_hand = document.getElementById("player_hand")
const play_again = document.getElementById("playAgain")
let result = document.getElementById("resultMatch")


let random;
let life=5;

function randomhand(){
    random = Math.ceil(Math.random()*3)
    switch(random){
    case 1:
        computer.setAttribute("src", "./assets/rock-hand.png");
        break
    case 2:
        computer.setAttribute("src", "./assets/paper-hand.png");
        break
    case 3:
        computer.setAttribute("src", "./assets/scissors-hand.png");       
        break        
}
}

var rock = document.getElementById("rock")
var paper = document.getElementById("paper")
var scissor = document.getElementById("scissor")
var player_scr = document.getElementById("score-box1")
var comp_scr = document.getElementById("score-box2")

let score1=0;
let score2=0;

rock.onclick=()=>{
    randomhand()
    player_hand.setAttribute("src","./assets/rock-hand.png")
    if(random==3){
        score1+=1
        player_scr.textContent=score1
    }
    else if(random==2){
        score2+=1
        comp_scr.textContent=score2
    }
    endGame()
}
paper.onclick=()=>{
    randomhand()
    player_hand.setAttribute("src","./assets/paper-hand.png")
    if(random==1){
        score1+=1
        player_scr.textContent=score1
    }
    else if(random==3){
        score2+=1
        comp_scr.textContent=score2
    }
    endGame()

}
scissor.onclick=()=>{
    randomhand()
    player_hand.setAttribute("src","./assets/scissors-hand.png")
    if(random==2){
        score1+=1
        player_scr.textContent=score1
    }
    else if(random==1){
        score2+=1
        comp_scr.textContent=score2
    }
    endGame()

}

function endGame(){
    if (score1 == 5 || score2 == 5){
        rock.style.visibility="hidden";
        paper.style.visibility="hidden";
        scissor.style.visibility="hidden";
    }

    if (score1 == 5){
        result.textContent="You won the Game";
        play_again.style.visibility = "visible";

    }

    if (score2 ==5){
        result.textContent="Computer won the Game";
        play_again.style.visibility = "visible";
    }
}   

play_again.addEventListener('click',()=>{
    window.location.href="game.html"
})