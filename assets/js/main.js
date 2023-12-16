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

  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("banner__timer").innerHTML = "EXPIRED";
  }
}, 1000);

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

function validateGeneralForm() {
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

/*=============== login validation ===============*/
function validateLoginForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("passwordError");

  emailError.textContent = "";
  passwordError.textContent = "";

  if (!isValidEmail(email)) {
    emailError.textContent = "Invalid email address";
    return false;
  }

  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters long";
    return false;
  }

  return true;
}

/*=============== register validation ===============*/

function validateRegisterForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("passwordError");

  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  // Name validation
  if (name.trim() === "") {
    nameError.textContent = "Name is required";
    return false;
  }

  // Email validation
  if (!isValidEmail(email)) {
    emailError.textContent = "Invalid email address";
    return false;
  }

  // Password validation
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters long";
    return false;
  }

  // Form is valid
  return true;
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/*=============== cart ===============*/
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Function to handle the "Add to Cart" button click
function addToCart() {
  event.preventDefault(); // Prevent the default behavior
  var cartClicks = getCookie("cartClicks") || 0;
  cartClicks++;
  setCookie("cartClicks", cartClicks, 30); // Store for 30 days, adjust as needed
  updateCount("cartBtn", cartClicks);
}

// Function to handle the "Add to Wishlist" button click
function addToWishlist() {
  event.preventDefault(); // Prevent the default behavior
  var wishlistClicks = getCookie("wishlistClicks") || 0;
  wishlistClicks++;
  setCookie("wishlistClicks", wishlistClicks, 30); // Store for 30 days, adjust as needed
  updateCount("wishlistBtn", wishlistClicks);
}

// Function to update the count displayed in the header
function updateCount(btnId, count) {
  var btn = document.getElementById(btnId);
  if (btn) {
    var countElement = btn.querySelector(".count");
    if (countElement) {
      countElement.textContent = count;
    }
  }
}
