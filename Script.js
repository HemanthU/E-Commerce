// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.createElement("div");
    menuToggle.innerHTML = "☰";
    menuToggle.style.fontSize = "24px";
    menuToggle.style.cursor = "pointer";
    menuToggle.style.display = "none";

    const nav = document.querySelector("nav ul");
    document.querySelector("header").prepend(menuToggle);

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    // Responsive Menu
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = "block";
            nav.style.display = "none";
        } else {
            menuToggle.style.display = "none";
            nav.style.display = "flex";
        }
    }

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
});

// Shopping Cart
let cart = [];

// Function to Add Items to Cart
function addToCart(productName, price) {
    let product = { name: productName, price: price };
    cart.push(product);
    updateCart();
}

// Function to Update and Display Cart
function updateCart() {
    let cartList = document.getElementById("cart-items");
    let totalPrice = 0;
    cartList.innerHTML = ""; 

    cart.forEach((item, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price}`;
        
        // Remove button
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = function () {
            removeItem(index);
        };

        listItem.appendChild(removeBtn);
        cartList.appendChild(listItem);
        totalPrice += item.price;
    });

    document.getElementById("cart-total").textContent = `Total: $${totalPrice}`;
}

// Function to Remove Item from Cart
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}
