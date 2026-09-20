const WHATSAPP_NUMBER = "255768957143";

const formatTZS = (amount) =>
  `TZS ${Number(amount).toLocaleString("en-TZ")}`;


/* =========================================================
   MENU DATA
========================================================= */

const menuData = {
  "Breakfast": [
    ["Easy Breakfast", 6000],
    ["Egg & Avo Smash Toast", 8000],
    ["Spanish Omelette", 8000],
    ["Soup of the Day", 10000],
    ["Healthy Breakfast", 15000]
  ],

  "Burgers": [
    ["Veggie Burger", 10000],
    ["Chicken Mozzarella Burger", 12000],
    ["Classic Cheese Beef Burger", 15000]
  ],

  "Pasta": [
    ["Spaghetti Bolognese", 12000],
    ["Vegan Pasta", 12000],
    ["Chicken Alfredo Pasta", 12000]
  ],

  "Main Dishes": [
    ["Fried Chicken Wings / Drumstick", 15000],
    ["Beef / Chicken Skewers", 15000],
    ["Juicy T-Bone Beef", 15000],
    ["Chicken Fajita", 15000],
    ["Peri Peri Fried Chicken", 15000],
    ["Crispy Chicken", 15000],
    ["Chicken / Beef Makange", 16000],
    ["Beef Stir Fry", 17000]
  ],

  "Sandwiches": [
    ["Roast Beef Sandwich", 12000],
    ["Vegan Sandwich", 12000],
    ["Chicken Sandwich", 13000]
  ],

  "Wraps": [
    ["Vegan Wraps", 12000],
    ["Beef Wraps", 14000],
    ["Chicken Wraps", 14000]
  ],

  "Salads": [
    ["Beef Mango Salad", 12000],
    ["Chicken Caesar Salad", 13000],
    ["Chicken Salad", 15000],
    ["Mango Salsa Salad", 15000]
  ],

  "Waffles & Pancakes": [
    ["Classic Waffle", 8000],
    ["Nutella / Peanut Butter Waffle", 10000],
    ["Banana Nut Craze Special", 12000],
    ["Strawberry & Cream", 12000]
  ],

  "Coffee": [
    ["Espresso", 3000],
    ["Americano", 4000],
    ["Cappuccino", 5000],
    ["Cafe Latte", 5000],
    ["Hot Chocolate", 5000],
    ["Mochaccino", 7000],
    ["Iced Latte", 7000],
    ["Frappuccino", 10000]
  ],

  "Tea": [
    ["Black Tea", 3000],
    ["Hot Milk", 3000],
    ["Herbal Tea", 3000],
    ["Milk Tea", 4000],
    ["Iced Tea", 5000],
    ["Dawa Tea", 5000],
    ["Masala Tea", 5000]
  ],

  "Smoothies": [
    ["Peanut Butter", 7000],
    ["Banana", 7000],
    ["Avocado", 7000],
    ["Detox", 8000],
    ["Green", 8000],
    ["Tropical", 8000]
  ],

  "Milkshakes": [
    ["Vanilla", 8000],
    ["Strawberry", 8000],
    ["Espresso", 8000],
    ["Chocolate", 8000],
    ["Banana", 8000],
    ["Oreo", 8000],
    ["Tende", 8000]
  ],

  "Mocktails": [
    ["Mojito", 8000],
    ["Virgin Strawberry Daiquiri", 8000],
    ["Easy Passionfruit Sparkles", 8000],
    ["Sunrise Mocktail", 8000],
    ["Blue Lagoon", 8000],
    ["Pinacolada", 8000]
  ],

  "Refreshers": [
    ["Seasonal Juice", 5000],
    ["Tropical Juice", 5000],
    ["Carrot Juice", 5000],
    ["Orange Juice", 7000],
    ["Mint Lemonade", 7000],
    ["Mineral Water", 1000],
    ["Soda", 2000]
  ],

  "Top It Up": [
    ["Extra Toast", 2000],
    ["Plain Crispy Chips", 3000],
    ["Onion Rings", 3000],
    ["Mixed Steamed Veggies", 4000],
    ["Extra Cheese", 4000],
    ["Chips Omelette — Classic Zege Edition", 7000],
    ["Special of the Day", 10000]
  ],

  "Desserts": [
    ["Vanilla Ice Cream", 5000],
    ["Chocolate Ice Cream", 5000],
    ["Strawberry Ice Cream", 5000],
    ["Fruit Salad (Seasonal Fruit)", 5000],
    ["Fruit Salad + Ice Cream", 12000]
  ],

  "Junior Dishes": [
    ["Chicken Wings", 8000],
    ["Junior Burger", 8000],
    ["Chicken Nugget", 8000],
    ["Chicken Lollipop", 8000]
  ]
};


/* =========================================================
   NAVIGATION
========================================================= */

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}


/* =========================================================
   HERO CAROUSEL
========================================================= */

const heroSlides = [...document.querySelectorAll(".hero-slide")];
const heroDots = [...document.querySelectorAll(".hero-dot")];
const prevButton = document.querySelector(".hero-control-prev");
const nextButton = document.querySelector(".hero-control-next");

