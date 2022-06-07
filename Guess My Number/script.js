'use strict';



let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess) {
        document.querySelector('.message').textContent = "YOU HAVE NOT ENTERED A VALUE !";
    }
    else if(guess == secretnumber) {
        document.querySelector('.message').textContent = "CORRECT GUESS";

        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = "30rem";

        document.querySelector('.number').textContent = secretnumber;

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if(guess !== secretnumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = guess > secretnumber ? "YOUR INPUT IS TOO HIGH!" : "YOUR INPUT IS TOO LOW!";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = "YOU LOST THE GAME!";
        }
    }

})



document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretnumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";
    document.querySelector('.message').textContent = "START GUESSING...";
    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = "#222"
    document.querySelector('.number').style.width = "15rem";
})
