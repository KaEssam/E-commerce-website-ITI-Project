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
customElements.define("special-footer", Footer);
/*=============== reusable header ===============*/

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
          <li class="nav__item"><a href="/contact.html" class="nav__link">Contact</a></li>
          <li class="nav__item">
            <a href="/about.html" class="nav__link">About</a>
          </li>
          <li class="nav__item">
            <a href="/register.html" class="nav__link">Sign Up</a>
          </li>
          
        </ul>

        <div class="header__search">
          <input
            type="text"
            placeholder="what are you looking for?"
            class="form__input"
          />
          <button class="search__btn">
            <img src="/assets/img/search.png" alt="" />
          </button>
        </div>
      </div>

      <div class="header__user-actions">
      <a href="/accounts.html" class="header__action-btn" id="account">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
</svg>
        </a>

        <a href="wishlist.html" class="header__action-btn"" id="wishlistBtn" >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
          <span class="count"></span>
        </a>

        <a href="cart.html" class="header__action-btn" id="cartBtn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
</svg>
          <span class="count"></span>
        </a>

        <a href="#" class="header__action-btn" id="sign-out">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
        </a>
        
</div>
      </div>
    </nav>`;
  }
}

customElements.define("special-header", Header);
