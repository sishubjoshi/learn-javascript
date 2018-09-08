// UI elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessInput = document.querySelector('#guess-input');
const guessBtn = document.querySelector('#guess-btn');
const message = document.querySelector('.message');

// per game
let min = 1,
    max = 10,
    correctNumber = 2,
    chances = 3;
minNum.textContent = min;
maxNum.textContent = max;


guessBtn.addEventListener('click', () => {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 10) {
        displayMessage(`your guess is incorrect, enter a number between ${min} and ${max} `, 'red');
    } else {
        if (guess === correctNumber) {
            gameOver(true, `your guess is correct, You WIN!!!`);
        } else {
            chances -= 1;
            if (chances === 0) {
                gameOver(false, `GAME OVER... try again`);
            } else {
                displayMessage(`guess is incorrect, you have ${chances} left`, 'red');
            }
        }
    }

});



// display message
let displayMessage = (msg, color) => {
    message.textContent = msg;
    message.style.color = color;
}

// game over
let gameOver = (result, msg) => {
    guessBtn.disabled = true;
    let color;
    result ? color = 'green' : color = 'red';

    if (result) {
        guessInput.style.borderColor = 'green';
    } else {
        guessInput.style.borderColor = 'red';
    }

    displayMessage(msg, color);
}