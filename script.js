var timer;
var initialTime = 0;
var timeLeft = 0;

function startTimer() {
  var hours = parseInt(prompt("Enter hours:"), 10) || 0;
  var minutes = parseInt(prompt("Enter minutes:"), 10) || 0;
  var seconds = parseInt(prompt("Enter seconds:"), 10) || 0;

  timeLeft = initialTime = hours * 3600 + minutes * 60 + seconds;

  if (timeLeft > 0) {
    updateDisplay();
    timer = setInterval(updateTimer, 1000);
  }
}

function updateTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    updateDisplay();
  } else {
    clearInterval(timer);
    alert("Timer expired!");
  }
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = initialTime = 0;
  startTimer(); // Prompt the user to enter a new time
}

function restartTimer() {
  clearInterval(timer);
  timeLeft = initialTime;
  updateDisplay();
  timer = setInterval(updateTimer, 1000);
}

function updateDisplay() {
  var hours = Math.floor(timeLeft / 3600);
  var minutes = Math.floor((timeLeft % 3600) / 60);
  var seconds = timeLeft % 60;

  var display =
    formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
  document.getElementById("display").innerText = display;
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
