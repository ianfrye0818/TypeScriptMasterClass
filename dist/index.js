"use strict";
//reusable interface
//must match exactly
const something = { quantity: 50 };
function printQuantity(item) {
    console.log(`the quantity of the item is ${item.quantity}`);
}
const fruit = {
    name: 'mango',
    quantity: 50,
};
const vehicle = {
    name: 'car',
    quantity: 3,
};
const person = {
    name: 'mario',
    quantity: 30,
    age: 30,
};
//as long as it inclues the properties of the interface - it will accept it
printQuantity(fruit);
printQuantity(vehicle);
printQuantity(person);
//edge cases
//object literals cannot have extra properites
// printQuantity({quantity: 30, age: 30})
