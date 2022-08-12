const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});


// Cart
const cartIcon = document.querySelector('#cart-icon');
const cart = document.querySelector('.cart');
const closeCart = document.querySelector('.close-cart');
// Open Cart
cartIcon.onclick = () => {
    cart.classList.add('active')
};
// Close Cart
closeCart.onclick = () => {
    cart.classList.remove('active')
};

// Cart Work

if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
    ready();
}

function ready () {
const removeCartItemButtons = document.getElementsByClassName('cart-remove');
console.log(removeCartItemButtons);
for (let i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener("click", removeCartItem )
}  

const quantityInputs = document.getElementsByClassName('cart-quantity')
for (let i = 0; i < quantityInputs.length; i++) {
    var inputs = quantityInputs[i]
    inputs.addEventListener("change", quantityChanged )
} 

const addToCartButton = document.getElementsByClassName('addtocat-icon')
for (let i = 0; i < addToCartButton.length; i++) {
    var button = addToCartButton[i]
    button.addEventListener("click", addToCartClick )
} 
document.getElementsByClassName('btn-buy')[0].addEventListener('click', purchaseClicked)
}
 
function purchaseClicked() {
    alert('Thank You For Your Purchase')
    const cartItems = document.getElementsByClassName('cart-content')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}


function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(event) {
    const input = event.target 
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}
function addToCartClick(event) {
    alert('Added to your cart')
    const button = event.target
    const shopItem = button.parentElement.parentElement.parentElement
     const title = shopItem.getElementsByClassName('item-title')[0].innerText
     const price = shopItem.getElementsByClassName('price')[0].innerText
     const imageSrc = shopItem.getElementsByClassName('scroll-img')[0].src
     console.log(title, price, imageSrc)
     addItemToCart (title, price, imageSrc)
     updateCartTotal()

}

function addItemToCart(title, price, imageSrc){
    const cartBox = document.createElement('div')
    // cartBox.classList.add('cart-box')
    cartBox.classList.add('detail-box')
    // cartBox.classList.add('cart-product-title')
    // cartBox.classList.add('cart-quantity')
    
    
     const cartItems = document.getElementsByClassName('cart-content')[0]
     const cartItemNames = cartItems.getElementsByClassName('cart-product-title')
         for (let i = 0; i < cartItemNames.length; i++) {
         if (cartItemNames[i].innerText == title) {
             alert('This Item Already Added To Your Cart')
             return
                }
             }
    var cartBoxContent = `
   <div class="cart-box">
   <img src="${imageSrc}" alt="" class="cart-img">
   <div class="detail-box">
     <div class="cart-product-title">${title}</div>
     <div class="cart-price">${price}</div>
     <input type="number" name="price" value="1" class="cart-quantity" id="">
   </div>     
   <div class="cart-remove" id="cart-remove">X</div>    
   </div> `
   cartBox.innerHTML = cartBoxContent
    cartItems.append(cartBox)
    cartBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem)
    cartBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged) 

}

function updateCartTotal() {
var cartItemContainer = document.getElementsByClassName('cart-content')[0];
var cartBox = cartItemContainer.getElementsByClassName('cart-box');
var total = 0;
for (let i = 0; i < cartBox.length; i++) {
    let cartBoxs = cartBox[i];
    const priceElement = cartBoxs.getElementsByClassName('cart-price')[0]
    const quantityElement = cartBoxs.getElementsByClassName('cart-quantity')[0]
    console.log(priceElement)
    const price = parseFloat( priceElement.innerText.replace('$', ''))
    const quantity = quantityElement.value
    total = total + (price * quantity)
}
total = Math.round(total * 100) / 100
document.getElementsByClassName('total-price')[0].innerText = '$' + total
}

//   // To Update Price
//     function updateTotal() {
//         const cartContent = document.getElementsByClassName('cart-content')[0];
//         const cartBoxes = cartContent.getElementsByClassName('cart-box');
//         let  total = 0;
//         for (let i = 0; i < cartBoxes.length; i++){
//             const cartBox = cartBoxes[i];
//             const priceElement = cartBox.getElementsByClassName('cart-price')[0];
//             const quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
//             const price = parseFloat(priceElement.innerText.replace("$", ""));
//             const quantity = quantityElement.value;
//             total = total + price * quantity;
            
//             document.getElementsByClassName('total-price')[0].innerText = "$" + total;
//     }
//  }
// 

// // Making Function
// function ready() {
//     // Remove Cart Item
//    const removeCartButtons = document.getElementsByClassName('cart-remove');
//    console.log(removeCartButtons);
//    for (let i = 0; i < removeCartButtons.length; i++) {
//     const button = removeCartButtons[i];
//     button.addEventListener('click', removeCartItem);
//    }

// //    Change Quantity
//     const quantityInputs = document.getElementsByClassName('cart-quantity');
//     for (let i = 0; i < quantityInputs.length; i++) {
//         const input = quantityInputs[i];
//         input.addEventListener('change', quantityChanged);
//     }
//  }

// //  To Remove From Cart 
//     function removeCartItem(event) {
//         const buttonClicked = event.target;
//         buttonClicked.parentElement.remove();
//         updateTotal();
//     }

//     // Change Quantity
//     function quantityChanged(event) {
//         const input = event.target; 
//         if (isNaN(input.value) || input.value <= 0){
//             input.value = 1;
//             updateTotal();
//         }
//     }


//   