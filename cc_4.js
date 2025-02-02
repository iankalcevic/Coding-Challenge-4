// Task 1 - If statements
let purchaseAmount = 1000; // Declare purchase amount
let finalAmount = purchaseAmount; 
if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.5; // Discount
    console.log("Discount applied")
}

// Task 2 - For loop
let sales = [100, 130, 150, 180, 200]; //Declare array of sales
let totalSales = 0;

for (let w = 0; w < sales.length; w++)
{totalSales += sales[w]}
console.log('Total sales: $${totalSales}'); // Log total sales

// Task 3 - While loop
let stock = 10; // Declare stock
while (stock > 0)
{ console.log('Stock balance: ${stock}'); 
    stock--; 
} // Decreasing stock until 0
console.log("Decrement of stock")

// Task 4 - Do...While loop
let responses = 0;
do { console.log('Collecting responses: ${repsonses}');
    responses++;
}
while (responses < 3)

// Task 5 - For...In loop
let employee = {
    name: "Alice"
    position: "Manager"
    salary: 75000
}; // Employee information
for (let key in employee)
{ console.log('${key}: ${employee[key]}');
}

// Task 6 - For...Of loop
let products = ["Blanket", "Pillow", "Couch"]: // Array of products
for (let product of products) 
{
    console.log('Product: ${product}');
}

// Task 7 - Foreach() method
let orders = [111, 112, 113]; // Array of order IDs
orders.forEach(order => 
{console.log('order ID: ${order}')}
); 

//Task 8 - Function declaring
function calculateTax(amount, taxRate)
{return amount * taxRate;
}
let tax = calculateTax(100, .07);
console.log('Tax: $${tax}');

// Task 9 - Function expressions
const applyDiscount = function(price, discountPercentage){
    return price - (price * (discountpercentage / 100));
};
let discountedPrice = applyDiscount (100,10)
console.log ('Discounted price: $${discountedPrice}');

// Task 10 - Arrow functions 
const calculatePoints = (purchaseAmount) => {
    return (purchaseAmount / 10);
};
let points = calculatePoints(200);
console.log('Loyalty points: ${points}');
