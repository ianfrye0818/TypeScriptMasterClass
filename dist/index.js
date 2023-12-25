"use strict";
//____________________
//extending interfaces
//____________________
const user = {
    id: 1,
    format() {
        return `this user has an id of ${this.id}`;
    },
};
const bill = {
    id: 2,
    amount: 50,
    server: 'mario',
    //extends so this will require a format function
    format() {
        return `Bill with id${this.id} has $${this.amount} to pay`;
    },
};
function printFormatted(val) {
    console.log(val.format());
}
function printBill(bill) {
    console.log('server:', bill.server);
    console.log(bill.format);
}
//valid
printFormatted(user);
printFormatted(bill);
//error user does not conform to bill interface
// printBill(user)
//valid -> bill object conforms to bill interface
printBill(bill);
