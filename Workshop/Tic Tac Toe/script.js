const boxes = document.querySelectorAll('.box');
const restartGame = document.querySelector('#restart-game');
const newGame = document.querySelector('#new-game');
const msgContainer = document.querySelector('.msg-container');
const msg = document.querySelector('.msg');

let turnO = true;
let moves = 0;

const winnerPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

const disabledBoxes = () => {
    for (let box of boxes) {
        box.classList.add('disabled');
        box.style.pointerEvents = 'none';
    }
};

const enabledBoxes = () => {
    for (let box of boxes) {
        box.classList.remove('disabled');
        box.innerText = '';
        box.style.pointerEvents = 'auto';
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disabledBoxes();
};

const draw = () => {
    if (moves === 9) {
        msg.innerText = `Match Tied`;
        msgContainer.classList.remove('hide');
        disabledBoxes();
    }
};

const checkWinner = () => {
    for (let pattern of winnerPattern) {
        const pos1 = boxes[pattern[0]].innerText;
        const pos2 = boxes[pattern[1]].innerText;
        const pos3 = boxes[pattern[2]].innerText;

        if (pos1 && pos2 && pos3 && pos1 === pos2 && pos2 === pos3) {
            showWinner(pos1);
            return true;
        }
    }
    return false;
};

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (!box.innerText) {
            box.innerText = turnO ? 'O' : 'X';
            turnO = !turnO;
            box.style.pointerEvents = 'none';
            moves++;

            if (!checkWinner()) {
                draw();
            }
        }
    });
});

const restart = () => {
    msgContainer.classList.add('hide');
    turnO = true;
    moves = 0;
    enabledBoxes();
};

restartGame.addEventListener('click', restart);
newGame.addEventListener('click', restart);
