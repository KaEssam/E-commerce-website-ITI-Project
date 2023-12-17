export const products = [
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

export function addProductItemToGrid(product, divID) {
  // Get the existing container by ID
  const existingContainer = document.getElementById(divID);

  // Create a template literal for the HTML structure
  existingContainer.innerHTML += `
              <div class="cart__item">
                <div class="prodact__item">
                  <div class="image-content">
                    <span class="overlay"></span>
                    <div class="item-image">
                      <img
                        src="${product.thumbnail}"
                        class="item-img"
                        alt=""
                      />
                      <div class="item_top_icons">
                        <a href="#" onclick="addToWishlist()">
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
                        <a href="details.html?pid=${product.id}"
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
                        <a href="#" class="btn" onclick="addToCart()">Add to Cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="prodact-info">
                  <h4 class="prodact-title">${product.name}</h4>
                  <div class="prodact-price">
                    <span class="prodact-price-new">${product.price}</span>

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
                        <div class="rate__reviews">${product.numberOfRatings}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  `;
}
