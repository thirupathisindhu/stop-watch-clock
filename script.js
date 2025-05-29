let timer;
let hr = 0, min = 0, sec = 0, count = 0;
let running = false;

function updateDisplay() {
  const format = (unit) => (unit < 10 ? "0" + unit : unit);
  document.getElementById("display").innerText = 
    `${format(hr)} : ${format(min)} : ${format(sec)} : ${format(count)}`;
}

function stopwatch() {
  if (running) {
    count++;
    if (count === 100) {
      count = 0;
      sec++;
    }
    if (sec === 60) {
      sec = 0;
      min++;
    }
    if (min === 60) {
      min = 0;
      hr++;
    }
    updateDisplay();
    timer = setTimeout(stopwatch, 10);
  }
}

function start() {
  if (!running) {
    running = true;
    stopwatch();
  }
}

function pause() {
  running = false;
  clearTimeout(timer);
}

function reset() {
  running = false;
  clearTimeout(timer);
  hr = min = sec = count = 0;
  updateDisplay();
}

function restart() {
  reset();
  start();
}

function lap() {
  if (!running) return;
  const lapTime = document.createElement("li");
  lapTime.innerText = document.getElementById("display").innerText;
  document.getElementById("laps").appendChild(lapTime);
}

function resetLap() {
  document.getElementById("laps").innerHTML = "";
}
