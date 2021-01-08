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
let loginForm = document.getElementById("log");
let regForm = document.getElementById("reg");
let indicator = document.getElementById("ind");

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
// košarica
/*
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

updateCartDisplay()*/
let categoriesLeftToLoad;
function aktiviraj() {
    if (!localStorage.getItem("total")) {
        localStorage.setItem("total", 0);
    }
    let kosarica = document.getElementById("kosarica1");
    kosarica.textContent = localStorage.getItem("total");

}



function addToCart(id, q, c, s) {
    if (localStorage.getItem(id)) {
        let val = localStorage.getItem(id);
        let list_val = val.split("|");
        let new_s = s;
        for (let j = 0; j < q - 1; j++) {
            new_s = new_s + "," + s;
        }
        let velicine = list_val[1].substr(0, list_val[1].length - 1) + "," + new_s + "]";
        let new_q = parseInt(list_val[2]) + parseInt(q);
        let new_val = c + "|" + velicine + "|" + new_q;
        localStorage.setItem(id, new_val);
        //localStorage.setItem(id, "260|" + "[XL]" + "|" + "1");
        console.log(localStorage.getItem(id));
        let total = localStorage.getItem("total");
        localStorage.setItem("total", parseInt(total) + parseInt(q));
        aktiviraj();
    } else {
        console
        if (!localStorage.getItem("total")) {
            localStorage.setItem("total", q);
        } else {
            localStorage.setItem("total", parseInt(localStorage.getItem("total")) + parseInt(q));
        }
        let new_s = s;
        for (let j = 0; j < q - 1; j++) {
            new_s = new_s + "," + s;
        }
        let new_val = c + "|[" + new_s + "]|" + q;
        localStorage.setItem(id, new_val);
        aktiviraj();
    }
    alert("Proizvod je dodan u košaricu");
};


