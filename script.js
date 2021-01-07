// menu gumb
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
// košarica
let getCart = function () {
    if (localStorage.getItem("cart")) {
        console.log("??")
        // Ako u lokalnoj pohrani nema košarice, vraća prazan objekt
        return {};
    } else {
        console.log("!!!??")
        //return JSON.parse(cart);
    }
};
let setCart = function (cart) {
    // Uklanja sve proizvode čija je količina 0
    for (let productId in cart) {
        if (cart[productId] === 0) {
            delete cart[productId];
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartDisplay();
};

let updateCartDisplay = function () {
    let cartItemsElement = document.querySelector("#cart-items");
    let cart = getCart();

    cartItemsElement.textContent = Object.keys(cart).length;
};

updateCartDisplay()
let categoriesLeftToLoad;
function aktiviraj() {
    let kosarica = document.getElementById("kosarica1");
    kosarica.textContent = localStorage.getItem("total");
}

function addToCart(id) {
    /*let start = "../images/proizvodi/";
    let pic = start.concat(id, "proizvod.jpg");
    let data = [pic, 1]; // ovo u kosaricu*/
    if (localStorage.getItem(id)) {
        let val = localStorage.getItem(id);
        let total = localStorage.getItem("total");
        localStorage.setItem(id, parseInt(val) + 1);
        localStorage.setItem("total", parseInt(total) + 1);
        aktiviraj(id);
    } else {
        localStorage.setItem(id, 2);
    }
};


