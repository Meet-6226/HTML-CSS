count=0;

function Increment() {
    count++;
    document.getElementById('count-value').innerHTML=`Counter Value : ${count}`
}

function Decrement() {
    count--;
    document.getElementById('count-value').innerHTML=`Counter Value : ${count}`
}

function Reset() {
    count=0;
    document.getElementById('count-value').innerHTML=`Counter Value : ${count}`
}