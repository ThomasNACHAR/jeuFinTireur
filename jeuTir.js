let container = document.querySelector(".container");
let button = document.querySelector(".startButton");
let scoreContainer = document.querySelector(".score");
let timerContainer = document.querySelector(".time");
let shot = new Audio('shot.mp3');
let music = new Audio('music.mp3');
let gameover = new Audio('gameover.mp3');
let youwin = new Audio('youwin.mp3');

button.onclick = function(){
    music.load();
    music.play();
    let score = 0;
    let mort = true;
    let temps = 5000;
    let testInit = true;
    container.innerHTML = "";

    let interval = setInterval(function showTarget(){
        const timer = {shot: 2};
        let ennemi = Math.floor(Math.random() * 7);
        let target = document.createElement("img");
        switch (ennemi) {
            case 0:
                target.id = "bandit1";
                target.src="bandit1.jpg";
                break;
            case 1:
                target.id = "bandit2";
                target.src="bandit2.jpg";
                break;
            case 2:
                target.id = "bandit3";
                target.src="bandit3.png";
                break;
            case 3:
                target.id = "bandit4";
                target.src="bandit4.png";
                break;
            case 4:
                target.id = "bandit5";
                target.src="bandit5.png";
                break;
            case 5:
                target.id = "bandit6";
                target.src="bandit6.png";
                break;
            case 6:
                target.id = "bandit7";
                target.src="bandit7.jpg";
                break;
            default:
                break;  
        }
        target.style.top = Math.random() * (400 - target.offsetHeight) + 'px';
        target.style.left = Math.random() * (500 - target.offsetWidth) + 'px';
        container.appendChild(target); 
        let intervalTimer = setInterval(function timerShot(){
            timerContainer.innerHTML = `Time : ${timer.shot}`;
            timer.shot-=0.1;
            if (timer.shot<=0) {
                timerContainer.innerHTML = `Time : ${timer.shot}`;
                shot.play();
                music.pause();
                clearInterval(intervalTimer);
                clearInterval(interval);
                let over = document.createElement("img");
                over.id = "gameover";
                over.src="gameover.jpeg";
                container.appendChild(over); 
                gameover.play();
            }
            if (score>=50) {
                let win = document.createElement("img");
                music.pause();
                win.id = "gameover";
                win.src="youwin.jpg";
                container.appendChild(win); 
                youwin.play();
                clearInterval(intervalTimer);
                clearInterval(interval);

            }

        }, 100)  
    target.onclick = function(){
        clearInterval(intervalTimer);
        timer.shot=3;
        timerContainer.innerHTML = `Time : 0`;
        mort = true;
        temps>=200 ? temps-=100 : temps+=0;
        shot.play();
        score+=1;
        scoreContainer.innerHTML = `Score : ${score}`;
        target.style.display = "none"
        
            
    }
}, temps)



if (time==0) {
    clearInterval(interval);
    container.HTML = "Jeu terminé !"
}}