let carts = document.querySelectorAll(".add-cart");

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        console.log("dodano");
    })
}
function cartNumber() {
    localStorage.setItem('cartNumber', 1);
}