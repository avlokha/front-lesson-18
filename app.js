// 1

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

showTime(seconds, minutes, hours);

// 2

const nextBtn = document.querySelector("#next"),
  prevBtn = document.querySelector("#prev"),
  sliders = document.querySelectorAll(".slider-item"),
  circles = document.querySelectorAll(".circle"),
  startAutoSliding = document.querySelector("#start-auto"),
  stopAutoSliding = document.querySelector("#stop-auto");

let activeIndex = 0;

console.log("sliders", sliders);

function initSlider() {
  nextBtn.addEventListener("click", showNextSlide);
  prevBtn.addEventListener("click", showPrevSlide);

  renderSlides();

  document.addEventListener("keyup", (e) => {
    console.log(e);

    if (e.code === "ArrowLeft") {
      showNextSlide();
    }
  });
}

function renderSlides() {
  console.log("activeIndex", activeIndex);
  sliders.forEach((slide, i) => {
    if (i === activeIndex) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
  circles.forEach((circle, i) => {
    if (i === activeIndex) {
      circle.classList.add("grey");
    } else {
      circle.classList.remove("grey");
    }
  });
}

circles.forEach((circle, i) => {
  circle.addEventListener("click", function () {
    stopIntervalFnSlider();
    activeIndex = i;
    renderSlides();
  });
});

//
function showNextSlide() {
  if (activeIndex === sliders.length - 1) {
    activeIndex = 0;
  } else {
    activeIndex++;
  }

  renderSlides();
}

function showPrevSlide() {
  if (activeIndex === 0) {
    activeIndex = sliders.length - 1;
  } else {
    activeIndex--;
  }

  renderSlides();
}

let autoSlidingId = null,
  isSlidingInProcess = false,
  sliderImg = document.querySelector(".slider-wall img"),
  isSlidingStopped = true;

function startIntervalFnSlider() {
  autoSlidingId = setInterval(showNextSlide, 3000);
  isSlidingInProcess = true;
}

function stopIntervalFnSlider() {
  clearInterval(autoSlidingId);
  isSlidingStopped = true;
  isSlidingInProcess = false;
}

startAutoSliding.addEventListener("click", startIntervalFnSlider);
stopAutoSliding.addEventListener("click", stopIntervalFnSlider);

initSlider();

sliderImg.addEventListener("mouseenter", function () {
  if (isSlidingInProcess === true) {
    stopIntervalFnSlider();
    isSlidingStopped = false;
  }
});

sliderImg.addEventListener("mouseleave", function () {
  if (isSlidingStopped === false) {
    startIntervalFnSlider();
  }
});