let currentSlide = 0;
let carouselTimer;

function showSlide(index) {
  if (!heroSlides.length) return;

  currentSlide =
    (index + heroSlides.length) % heroSlides.length;

  heroSlides.forEach((slide, i) => {
    slide.classList.toggle("is-active", i === currentSlide);
  });

  heroDots.forEach((dot, i) => {
    const active = i === currentSlide;

    dot.classList.toggle("is-active", active);
    dot.setAttribute("aria-selected", String(active));
  });
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function previousSlide() {
  showSlide(currentSlide - 1);
}

function startCarousel() {
  clearInterval(carouselTimer);

  if (heroSlides.length > 1) {
    carouselTimer = setInterval(nextSlide, 5500);
  }
}

function resetCarousel() {
  startCarousel();
}

if (nextButton) {
  nextButton.addEventListener("click", () => {
    nextSlide();
    resetCarousel();
  });
}

if (prevButton) {
  prevButton.addEventListener("click", () => {
    previousSlide();
    resetCarousel();
  });
}

heroDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
    resetCarousel();
  });
});

if (heroSlides.length) {
  showSlide(0);
  startCarousel();
}


/* =========================================================
   MENU DISPLAY
========================================================= */

const menuTabs = document.querySelector("#menu-tabs");
const menuGrid = document.querySelector("#menu-grid");

const categories = Object.keys(menuData);

function renderMenu(category) {
  if (!menuGrid) return;

  menuGrid.innerHTML = menuData[category]
    .map(
      ([name, price]) => `
        <article class="menu-item">
          <div>
            <h3>${name}</h3>
            <p>${category}</p>
          </div>

          <div class="menu-price">
            ${formatTZS(price)}
          </div>
        </article>
      `
    )
    .join("");
}

function renderMenuTabs() {
  if (!menuTabs) return;

  menuTabs.innerHTML = categories
    .map(
      (category, index) => `
        <button
          class="menu-tab ${index === 0 ? "is-active" : ""}"
          type="button"
          role="tab"
          aria-selected="${index === 0}"
          data-category="${category}"
        >
          ${category}
        </button>
      `
    )
    .join("");

  menuTabs.querySelectorAll(".menu-tab").forEach((button) => {
    button.addEventListener("click", () => {

      menuTabs
        .querySelectorAll(".menu-tab")
        .forEach((tab) => {
          tab.classList.remove("is-active");
          tab.setAttribute("aria-selected", "false");
        });

      button.classList.add("is-active");
      button.setAttribute("aria-selected", "true");

      renderMenu(button.dataset.category);
    });
  });
}

renderMenuTabs();

if (categories.length) {
  renderMenu(categories[0]);
}


/* =========================================================
   PICKUP ORDER CART
========================================================= */

let cart = [];

const orderMenuGrid = document.querySelector("#order-menu-grid");
const cartItems = document.querySelector("#cart-items");
const cartCount = document.querySelector("#cart-count");
const cartTotal = document.querySelector("#cart-total");
const pickupForm = document.querySelector("#pickup-form");
const pickupStatus = document.querySelector("#pickup-status");


function allMenuItems() {
  return Object.entries(menuData).flatMap(
    ([category, items]) =>
      items.map(([name, price]) => ({
        id: `${category}-${name}`
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-"),
        category,
        name,
        price
      }))
  );
}

const orderItems = allMenuItems();


function renderOrderMenu() {
  if (!orderMenuGrid) return;

  orderMenuGrid.innerHTML = orderItems
    .map(
      (item) => `
        <article class="order-item">

          <div>
            <h4>${item.name}</h4>

            <div class="order-item-price">
              ${formatTZS(item.price)}
            </div>
          </div>

          <button
            class="add-to-cart"
            type="button"
            aria-label="Add ${item.name} to order"
            data-add-item="${item.id}"
          >
            +
          </button>

        </article>
      `
    )
    .join("");

  orderMenuGrid
    .querySelectorAll("[data-add-item]")
    .forEach((button) => {

      button.addEventListener("click", () => {
        addToCart(button.dataset.addItem);
      });

    });
}


function addToCart(id) {

  const item = orderItems.find(
    (product) => product.id === id
  );

  if (!item) return;

  const existing = cart.find(
    (cartItem) => cartItem.id === id
  );

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      ...item,
      quantity: 1
    });
  }

  renderCart();

  document.querySelector("#order")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


function changeQuantity(id, amount) {

  const item = cart.find(
    (cartItem) => cartItem.id === id
  );

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(
      (cartItem) => cartItem.id !== id
    );
  }

  renderCart();
}


function getCartTotal() {
  return cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );
}


function getCartCount() {
  return cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );
}


