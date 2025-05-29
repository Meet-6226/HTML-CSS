let hours=0
let minutes=0
let seconds=0
let miliseconds=0
let Interval=null;

function showTime(){
    const format=(val)=>val.toString().padStart(2,0);
    document.getElementById('clock').innerHTML=`${format(hours)}:${format(minutes)}:${format(seconds)}:${format(miliseconds)}`
}

function start() {
    interval=setInterval(()=>{
        miliseconds++;
        if (miliseconds==100){
            miliseconds=0;
            seconds++;
        }

        if (seconds==60){
            seconds=0;
            minutes++;
        }

        if (minutes==60){
            minutes=0;
            hours++;
        }
        showTime();
    },10)
}

function stop() {
    clearInterval(interval);
    interval=null;
}

function reset() {
    stop();
    hours=0;
    minutes=0;
    seconds=0;
    miliseconds=0;
    showTime();
}