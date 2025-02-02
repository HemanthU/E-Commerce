document.addEventListener("DOMContentLoaded", function() {
    const cart = [];

    // Sample cart item structure
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    const cartContainer = document.querySelector(".cart-container");

    // Function to update the cart UI
    function updateCart() {
        cartContainer.innerHTML = ""; // Clear cart before updating
        cart.forEach((item, index) => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <img src="${item.image}" alt="Product Image" class="cart-item-img">
                <div class="cart-item-info">
                    <p>${item.name}</p>
                    <p>Price: $${item.price}</p>
                </div>
                <button class="remove-item-btn" data-index="${index}">Remove</button>
            `;
            cartContainer.appendChild(cartItem);
        });

        // Add event listener to remove buttons
        const removeButtons = cartContainer.querySelectorAll(".remove-item-btn");
        removeButtons.forEach(button => {
            button.addEventListener("click", removeFromCart);
        });
    }

    // Function to add item to the cart
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            const productCard = event.target.closest(".product-card");
            const productName = productCard.querySelector("h3").textContent;
            const productPrice = productCard.querySelector("p").textContent.replace('Price: $', '');
            const productImage = productCard.querySelector("img").src;

            const product = {
                name: productName,
                price: parseFloat(productPrice),
                image: productImage
            };

            cart.push(product);
            updateCart();
        });
    });

    // Function to remove item from the cart
    function removeFromCart(event) {
        const index = event.target.dataset.index;
        cart.splice(index, 1); // Remove item from cart array
        updateCart(); // Update the cart display
    }
});