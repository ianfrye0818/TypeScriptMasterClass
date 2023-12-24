"use strict";
//------------------
// arrays
//------------------
let names = ['Mario', 'Lugigi', 'Peach'];
let ages = [34, 23, 25];
//can only push types declared above
names.push('Toad');
ages.push(34);
//type inferrence w/ arrays
let fruits = ['apples', 'pears', 'bananas', 'mangos'];
fruits.push('mango');
const f = fruits[3];
//inferrs a union type
let things = [1, true, 'hello'];
//does not know exactly what type things is -> can be one of the types above
const t = things[0];
//------------------
//object literals
//--------------------
let user = {
    name: 'Ian',
    age: 37,
    id: 1,
};
//type inference with object literals
