//variables
const start = document.getElementById("startBtn");
const stop = document.getElementById("stopBtn");
const reset = document.getElementById("resetBtn");
let timer = document.getElementById("time");
let seconds = 0;
let intervalId;
//buttons
start.addEventListener('click', function() {
    intervalId = setInterval(function() { 
        seconds++;
        timer.textContent = seconds;
    },1000);
})

stop.addEventListener('click', function() {
    clearInterval(intervalId)
})

reset.addEventListener('click', function() {
    clearInterval(intervalId)
    seconds = 0
    timer.textContent = 0;
})
