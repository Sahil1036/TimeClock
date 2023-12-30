function playmusic() {
  let aud = new Audio("paft-drunk-mro-80x27s-square-lead-mix-147266.mp3");
  aud.play();
}
// Clock script
// Time script
const fun = () => {
  let hour = document.getElementsByClassName("hour");
  let min = document.getElementsByClassName("min");
  let sec = document.getElementsByClassName("sec");
  let format = document.getElementsByClassName("format");
  let time = new Date();

  let h = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  hour[0].innerHTML = `${h < 10 ? "0" + h : h}`;
  min[0].innerHTML = `${m < 10 ? "0" + m : m}`;
  sec[0].innerHTML = `${s < 10 ? "0" + s : s}`;

  format[0].innerHTML = time.getHours() >= 12 ? "PM" : "AM";

  // For Main Interface
  let img_time = document.getElementsByClassName("img_time");
  img_time[0].innerHTML =
    hour[0].innerHTML +
    ":" +
    min[0].innerHTML +
    ":" +
    sec[0].innerHTML +
    " " +
    format[0].innerHTML;
  setTimeout(fun, 1000);
};
fun();

// Date script
(function () {
  // const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = document.getElementsByClassName("Time_date");
  let img_date = document.getElementsByClassName("img_date");
  let day = document.getElementsByClassName("Time_day");
  let img_day = document.getElementsByClassName("img_day");
  let time = new Date();
  day[0].innerHTML = weekday[time.getDay()];
  img_day[0].innerHTML = weekday[time.getDay()];
  date[0].innerHTML =
    time.getDate() + " " + month[time.getMonth()] + " " + time.getFullYear();
  img_date[0].innerHTML =
    time.getDate() + " " + month[time.getMonth()] + " " + time.getFullYear();
})();

// stop watch
let hour = (min = sec = 0);
let isrun = 0;
let intervals;

let start = document.getElementById("stop_watch_start");
let stop = document.getElementById("stop_watch_stop");
let stop_watch = document.getElementById("stop_watch");
start.addEventListener("click", start_clock);
stop.addEventListener("click", stop_clock);
function start_clock() {
  if (isrun == 0) {
    intervals = setInterval(run_clock, 1000);
    isrun = 1;
    start.innerHTML = "pause";
  } else {
    clearInterval(intervals);
    isrun = 0;
    start.innerHTML = "resume";
  }
}

function stop_clock() {
  hour = min = sec = 0;
  stop_watch.innerHTML = `${hour < 10 ? "0" + hour : hour}:${
    min < 10 ? "0" + min : min
  }:${sec < 10 ? "0" + sec : sec}`;
  clearInterval(intervals);
  isrun = 0;
  start.innerHTML = "start";
}

const run_clock = () => {
  sec++;
  if (sec === 60) {
    sec = 0;
    min++;
    if (min === 60) {
      min = 0;
      hour++;
    }
  }
  stop_watch.innerHTML = `${hour < 10 ? "0" + hour : hour}:${
    min < 10 ? "0" + min : min
  }:${sec < 10 ? "0" + sec : sec}`;
};

