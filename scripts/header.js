import { cart } from "../data/cart.js";

export function updateCartQuantity() {
  let updateCartQuantity = 0;

  cart.forEach((cartItem) => {
    updateCartQuantity += cartItem.quantity;
  });

  ////////////////show cart quantity
  const cartQuantity = document.querySelectorAll(".cart-quantity");
  cartQuantity.forEach((qty) => {
    qty.innerHTML = updateCartQuantity;
  });
}
updateCartQuantity();
//overlay
const hamburgerMenu = document.querySelector(".hamburger-menu");
const overlay = document.querySelector(".overlay");
const upLine = document.querySelector(".up-line");
const midLine = document.querySelector(".mid-line");
const botLine = document.querySelector(".bot-line");

hamburgerMenu.addEventListener("click", displayOverlay);
function displayOverlay() {
  overlay.classList.toggle("hidden");

  upLine.classList.toggle("rotateU");
  midLine.classList.toggle("rotateM");
  botLine.classList.toggle("rotateB");
}
