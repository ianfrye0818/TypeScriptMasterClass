"use strict";
//____________________
//  making a class
//____________________
class Pizza {
    // if they are declared in the constructor and are private  do not need to initialize ->
    constructor(title, price) {
        this.title = title;
        this.price = price;
        //add private properties that can only be updated using setters
        // private title: string
        // private price: number
        this._base = 'classic';
        this._toppings = [];
    }
    // this.title = title
    // this.price = price
    //setter functions for adding or removing pizza toppings
    addTopping(topping) {
        this._toppings.push(topping);
    }
    removeToppings(topping) {
        this._toppings = this._toppings.filter((t) => t !== topping);
    }
    //setter function for updating the base
    selectBase(b) {
        this._base = b;
    }
    setPrice(p) {
        this.price = p;
    }
    getPrice() {
        return this.price;
    }
}
const pizza = new Pizza('Mario Special', 4.99);
const pizza2 = new Pizza('Yoshi Special', 14.99);
pizza.addTopping('mushrooms');
pizza.addTopping('olives');
pizza.removeToppings('mushrooms');
pizza.selectBase('garlic');
console.log(pizza2.getPrice());
console.log(pizza);
console.log(pizza2);
//using setters and getters
// class Pizza {
//   private _title: string;
//   private _price: number;
//   private _base: Base;
//   private _toppings: string[];
//   constructor(title: string, price: number, base: Base, toppings: string[]) {
//     this._title = title;
//     this._price = price;
//     this._base = base;
//     this._toppings = toppings;
//   }
//   get title(): string {
//     return this._title;
//   }
//   set title(value: string) {
//     this._title = value;
//   }
//   get price(): number {
//     return this._price;
//   }
//   set price(value: number) {
//     this._price = value;
//   }
//   get base(): Base {
//     return this._base;
//   }
//   set base(value: Base) {
//     this._base = value;
//   }
//   get toppings(): string[] {
//     return this._toppings;
//   }
//   set toppings(value: string[]) {
//     this._toppings = value;
//   }
// }
// class Base {
//   // Define your Base class properties and methods here
// }
// // Example usage:
// const pizza = new Pizza("Margherita", 10.99, new Base(), ["Cheese", "Tomato"]);
// console.log(pizza.title); // Accessing the title using the getter
// pizza.price = 12.99; // Setting a new price using the setter
// console.log(pizza.price); // Accessing the updated price using the getter
