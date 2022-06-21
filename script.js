//variables
const start = document.getElementById("startBtn");
const stop = document.getElementById("stopBtn");
const reset = document.getElementById("resetBtn");
let timer = document.getElementById("time");
count = 0;

//buttons
start.addEventListener('click', function() {
    setInterval(function() {
        count ++;
        timer.textContent = count;
    })
})
stop.addEventListener('click', function() {
    
})
reset.addEventListener('click', function() {
    console.log("reset");
})

//time
