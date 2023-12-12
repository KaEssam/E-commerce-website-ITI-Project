/*=============== reusable footer ===============*/

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
      <div class="footer-container">
        <div class="footer__info">
          <div class="footer__logo">
            <a href="#" class="footer-link">Exclusive</a>
          </div>
          <a href="#" class="Subscribe">Subscribe</a>
          <div class="footer__text">
            <p>Get 10% off your first order</p>
          </div>
          <div class="footer__input">
            <input
              class="input-text"
              type="text"
              placeholder="Enter your email"
            />
            <a href=""
              ><img class="send" src="/assets/img/icon-send.png" alt=""
            /></a>
          </div>
        </div>

        <div class="footer__info">
          <div class="footer__title">
            <h4>Account</h4>
          </div>
          <div class="footer__links">
            <a href="#" class="footer__link">My Account</a>
            <a href="#" class="footer__link">Login / Register</a>
            <a href="#" class="footer__link">Cart</a>
            <a href="#" class="footer__link">Shop</a>
            <a href="#" class="footer__link">Wishlist</a>
          </div>
        </div>

        <div class="footer__info">
          <div class="footer__title">
            <h4>Information</h4>
          </div>
          <div class="footer__links">
            <a href="#" class="footer__link">About Us</a>
            <a href="#" class="footer__link">Delivery Information</a>
            <a href="#" class="footer__link">Privacy Policy</a>
            <a href="#" class="footer__link">Terms & Conditions</a>
            <a href="#" class="footer__link">Contact Us</a>
            <a href="#" class="footer__link">Returns</a>
          </div>
        </div>

        <div class="footer__info">
          <div class="footer__title">
            <h4>Support</h4>
          </div>
          <div class="footer__links">
            <a href="#" class="footer__link">Help Center</a>
            <a href="#" class="footer__link">Returns</a>
            <a href="#" class="footer__link">Product Recalls</a>
            <a href="#" class="footer__link">Accessibility</a>
            <a href="#" class="footer__link">Contact Us</a>
            <a href="#" class="footer__link">Store Pickup</a>
          </div>
        </div>

        <div class="footer__info">
          <div class="footer__title">
            <h4>Newsletter</h4>
          </div>
          <div class="footer__links">
            <a href="#" class="footer__link">Sign Up for Our Newsletter:</a>
            <a href="#" class="footer__link">Get Offers</a>
            <a href="#" class="footer__link">Get $140 Coupon</a>
            <a href="#" class="footer__link">Get New Deals</a>
            <a href="#" class="footer__link">Get New Products</a>
            <a href="#" class="footer__link">Get Top Deals</a>
          </div>
        </div>
      </div>

      <hr />

      <div class="copyright">
        <div class="container">
          <div class="copy__text">
            <p>© 2022 K. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    `;
  }
}

/*=============== reusable header ===============*/

customElements.define("special-footer", Footer);

class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header class="header">
      <div class="header__top">
        <div class="header__top-container">
          <div class="header__top-left">
            <p class="header__top-p">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <p>
              <a href="#">SHOP NOW</a>
            </p>
          </div>
        </div>
      </div>
    </header>
    
    <nav class="nav-container">
      <div class="nav-logo_icon">
        <a href="index.html" class="nav__logo">Excusive</a>
      </div>

      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="index.html" class="nav__link">Home</a>
          </li>
          <li class="nav__item"><a href="#" class="nav__link">Contact</a></li>
          <li class="nav__item">
            <a href="/about.html" class="nav__link">About</a>
          </li>
          <li class="nav__item">
            <a href="/register.html" class="nav__link">Sine Up</a>
          </li>
        </ul>

        <div class="header__search">
          <input
            type="text"
            placeholder="what are you looking for?"
            class="form__input"
          />
          <button class="search__btn">
            <img src="/assets/img/Search.png" alt="" />
          </button>
        </div>
      </div>

      <div class="header__user-actions">
        <a href="wishlist.html" class="header__action-btn">
          <img src="/assets/img/Wishlist.png" alt="" />
          <span class="count">3</span>
        </a>

        <a href="cart.html" class="header__action-btn">
          <img src="/assets/img/Cart.png" alt="" />
          <span class="count">3</span>
        </a>
      </div>
    </nav>`;
  }
}

customElements.define("special-header", Header);
