"use strict";
//____________________
//  making a class
//____________________
class Pizza {
    constructor(title, price) {
        this.base = 'classic';
        this.toppings = [];
        this.title = title;
        this.price = price;
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeToppings(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectBase(b) {
        this.base = b;
    }
}
const pizza = new Pizza('Mario Special', 4.99);
pizza.addTopping('mushrooms');
pizza.addTopping('olives');
pizza.selectBase('thin');
console.log(`${pizza.title}: $${pizza.price}, (${pizza.base}) has ${pizza.toppings.join(', ')} for toppings`);