// Alarm
let set_sound;
let Set_alarm = document.getElementById("Set_alarm");
Set_alarm.addEventListener("click", () => {
  let Alarm_hour = document.getElementById("Alarm_hours");
  let Alarm_min = document.getElementById("Alarm_min");
  let Alarm_sec = document.getElementById("Alarm_sec");
  let Alarm_format = document.getElementById("Alarm_format");
  let Alarm_record = document.querySelector("#Alarm_record");

  let hours = parseInt(Alarm_hour.value) || 0;
  let minutes = parseInt(Alarm_min.value) || 0;
  let seconds = parseInt(Alarm_sec.value) || 0;
  let totalTime;
  let time = new Date();
  totalCurrentTime =
    time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds();
  if (Alarm_format.value === "AM") {
    totalTime = hours * 3600 + minutes * 60 + seconds;
    if (12 + hours === 24) {
      totalTime = 0 * 3600 + minutes * 60 + seconds;
    }
  } else {
    if (hours === 12) {
      totalTime = hours * 3600 + minutes * 60 + seconds;
    } else {
      totalTime = (12 + hours) * 3600 + minutes * 60 + seconds;
    }
  }
  if (totalTime > totalCurrentTime) {
    totalTime = totalTime - totalCurrentTime;
    clearTimeout(set_sound);
    set_sound = setTimeout(Sound, (totalTime - 1) * 1000);
    function Sound() {
      setTimeout(() => {
        Alarm_record.innerHTML = "";
      }, 5000);
      playmusic();
    }
  } else {
    totalTime = totalCurrentTime - totalTime;
    totalTime = 86400 - totalTime;
    clearTimeout(set_sound);
    set_sound = setTimeout(Sound, (totalTime - 1) * 1000);
    function Sound() {
      setTimeout(() => {
        Alarm_record.innerHTML = "";
      }, 5000);
      playmusic();
    }
  }
  let hoursLeft = Math.floor(totalTime / 3600);
  let minutesLeft = Math.floor((totalTime % 3600) / 60);
  let secondsLeft = totalTime % 60;

  // let element = document.createElement("div");
  // if (!Alarm_hour.value) {
  //   alert("please insert alarm");
  // } else {
  //   element.innerHTML = `${Alarm_hour.value.padStart(
  //     2,
  //     "0"
  //   )}:${Alarm_min.value.padStart(2, "0")}:${Alarm_sec.value.padStart(
  //     2,
  //     "0"
  //   )} ${Alarm_format.value} <p>${hoursLeft
  //     .toString()
  //     .padStart(2, "0")}:${minutesLeft
  //     .toString()
  //     .padStart(2, "0")}:${secondsLeft
  //     .toString()
  //     .padStart(2, "0")}</p> <button class="Alarm_delete">delete</button>`;
  //   Alarm_record.appendChild(element);

  //   let Alarm_delete = document.getElementsByClassName("Alarm_delete");
  //   let arr_Alarm_delete = Array.from(Alarm_delete);
  //   arr_Alarm_delete.forEach((e) => {
  //     e.addEventListener("click", (element) => {
  //       element.target.parentElement.remove();
  //       clearTimeout(set_sound);
  //     });
  //   });
  // }
  Alarm_record.innerHTML = `<div><p class="Time_content">${Alarm_hour.value.padStart(
    2,
    "0"
  )}:${Alarm_min.value.padStart(2, "0")}:${Alarm_sec.value.padStart(2, "0")} ${
    Alarm_format.value
  }</p> <button class="Alarm_delete">delete</button></div>`;

  let Alarm_delete = document.getElementsByClassName("Alarm_delete");
  Alarm_delete[0].addEventListener("click", (element) => {
    const sound = new Audio("mixkit-clear-mouse-clicks-2997.wav");
    sound.play();
    element.target.parentElement.remove();
    clearTimeout(set_sound);
    // let Alarm = document.querySelector("#Alarm_record");
    // let element = document.createElement("div");
    // Alarm.appendChild(element);
  });

  let Rest_time = document.getElementsByClassName("Rest_time");
  Rest_time[0].innerHTML = `Time Left ${hoursLeft
    .toString()
    .padStart(2, "0")}:${minutesLeft.toString().padStart(2, "0")}:${secondsLeft
    .toString()
    .padStart(2, "0")} `;
    Rest_time[0].style.display="flex";
    setTimeout(() => {
      Rest_time[0].style.transform="translateX(750px)";
    }, 2000);
    setTimeout(() => {
      Rest_time[0].style.display="none";
      Rest_time[0].style.transform="translateX(0px)";
    }, 5000);
});

// timer
let timer;
let hoursInput = document.getElementById("hours");
let minutesInput = document.getElementById("minutes");
let secondsInput = document.getElementById("seconds");
let timerDisplay = document.getElementById("timer");

