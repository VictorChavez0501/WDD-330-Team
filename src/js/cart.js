import { getLocalStorage } from "./utils.mjs";
import { updateCartCount } from "./cartCount.js";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");

  updateCartCount();
  activateRemoveButtons();
}

function activateRemoveButtons() {
  document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const productId = event.target.closest(".cart-card").dataset.id;
      removeFromCart(productId);
    });
  });
}

function removeFromCart(productId) {
  let cartItems = getLocalStorage("so-cart");

  // Filtrar los productos que NO coinciden con el eliminado
  const updatedCart = cartItems.filter((item) => item.Id !== productId);

  // Guardar en localStorage
  localStorage.setItem("so-cart", JSON.stringify(updatedCart));

  // Volver a renderizar
  renderCartContents();
}

function cartItemTemplate(item) {
  const newItem = `
  <li class="cart-card divider" data-id="${item.Id}">
    <a href="#" class="cart-card__image">
      <img src="${item.Image}" alt="${item.Name}" />
    </a>

    <a href="#">
      <h2 class="card__name">${item.Name}</h2>
    </a>

    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${item.FinalPrice}</p>

    <button class="remove-btn">Remove</button>
  </li>`;

  return newItem;
}

renderCartContents();
