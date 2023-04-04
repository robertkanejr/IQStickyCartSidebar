const addToCartBtns = document.querySelectorAll(".addToCartBtn");
const cartItemsList = document.querySelector(".cartItems");
const checkoutBtn = document.querySelector("#checkoutBtn");
const cartTotal = document.querySelector("#total");

let cartItems = [];
let itemPresent = false;

// addToCartBtns.forEach((btn) =>
// 	btn.addEventListener("click", (e) => {
// 		cartItem.querySelector(".cartItemId").value = items[btn].id;
// 	})
// );

// const calcTotal = () => {

// }

const checkout = () => {
	console.log("Your Final Cart is:");
	console.log(cartItems);
};

checkoutBtn.addEventListener("click", checkout);
