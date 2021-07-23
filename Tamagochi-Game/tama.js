var character = document.getElementById("character");
var game = document.getElementById("game");
var rock1 = document.getElementById("rock1");
var rock2 = document.getElementById("rock2");
var rock3 = document.getElementById("rock3");
var rock4 = document.getElementById("rock4");

var interval;
var both = 0;
var drop = 0;


const CHARACTER_HIT = new Audio();
CHARACTER_HIT.src = "sounds/character_hit.mp3";

const ROCK_HIT = new Audio();
ROCK_HIT.src = "sounds/rock_hit.mp3";

const GAME_OVER = new Audio();
GAME_OVER.src = "sounds/game_over.mp3";

const WIN = new Audio();
WIN.src = "sounds/win.mp3";



function moveLeft(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left>5){
        character.style.left = left - 2 + "px";
    }
}
function moveRight(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left<270){
        character.style.left = left + 2 + "px";
    }
}
document.addEventListener("keydown", event => {
    if(both==0){
        both++;
        if(event.key==="ArrowLeft"){
            interval = setInterval(moveLeft, 1);
        }
        if(event.key==="ArrowRight"){
            interval = setInterval(moveRight, 1);
        }
    }
});
document.addEventListener("keyup", event => {
    clearInterval(interval);
    both=0;
});


var checkHit = setInterval (function () {
    var characterLeft =
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var characterRight =
    parseInt(window.getComputedStyle(character).getPropertyValue("right"));
    var rock1Bottom =
    parseInt(window.getComputedStyle(rock1).getPropertyValue("bottom"));
    var rock2Bottom =
    parseInt(window.getComputedStyle(rock2).getPropertyValue("bottom"));
    var rock3Bottom =
    parseInt(window.getComputedStyle(rock3).getPropertyValue("bottom"));
    var rock4Bottom =
    parseInt(window.getComputedStyle(rock4).getPropertyValue("bottom"));

    if(characterLeft<55 && rock1Bottom <40 || 
       characterLeft>210 && rock4Bottom <40 ||
       characterLeft>125 && characterLeft<250 && rock3Bottom <40 ||
       characterLeft>30 && characterLeft<150 && rock2Bottom <40 ) {
            
            CHARACTER_HIT.play();
            showYouLose();
            rock1.style.animation = "none";
            rock2.style.animation = "none";
            rock3.style.animation = "none";
            rock4.style.animation = "none";
     }


    if (rock1Bottom == -24 || rock2Bottom == -24 || rock3Bottom == -24 || rock4Bottom == -24) {
         ROCK_HIT.play();
        }

    },1);

    const soundElement  = document.getElementById("sound");

    soundElement.addEventListener("click", audioManager);

    function audioManager() {

        ROCK_HIT.muted = ROCK_HIT.muted ? false : true;
        CHARACTER_HIT.muted = CHARACTER_HIT.muted ? false : true;
    }

const gameover = document.getElementById("gameover");
const youwin = document.getElementById("youwin");
const youlose = document.getElementById("youlose");
const restart = document.getElementById("restart");

restart.addEventListener("click", function(){
    location.reload(); 
})

function showYouWin(){
    gameover.style.display = "block";
    youwon.style.display = "block";
}

function showYouLose(){
    gameover.style.display = "block";
    youlose.style.display = "block";
}