function startTimer() {
  clearInterval(timer);
  let hours = parseInt(hoursInput.value) || 0;
  let minutes = parseInt(minutesInput.value) || 0;
  let seconds = parseInt(secondsInput.value) || 0;

  let totalTime = hours * 3600 + minutes * 60 + seconds;

  if (totalTime > 0) {
    let timer_start = function () {
      let hoursLeft = Math.floor(totalTime / 3600);
      let minutesLeft = Math.floor((totalTime % 3600) / 60);
      let secondsLeft = totalTime % 60;

      timerDisplay.innerHTML = `<p class="Time_content">${hoursLeft
        .toString()
        .padStart(2, "0")}:${minutesLeft
        .toString()
        .padStart(2, "0")}:${secondsLeft.toString().padStart(2, "0")}</p>
        <div class="button_box">
                <button id="Timer_pause">pause</button>
                <button id="Timer_stop">stop</button>
            </div>`;

      if (totalTime <= 0) {
        clearInterval(timer);
        timerDisplay.textContent = "Time's up!";
        const sound = new Audio("brahma-rooster-89888.mp3");
        sound.play();
        setTimeout(() => {
          timerDisplay.textContent = "";
        }, 5000);
      }

      let Timer_pause = document.getElementById("Timer_pause");
      let Timer_stop = document.getElementById("Timer_stop");
      Timer_stop.addEventListener("click", () => {
        const sound = new Audio("mixkit-clear-mouse-clicks-2997.wav");
    sound.play();
        clearInterval(timer);
        timerDisplay.textContent = "";
      });
      let run = 0;
      Timer_pause.addEventListener("click", () => {
        const sound = new Audio("mixkit-clear-mouse-clicks-2997.wav");
    sound.play();
        if (run === 0) {
          clearInterval(timer);
          run = 1;
          Timer_pause.innerHTML = "Resume";
        } else {
          timer = setInterval(timer_start, 1000);
          run = 0;
          Timer_pause.innerHTML = "pause";
        }
      });
      totalTime--;
    };
    timer = setInterval(timer_start, 1000);
  } else {
    timerDisplay.textContent = "Invalid time";
    setTimeout(() => {
      timerDisplay.textContent = "";
    }, 5000);
  }
}

// click on button
let button = document.getElementsByTagName("button");
button = Array.from(button);
button.forEach((e) => {
  e.addEventListener("click", () => {
    const sound = new Audio("mixkit-cool-interface-click-tone-2568.wav");
    sound.play();
  });
});

// Add select option
function populateSelectOptions(selectId, start, end) {
  const select = document.getElementById(selectId);

  for (let i = start; i <= end; i++) {
    const option = document.createElement("option");
    option.text = i < 10 ? "0" + i : i.toString();
    select.add(option);
  }
}

//Timer hours, minutes, and seconds
populateSelectOptions("hours", 0, 23);
populateSelectOptions("minutes", 0, 59);
populateSelectOptions("seconds", 0, 59);

//Alarm hours, minutes, and seconds
populateSelectOptions("Alarm_hours", 1, 12);
populateSelectOptions("Alarm_min", 0, 59);
populateSelectOptions("Alarm_sec", 0, 59);

let img = document.querySelectorAll(".icon img");
let clock = document.getElementById("Clock");
let Timer = document.getElementById("Timer");
let Stopwatch = document.getElementById("Stopwatch");
let Alarm = document.getElementById("Alarm");
img = Array.from(img);
img.forEach((e) => {
  e.addEventListener("click", (e) => {
    const sound = new Audio("mixkit-cool-interface-click-tone-2568.wav");
    sound.play();
    All_clear();
    let value = e.target.name;
    e.target.classList.add("active");
    // e.target.style.backgroundColor = "blueviolet";
    // e.target.style.filter = "none";
    if (value === "Clock") {
      clock.style.display = "flex";
    } else if (value === "Stopwatch") {
      Stopwatch.style.display = "flex";
    } else if (value === "Timer") {
      Timer.style.display = "flex";
    } else {
      Alarm.style.display = "flex";
    }
  });
});

// img.forEach(e=>{
//   e.addEventListener("mousedown",(e)=>{
//     e.target.style.backgroundColor="blueviolet";
//       e.target.style.filter="none";
//   })
// });

function All_clear() {
  img.forEach((e) => {
    e.classList.remove("active");
    // e.style.backgroundColor = "transparent";
    // e.style.filter = "invert(1)";
  });
  clock.style.display = "none";
  Stopwatch.style.display = "none";
  Timer.style.display = "none";
  Alarm.style.display = "none";
}
