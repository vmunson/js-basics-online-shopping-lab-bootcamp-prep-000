var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item
  var itemPrice = Math.floor(Math.random() * 100)
  cart.push({[itemName]: itemPrice})
  console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  if(cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
  var newCart = [];
 for(let i = 0; i < cart.length; i++){
   var item = cart[i];
   let key = Object.keys(item)[0];
    let price = item[key];
    newCart.push(`${key} at $${price}`);
}
   if(cart.length === 1){
     console.log(`In your cart, you have ${newCart[0]}.`)
   }
   else if (cart.length === 2) {
     console.log(`In your cart, you have ${newCart[0]} and ${newCart[1]}.`)
   }
   else if(cart.length >= 3){
    newCart[newCart.length - 1] = "and " + newCart[newCart.length - 1];
     console.log(`In your cart, you have ${newCart.join(", ")}.`)
   }
}

function total() {
  var totalPrice = 0
  for(let i = 0; i < cart.length; i++){
    var key = Object.keys(cart)[0];
    var price = cart[key];
    t = t + prices
  }
  return t
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
