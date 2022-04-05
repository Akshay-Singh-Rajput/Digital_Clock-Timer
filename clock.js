setInterval(displayClock, 1000);
function displayClock() {
  let time = new Date();
  //   console.log(time)
  let hrs = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let fullday = time.toDateString();
  //   console.log(year,month,day, fullday)

  if (hrs > 12) {
    en = "PM";
  }
  if (hrs < 12) {
    en = "AM";
  }

  if (hrs > 12) {
    hrs = hrs - 12;
  }
  if (hrs == 0) {
    hrs = 12;
  }
  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  document.querySelector("#clock").innerHTML = `${hrs}:${min}:${sec} ${en}`;
  document.querySelector("#day").innerHTML = `${fullday}`;
}

const timer = document.getElementById("stopwatch");

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
    stoptime = false;
    timerCycle();
    document.getElementById("startPause").innerHTML = "Pause"
  }else  if (stoptime == false) {
    document.getElementById("startPause").innerHTML = "Start"

    stoptime = true;
  }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
  if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = "0" + sec;
    }
    if (min < 10 || min == 0) {
      min = "0" + min;
    }
    if (hr < 10 || hr == 0) {
      hr = "0" + hr;
    }

    timer.innerHTML = `${hr} : ${min} : ${sec}`;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
  hr = 0;
  min = 0;
  sec = 0;
  timer.innerHTML = "00:00:00";
  stoptime = true;
  document.getElementById("startPause").innerHTML = "Start"

}
