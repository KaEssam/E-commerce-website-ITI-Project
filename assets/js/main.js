/*=============== sales timer ===============*/

const countDownDate = new Date("Dec 31, 2023 00:00:00").getTime();

const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("sales__timer").innerHTML = "EXPIRED";
    document.getElementById("banner__timer").innerHTML = "EXPIRED";
  }
}, 1000);

/*=============== sales slider ===============*/

const sliderWrapper = document.getElementById("sliderWrapper");
const prevButton = document.querySelector(
  ".prodact__sales-control .btn:first-child"
);
const nextButton = document.querySelector(
  ".prodact__sales-control .btn:last-child"
);

let currentPosition = 0;

function updateSlider() {
  sliderWrapper.style.transform = `translateX(${-currentPosition * 100}%)`;
}

function goToNextSlide() {
  currentPosition = Math.min(currentPosition + 1, 2); // Assuming you have 3 slides
  updateSlider();
}

function goToPrevSlide() {
  currentPosition = Math.max(currentPosition - 1, 0);
  updateSlider();
}

prevButton.addEventListener("click", goToPrevSlide);
nextButton.addEventListener("click", goToNextSlide);

/*=============== rating ===============*/

document.addEventListener("DOMContentLoaded", function () {
  const ratingContainers = document.querySelectorAll(".rate");

  ratingContainers.forEach((container) => {
    const stars = container.querySelectorAll(".rate__stars img");
    const reviews = container.querySelector(".rate__reviews");
    let userRating = 0;

    stars.forEach((star, index) => {
      star.addEventListener("mouseover", () => highlightStars(index));
      star.addEventListener("mouseout", () => highlightStars(userRating - 1));
      star.addEventListener("click", () => {
        userRating = index + 1;
        updateRating();
      });
    });

    function highlightStars(index) {
      stars.forEach((star, i) => {
        if (i <= index) {
          star.src = "/assets/img/star-fill.png";
        } else {
          star.src = "/assets/img/star-empty.png";
        }
      });
    }

    function updateRating() {
      reviews.textContent = `(${userRating} ${
        userRating === 1 ? "Review" : "Reviews"
      })`;
    }
  });
});

/*=============== form validation ===============*/

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  if (name === "" || email === "" || phone === "" || message === "") {
    alert("All fields must be filled out");
    return false;
  }

  // Validate name format
  var nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(name)) {
    alert("Invalid name format. Only letters and spaces are allowed.");
    return false;
  }

  // Validate email format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email format");
    return false;
  }

  return true;
}
