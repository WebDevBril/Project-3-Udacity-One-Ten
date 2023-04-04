/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [];
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
const cherry = {
  name: "cherry",
  price: 2.00,
  quantity: 0,
  productId: 100,
  image: "images/cherry.jpg",
}

const orange = {
  name: "orange",
  price: 1.50,
  quantity: 0,
  productId: 101,
  image: "images/orange.jpg",
}

const strawberry = {
  name: "strawberry",
  price: 2.99,
  quantity: 0,
  productId: 102,
  image: "images/strawberry.jpg"
}

products.push(cherry);
products.push(orange);
products.push(strawberry);
/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  let productToAdd;
  switch(productId) {
    case cherry.productId:
      productToAdd = cherry;
      break;
    case orange.productId:
      productToAdd = orange;
      break;
    case strawberry.productId:
      productToAdd = strawberry;
      break;
  }
  const productIndex = cart.findIndex(item => item.productId === productId);
  if (productIndex >= 0) {
    cart[productIndex].quantity++;
  } else {
    productToAdd.quantity = 1;
    cart.push(productToAdd);
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  let product = products.find((item) => item.productId === productId);
  if (product) {
    product.quantity++;
  }
}
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  let product = products.find((item) => item.productId === productId);
  if (product) {
    product.quantity--;
    if (product.quantity === 0) {
      removeProductFromCart(product.productId);
      products.splice(index, 1);
    }
  }
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {  
  if (productIndex !== -1) {
  const product = cart[productIndex];
  product.quantity = 0;
  cart.splice(productIndex, 1);
  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal() {
  let total = 0;
  cart.forEach(function(item) {
    total += item.price * item.quantity;
  });
  return total;
}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart (cart) {
  cart = [];
  return cart;
}
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
function pay(amount, totalPaid) {
  const change = totalPaid - amount;
  if (change >= 0) {
    return change;
  } else {
    return -change;
  }
}
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}