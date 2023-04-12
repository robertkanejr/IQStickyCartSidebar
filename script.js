const addToCartEl = document.querySelectorAll(".addToCartBtn");
const cartItemslistEl = document.querySelector(".cartItems");
const checkOutbtnel = document.querySelector("#checkoutBtn");
const totalEl = document.querySelector("#total");

let cartitems = [];
let itemPresent = false;

// Add Cart Button Event
for (let ele of addToCartEl) {
	ele.addEventListener("click", (e) => {
		e.preventDefault();
		addUpdateItems(ele.dataset.id, ele.dataset.name, ele.dataset.price);
	});
}

//CheckOut Button Event Handling
checkOutbtnel.addEventListener("click", () => {
	console.log("Your Final Cart is:");
	console.log(cartitems);
	while (cartItemslistEl.firstChild) {
		cartItemslistEl.removeChild(cartItemslistEl.firstChild);
	}
	totalEl.textContent = `Total: 0$`;
});

function addUpdateItems(id, itemName, price) {
	let presentItem = cartitems.find((item) => item.id === id);
	// If Item is already present
	if (presentItem) {
		presentItem.quantity++;
		itemPresent = true;
		//Render cart UI
		updateCart(presentItem, itemPresent);
	}
	//In case of Item not in the cart already
	else {
		let newitem = {};
		newitem.id = id;
		newitem.price = Number(price);
		newitem.name = itemName;
		newitem.quantity = 1;
		cartitems.push(newitem);
		itemPresent = false;
		//Render cart UI
		updateCart(newitem, itemPresent);
	}
}

function updateCart(item, itemPresent) {
	//IF item was not on in the list then create a new list item
	if (!itemPresent) {
		// Create the element
		let el = document.createElement("li");
		el.classList.add("cart-item");
		// We can use datasets to track item exisist then update quantity only
		el.setAttribute("data-productid", item.id);

		//Add Product ID
		let itemidEl = document.createElement("span");
		itemidEl.classList.add("item-id");
		itemidEl.textContent = item.id;
		el.appendChild(itemidEl);

		//Add Product Name
		let itemNameEl = document.createElement("span");
		itemNameEl.textContent = item.name;
		itemNameEl.classList.add("item-name");
		el.appendChild(itemNameEl);

		//Add product quantity
		let itemquantityEl = document.createElement("input");
		itemquantityEl.classList.add("item-quantity");
		itemquantityEl.type = "text";
		itemquantityEl.value = item.quantity;
		el.appendChild(itemquantityEl);

		//Add product Total price with regards to quantity
		let itemPriceEl = document.createElement("strong");
		itemPriceEl.classList.add("total-price");
		itemPriceEl.textContent = item.quantity * item.price;
		el.appendChild(itemPriceEl);

		//Delete button to remove product from cart
		let itemDeleteEl = document.createElement("button");
		itemDeleteEl.classList.add("btn-delete");
		itemDeleteEl.addEventListener("click", deleteItem);
		el.appendChild(itemDeleteEl);

		// Add the list item to the dom
		cartItemslistEl.appendChild(el);

		// Update Totals
		updateTotal();
	}
	//else find the exsisting list item and update the price and total price
	else {
		let findli = document.querySelectorAll(`[data-productid = '${item.id}']`);
		let findquantityEl = findli[0].querySelector(".item-quantity");
		let findpriceEl = findli[0].querySelector(".total-price");
		findquantityEl.value = item.quantity;
		findpriceEl.textContent = item.quantity * item.price;

		// Update Totals
		updateTotal();
	}
}

function updateTotal() {
	const cartlistEl = cartItemslistEl.querySelectorAll(".total-price");
	let total = 0;
	for (let price of cartlistEl) {
		total += Number(price.textContent);
	}

	totalEl.textContent = `Total: ${total} $`;
}

function deleteItem(event) {
	let itemdelEl = event.target.parentNode;
	let delid = itemdelEl.dataset.productid;
	itemdelEl.parentNode.removeChild(itemdelEl);
	updateTotal();

	//Update the cart items in the array upon delete
	for (let i = 0; i < cartitems.length; i++) {
		if (cartitems[i].id === delid) {
			cartitems.splice(i, 1);
			break;
		}
	}
}
