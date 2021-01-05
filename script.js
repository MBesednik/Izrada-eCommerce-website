
let MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menuToggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}
// js za slike ispod glavne slike proizvoda
let productImg = document.getElementById("productImg");
let smallImg = document.getElementsByClassName("small-img");
smallImg[0].onclick = function () {
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function () {
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function () {
    productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function () {
    productImg.src = smallImg[3].src;
}
// js za prijavu i registraciju
let loginForm = document.getElementsById("log");
let regForm = document.getElementsById("reg");
let indicator = document.getElementsById("ind");

function register() {
    reg.style.transform = "translateX(0px)";
    log.style.transform = "translateX(0px)";
    ind.style.transform = "translateX(100px)";
}
function login() {
    reg.style.transform = "translateX(300px)";
    log.style.transform = "translateX(300px)";
    ind.style.transform = "translateX(0px)";
}
// js košarica
let carts = document.querySelectorAll(".add-cart");

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        console.log("dodano");
    })
}
function cartNumber() {
    localStorage.setItem('cartNumber', 1);
}

// ---------------------------------------

