let cart = []; // Store cart items
const cartContainer = document.querySelector('.cart-container');
const totalPriceElement = document.getElementById('total-price');
const checkoutButton = document.getElementById('checkout-btn');

// Example Product
const exampleProduct = {
    id: 1,
    name: "Gold Necklace",
    price: 50,
    image: "path_to_image.jpg"
};

// Function to add item to the cart
function addItemToCart(product) {
    cart.push(product);
    updateCartUI();
}

// Function to remove item from the cart
function removeItemFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// Update the cart UI with cart items
function updateCartUI() {
    cartContainer.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');

        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="Product Image" class="cart-item-img">
            <div class="cart-item-info">
                <p>${item.name}</p>
                <p>Price: $${item.price}</p>
            </div>
            <button class="remove-item-btn" onclick="removeItemFromCart(${item.id})">Remove</button>
        `;

        cartContainer.appendChild(cartItemElement);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Simulate adding a product
addItemToCart(exampleProduct);
