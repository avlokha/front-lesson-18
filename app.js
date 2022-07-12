//1
let seconds = new Date().getSeconds(),
  minutes = new Date().getMinutes(),
  hours = new Date().getHours();

function showTime(sec, min, hour) {
  setInterval(() => {
    sec = new Date().getSeconds();
    min = new Date().getMinutes();
    hour = new Date().getHours();
    let clock = document.querySelector(".clock p");

    if (hour >= 10) {
      clock.innerHTML = `${hour} : `;
    } else {
      clock.innerHTML += `0${hour} : `;
    }
    if (min >= 10) {
      clock.innerHTML += `${min} : `;
    } else {
      clock.innerHTML += `0${min} : `;
    }
    if (sec >= 10) {
      clock.innerHTML += `${sec} `;
    } else {
      clock.innerHTML += `0${sec} `;
    }
    if (hour >= 12) {
      clock.innerHTML += `PM`;
    } else {
      clock.innerHTML += `AM`;
    }
  }, 1000);
}

//2

//3
