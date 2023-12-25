"use strict";
//type aliases
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
const user1 = {
    name: 'mario',
    score: 75,
};
function formatUser(user) {
    console.log(`Name ${user.name} has a score of: ${user.score}`);
}
formatUser(user1);
formatUser({ name: 'Yoshi', score: 100 });
