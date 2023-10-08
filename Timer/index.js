document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
}

var timer;

function startTimer() {
    var seconds = document.getElementById("timerInput").value;
    var countdownElement = document.getElementById("countdown");
    
    if (seconds && !isNaN(seconds)) {
        clearInterval(timer);
        var countdown = seconds;
        timer = setInterval(function() {
            countdownElement.innerHTML = "Verbleibende Zeit: " + countdown + " Sekunden";
            countdown--;
            if (countdown < 0) {
                clearInterval(timer);
                navigator.vibrate(1000);
                countdownElement.innerHTML = "Time's up!";
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "Timer angehalten";
}
