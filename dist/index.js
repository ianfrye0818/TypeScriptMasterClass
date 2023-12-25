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
}
