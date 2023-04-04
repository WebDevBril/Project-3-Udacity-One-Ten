# Project-3-Udacity-One-Ten

Shopping Cart
This project is a simple implementation of a shopping cart in JavaScript.

This shopping cart allows users to add products to a cart, increase or decrease the quantity of items in the cart, remove items from the cart, and calculate the total cost of the items in the cart.

Products
The products array holds all the available products in the store. Each product is an object literal with the following properties:

name: The name of the product (string)
price: The price of the product (number)
quantity: The quantity of the product in the cart (number)
productId: The unique id of the product (number)
image: The URL of the product image (string)
Cart
The cart array holds all the items currently in the cart. Each item is an object literal with the same properties as the products in the store.

Functions
addProductToCart(productId: number)
This function takes in a product productId as an argument and adds the product to the cart. If the product is already in the cart, its quantity is increased by one. If the product is not in the cart, it is added with a quantity of one.

increaseQuantity(productId: number)
This function takes in a product productId as an argument and increases the quantity of the product in the cart by one.

decreaseQuantity(productId: number)
This function takes in a product productId as an argument and decreases the quantity of the product in the cart by one. If the quantity of the product reaches zero, it is removed from the cart.

removeProductFromCart(productId: number)
This function takes in a product productId as an argument and removes the product from the cart. The product's quantity is set to zero.

cartTotal()
This function calculates the total cost of all the items in the cart and returns the sum.

emptyCart()
This function empties the cart by resetting the cart array to an empty array.

pay(amount: number, totalPaid: number)
This function takes in the amount of the purchase and the totalPaid by the customer and calculates the change due. If there is a positive change due, it is returned. If the customer has not paid enough, the function returns the negative value of the remaining balance.

Stand Out Suggestions
Implement a currency converter to allow users to switch between different currencies.
Add authentication to allow users to sign in and save their cart for future purchases.
Allow users to add a discount code to their purchase.
Implement a payment gateway to allow users to pay for their purchase online.
