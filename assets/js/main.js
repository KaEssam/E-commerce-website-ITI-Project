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
  sliderWrapper.style.transform = `translateX(${currentPosition * 100}%)`;
}

function goToNextSlide() {
  currentPosition = Math.min(currentPosition + 1, 2);
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

/*=============== login validation ===============*/
function validateForm() {
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

function isValidEmail(email) {
  // Simple email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/*=============== register validation ===============*/

function validateForm() {
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

/*=============== search validation ===============*/

// Sample product data array
const products = [
  {
    imagePath: "/assets/img/items/item-1.png",
    productName: "HAVIT HV-G92 Gamepad",
    productPrice: "$50.00",
  },

  {
    imagePath: "/assets/img/proudact/image 59.png",
    productName: "HAVIT ",
    productPrice: "$30.00",
  },
  // Add more product objects as needed
];

// get the file path that is loaded now
const currentPath = window.location.pathname;

// on load a specific page, using domcontentloaded event to check if the page is the search page

// Get the existing container by ID
const existingContainer = document.getElementById("products-items");
alert("YA WELAD EL KALB");

// Iterate over the products array
products.forEach((product) => {
  // Extract relevant information from the product
  const { imagePath, productName, productPrice } = product;
  alert(imagePath);
  alert(productName);
  alert(productPrice);

  // Create a template literal for the HTML structure
  existingContainer.innerHTML += `
              <div class="cart__item">
                <div class="prodact__item">
                  <div class="image-content">
                    <span class="overlay"></span>
                    <div class="item-image">
                      <img
                        src="${imagePath}"
                        class="item-img"
                        alt=""
                      />
                      <div class="item_top_icons">
                        <a href="#">
                          <svg
                            class="item_top_icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z"
                              stroke="black"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </a>
                        <a href="#"
                          ><svg
                            class="item_top_icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="16"
                            viewBox="0 0 22 16"
                            fill="none"
                          >
                            <path
                              d="M20.257 6.962C20.731 7.582 20.731 8.419 20.257 9.038C18.764 10.987 15.182 15 11 15C6.81801 15 3.23601 10.987 1.74301 9.038C1.51239 8.74113 1.38721 8.37592 1.38721 8C1.38721 7.62408 1.51239 7.25887 1.74301 6.962C3.23601 5.013 6.81801 1 11 1C15.182 1 18.764 5.013 20.257 6.962V6.962Z"
                              stroke="black"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z"
                              stroke="black"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            /></svg
                        ></a>
                      </div>
                      <div class="item-btn">
                        <a href="#" class="btn">Add to Cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="prodact-info">
                  <h4 class="prodact-title">${productName}</h4>
                  <div class="prodact-price">
                    <span class="prodact-price-new">${productPrice}</span>

                    <div class="prodact-rate">
                      <div class="rate">
                        <div class="rate__stars">
                          <img
                            class="star-empty"
                            src="/assets/img/star-empty.png"
                            alt=""
                          />
                          <img
                            class="star-empty"
                            src="/assets/img/star-empty.png"
                            alt=""
                          />
                          <img
                            class="star-empty"
                            src="/assets/img/star-empty.png"
                            alt=""
                          />
                          <img
                            class="star-empty"
                            src="/assets/img/star-empty.png"
                            alt=""
                          />
                          <img
                            class="star-empty"
                            src="/assets/img/star-empty.png"
                            alt=""
                          />
                        </div>
                        <div class="rate__reviews">(20)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="cart__item">
                <div class="prodact__item">
                  <div class="image-content">
                    <span class="overlay"></span>
                    <div class="item-image">
                      <img
                        src="/assets/img/proudact/image 59.png"
                        class="item-img"
                        alt=""
                      />
                      <div class="item_top_icons">
                        <a href="#">
                          <svg
                            class="item_top_icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z"
                              stroke="black"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </a>
                        <a href="#"
                          ><svg
                            class="item_top_icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="16"
                            viewBox="0 0 22 16"
                            fill="none"
                          >
                            <path
                              d="M20.257 6.962C20.731 7.582 20.731 8.419 20.257 9.038C18.764 10.987 15.182 15 11 15C6.81801 15 3.23601 10.987 1.74301 9.038C1.51239 8.74113 1.38721 8.37592 1.38721 8C1.38721 7.62408 1.51239 7.25887 1.74301 6.962C3.23601 5.013 6.81801 1 11 1C15.182 1 18.764 5.013 20.257 6.962V6.962Z"
                              stroke="black"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z"
                              stroke="black"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            /></svg
                        ></a>
                      </div>
                      <div class="item-btn">
                        <a href="#" class="btn">Add to Cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="prodact-info">
                  <h4 class="prodact-title">HAVIT HV-G92 Gamepad</h4>
                  <div class="prodact-price">
                    <span class="prodact-price-new">$50.00</span>

                    <div class="prodact-rate">
                      <div class="rate">
                        <div class="rate__stars">
                          <img
                            class="star-empty"
                            src="/assets/img/star-empty.png"
                            alt=""
                          />
                          <img
                            class="star-empty"
                            src="/assets/img/star-empty.png"
                            alt=""
                          />
                          <img
                            class="star-empty"
                            src="/assets/img/star-empty.png"
                            alt=""
                          />
                          <img
                            class="star-empty"
                            src="/assets/img/star-empty.png"
                            alt=""
                          />
                          <img
                            class="star-empty"
                            src="/assets/img/star-empty.png"
                            alt=""
                          />
                        </div>
                        <div class="rate__reviews">(20)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  `;

  // Create a new div element
  existingContainer.innerHTML += cartItemTemplate;
});
