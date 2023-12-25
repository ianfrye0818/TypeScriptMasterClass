"use strict";
//------------------
//function signatures
//------------------
//conforms type Calculator
function addTwoNumbers(a, b) {
    return a + b;
}
//conforms type Calculator
function multipyTwoNumbers(first, second) {
    return first * second;
}
//does conform to calculator -> return and at least one of the arugments are the cooret type
function squareNumber(num) {
    return num * num;
}
//does not conform to Calculator -> arguments are a string
function convertToNumber(str) {
    return parseInt(str);
}
//does not conform to Calculator -> returning a string
function joinTwoNumbers(numOne, numTwo) {
    return `${numOne}${numTwo}`;
}
let calcs = [];
//valid
calcs.push(addTwoNumbers);
calcs.push(multipyTwoNumbers);
calcs.push(squareNumber);
const shapeOne = {
    name: 'square',
    calcArea(l) {
        return l * l;
    },
};
const shapeTwo = {
    name: 'circle',
    calcArea(r) {
        return (Math.PI * r) ^ 2;
    },
};
console.log(shapeOne.calcArea(3));
console.log(shapeTwo.calcArea(4));
