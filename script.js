const addToCartBtns = document.querySelectorAll(".addToCartBtn");
const cartTotal = document.querySelector("#totalPrice");
const checkoutBtn = document.querySelector("#checkoutBtn");
const items = document.querySelectorAll(".item");
const cartItem = document.querySelector(".cartItem");

// const addToCart = () => {
//   for(let i=0; i < items.length; i++) {
//     items[i] = addToCartBtns[i]
//   }
// };

addToCartBtns.forEach((btn) =>
	btn.addEventListener("click", (e) => {
		cartItem.querySelector(".cartItemId").value = items[btn].id;
	})
);


const calcTotal = () => {
  cartTotal = 
}

const checkout = () => {
  console.log()
}

checkoutBtn.addEventListener('click', checkout)