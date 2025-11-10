import { getLocalStorage } from "./utils.mjs";

function updateCartCount() {
  const cartCountElement = document.querySelector("#cart-count");
  if (!cartCountElement) return; // si no existe el elemento, salir

  const cartItems = getLocalStorage("so-cart") || [];
  let totalItems = 0;

  // Recorremos los ítems del carrito y sumamos cantidades (si existiera la propiedad quantity)
  cartItems.forEach((item) => {
    totalItems += item.quantity || 1;
  });

  // Mostramos el total
  cartCountElement.textContent = totalItems;
}

// Actualizar cuando se carga la página
document.addEventListener("DOMContentLoaded", updateCartCount);

// También escuchar actualizaciones de storage
window.addEventListener("storage", updateCartCount);

export { updateCartCount };
