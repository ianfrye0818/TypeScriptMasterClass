"use strict";
// Generic Interfaces
const collection1 = {
    data: ['mario', 'yoshi', 'peach', 'toad'],
    name: 'Nintendo Characters',
};
const collection2 = {
    data: [20, 15, 256, 3456],
    name: 'Winning Lottery Numbers',
};
function randomCollectionItem(c) {
    const i = Math.floor(Math.random() * c.data.length);
    return c.data[i];
}
const character = randomCollectionItem(collection1);
const lottery = randomCollectionItem(collection2);
console.log(character, lottery);
class DataCollection {
    constructor(data) {
        this.data = data;
    }
    loadOne() {
        const i = Math.floor(Math.random() * this.data.length);
        return this.data[i];
    }
    loadAll() {
        return this.data;
    }
    add(value) {
        this.data.push(value);
        return this.data;
    }
    delete(id) {
        this.data = this.data.filter((item) => item.id !== id);
    }
}
const users = new DataCollection([
    { name: 'Shawn', score: 125, id: 1 },
    { name: 'Jim', score: 343, id: 2 },
    { name: 'Bill', score: 2345, id: 3 },
]);
users.add({ name: 'Jordan', score: 234, id: 4 });
console.log(users.loadAll());
const user = users.loadOne();
users.delete(2);
const allUsers = users.loadAll();
console.log(allUsers);