function renderCart() {

  if (!cartItems) return;

  const count = getCartCount();
  const total = getCartTotal();

  if (cartCount) {
    cartCount.textContent =
      `${count} ${count === 1 ? "item" : "items"}`;
  }

  if (cartTotal) {
    cartTotal.textContent =
      formatTZS(total);
  }

  if (!cart.length) {

    cartItems.innerHTML = `
      <div class="cart-empty">

        <div class="cart-empty-icon">
          🛒
        </div>

        <h4>
          Your order is empty
        </h4>

        <p>
          Add something delicious from the menu.
        </p>

      </div>
    `;

    return;
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">

          <div>

            <p class="cart-item-name">
              ${item.name}
            </p>

            <span class="cart-item-price">
              ${formatTZS(item.price)} each
            </span>

          </div>

          <div class="cart-item-controls">

            <button
              type="button"
              class="cart-quantity-btn"
              data-cart-action="decrease"
              data-id="${item.id}"
              aria-label="Decrease ${item.name}"
            >
              −
            </button>

            <span class="cart-quantity">
              ${item.quantity}
            </span>

            <button
              type="button"
              class="cart-quantity-btn"
              data-cart-action="increase"
              data-id="${item.id}"
              aria-label="Increase ${item.name}"
            >
              +
            </button>

          </div>

        </div>
      `
    )
    .join("");


  cartItems
    .querySelectorAll("[data-cart-action]")
    .forEach((button) => {

      button.addEventListener("click", () => {

        const amount =
          button.dataset.cartAction === "increase"
            ? 1
            : -1;

        changeQuantity(
          button.dataset.id,
          amount
        );

      });

    });
}


renderOrderMenu();
renderCart();


/* =========================================================
   PICKUP DATE LIMITS
========================================================= */

const pickupDateInput =
  document.querySelector('[name="pickupDate"]');

const pickupTimeInput =
  document.querySelector('[name="pickupTime"]');

function getLocalDateString() {

  const date = new Date();

  const year = date.getFullYear();

  const month = String(
    date.getMonth() + 1
  ).padStart(2, "0");

  const day = String(
    date.getDate()
  ).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

if (pickupDateInput) {
  pickupDateInput.min = getLocalDateString();
}

if (pickupTimeInput) {
  pickupTimeInput.min = "07:00";
  pickupTimeInput.max = "21:00";
}


/* =========================================================
   PICKUP ORDER → WHATSAPP
========================================================= */

if (pickupForm) {

  pickupForm.addEventListener("submit", (event) => {

    event.preventDefault();

    if (!cart.length) {

      if (pickupStatus) {
        pickupStatus.textContent =
          "Please add at least one item to your order.";
      }

      document.querySelector("#order")?.scrollIntoView({
        behavior: "smooth"
      });

      return;
    }


    const formData =
      new FormData(pickupForm);

    const name =
      formData.get("pickupName");

    const phone =
      formData.get("pickupPhone");

    const pickupDate =
      formData.get("pickupDate");

    const pickupTime =
      formData.get("pickupTime");

    const specialRequest =
      formData.get("pickupRequest") || "None";


    const itemsText = cart
      .map(
        (item) =>
          `${item.quantity} × ${item.name} — ${formatTZS(
            item.price * item.quantity
          )}`
      )
      .join("\n");


    const total =
      getCartTotal();


    const message = `
☕ *THE FAMILY BEAN CAFE*
*PICKUP ORDER REQUEST*

👤 Customer: ${name}
📞 Phone: ${phone}

📅 Pickup Date: ${pickupDate}
🕐 Pickup Time: ${pickupTime}

*ORDER:*
${itemsText}

💰 *TOTAL: ${formatTZS(total)}*

📝 Special Instructions:
${specialRequest}

Please confirm availability of this pickup order.

Relax! We make your day.
`.trim();


    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


    if (pickupStatus) {
      pickupStatus.textContent =
        "Opening WhatsApp with your order...";
    }


    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

  });

}


/* =========================================================
   RESERVATION → WHATSAPP
========================================================= */

const reservationForm =
  document.querySelector("#reservation-form");

const reservationStatus =
  document.querySelector("#reservation-status");


if (reservationForm) {

  reservationForm.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();

      const formData =
        new FormData(reservationForm);

      const name =
        formData.get("name");

      const phone =
        formData.get("phone");

      const date =
        formData.get("date");

      const time =
        formData.get("time");

      const guests =
        formData.get("guests");

      const request =
        formData.get("request") || "None";


      const message = `
☕ *THE FAMILY BEAN CAFE*
*TABLE RESERVATION REQUEST*

👤 Name: ${name}
📞 Phone: ${phone}

📅 Date: ${date}
🕐 Time: ${time}
👥 Guests: ${guests}

📝 Special Request:
${request}

Please confirm my reservation.

Relax! We make your day.
`.trim();


      const whatsappUrl =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


      if (reservationStatus) {
        reservationStatus.textContent =
          "Opening WhatsApp with your reservation...";
      }


      window.open(
        whatsappUrl,
        "_blank",
        "noopener,noreferrer"
      );

    }
  );

}


/* =========================================================
   FOOTER YEAR
========================================================= */

const yearElement =
  document.querySelector("#year");

if (yearElement) {
  yearElement.textContent =
    new Date().getFullYear();
}
