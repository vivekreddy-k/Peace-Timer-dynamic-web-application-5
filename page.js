let timerDisplay = document.getElementById("timerText");

let twentySeconds = document.getElementById("twentySecondsBtn");
let thirtSeconds = document.getElementById("thirtySecondsBtn");
let fortySeconds = document.getElementById("fortySecondsBtn");
let oneMinute = document.getElementById("oneMinuteBtn");
let timeCompletedText = "Your moment is completed !";
let secondsLeft = 0
let intervalId
clearTimer = () => {
    clearInterval(intervalId)
}
clearTime = () => {
    secondsLeft = 0
    timerDisplay.textContent = ""
    clearTimer()
}
setTimeAndShow = () => {
    timerDisplay.textContent = secondsLeft
    intervalId = setInterval(startTimer, 1000)
}
twentySeconds.onclick = () => {
    //clearTime()
    secondsLeft = 20
    clearTimer()
    setTimeAndShow()
}

thirtSeconds.onclick = () => {
    //clearTime()
    secondsLeft = 30
    clearTimer()
    setTimeAndShow()
}
fortySeconds.onclick = () => {
    secondsLeft = 40
    clearTimer()
    setTimeAndShow()
}
oneMinute.onclick = () => {
    secondsLeft = 60
    clearTimer()
    setTimeAndShow()
}

startTimer = () => {
    if (secondsLeft > 1) {
        secondsLeft = secondsLeft - 1
        timerDisplay.textContent = secondsLeft + " second left"
    } else {
        clearInterval()
        timerDisplay.textContent = timeCompletedText
    }
}
