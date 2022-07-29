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
    document.addEventListener('DOMContentLoaded', ready); 
} else {
    ready();
}

// Making Function
function ready() {
    // Remove Cart Item
   const removeCartButtons = document.getElementsByClassName('cart-remove');
   console.log(removeCartButtons);
   for (let i = 0; i < removeCartButtons.length; i++) {
    const button = removeCartButtons[i];
    button.addEventListener('click', removeCartItem);
   }

//    Change Quantity
    const quantityInputs = document.getElementsByClassName('cart-quantity');
    for (let i = 0; i < quantityInputs.length; i++) {
        const input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
 }

//  To Remove From Cart 
    function removeCartItem(event) {
        const buttonClicked = event.target;
        buttonClicked.parentElement.remove();
        updateTotal();
    }

    // Change Quantity
    function quantityChanged(event) {
        const input = event.target; 
        if (isNaN(input.value) || input.value <= 0){
            input.value = 1;
            updateTotal();
        }
    }


    // To Update Price
    function updateTotal() {
        const cartContent = document.getElementsByClassName('cart-content')[0];
        const cartBoxes = cartContent.getElementsByClassName('cart-box');
        var total = 0;
        for (let i = 0; i < cartBoxes.length; i++){
            const cartBox = cartBoxes[i];
            const priceElement = cartBox.getElementsByClassName('cart-price')[0];
            const quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
            const price = parseFloat(priceElement.innerText.replace("$", ""));
            const quantity = quantityElement.value;
            total = total + price * quantity;
            
            document.getElementsByClassName('total-price')[0].innerText = "$" + total;
    }
 }