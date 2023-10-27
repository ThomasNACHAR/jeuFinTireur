let button = document.querySelector(".startButton");
let shot = new Audio('shot.mp3');
button.onclick = function(){
    shot.play();
}