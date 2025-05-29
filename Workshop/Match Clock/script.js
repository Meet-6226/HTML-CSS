let timer1 = 29 * 60 + 14; 
let timer2 = 32 * 60 + 55; 
let interval;

const displayTimers = () => {
    document.getElementById('team1').querySelector('span').innerText = formatTime(timer1);
    document.getElementById('team2').querySelector('span').innerText = formatTime(timer2);
}

const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

document.getElementById('start').addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(() => {
        timer1--;
        timer2--;
        displayTimers();
        if (timer1 <= 0 || timer2 <= 0) clearInterval(interval);
    }, 1000);
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(interval);
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(interval);
    timer1 = 29 * 60 + 14;
    timer2 = 32 * 60 + 55;
    displayTimers();
});

displayTimers();