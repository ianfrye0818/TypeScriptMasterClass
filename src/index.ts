// Generic Interfaces

interface Collection<T> {
  data: T[];
  name: string;
}

//Collection with T = string
const collection1: Collection<string> = {
  data: ['mario', 'yoshi', 'peach', 'toad'],
  name: 'Nintendo Characters',
};

//Collection with T = number
const collection2: Collection<number> = {
  data: [20, 15, 256, 3456],
  name: 'Winning Lottery Numbers',
};

function randomCollectionItem<T>(c: Collection<T>): T {
  const i = Math.floor(Math.random() * c.data.length);
  return c.data[i];
}

//implicitly set the type of the collection with the <string>
const character = randomCollectionItem<string>(collection1);

//infers the type based on the collection that was passed it to it
const lottery = randomCollectionItem(collection2);

console.log(character, lottery);

//Generic Classes &&
//generic constraints
class DataCollection<T extends HasID> {
  constructor(private data: T[]) {}

  //load one item at random
  loadOne() {
    const i = Math.floor(Math.random() * this.data.length);
    return this.data[i];
  }

  //get all items
  loadAll() {
    return this.data;
  }

  //add an item and return
  add(value: T): T[] {
    this.data.push(value);
    return this.data;
  }

  //delete an item
  delete(id: number): T[] {
    this.data = this.data.filter((item) => item.id !== id);
    return this.data;
  }
}

//defines a User objects
interface User {
  name: string;
  score: number;
  id: number;
}

//extends the collection type allowing for use of the ID (Used the delete method)
interface HasID {
  id: number;
}

const users = new DataCollection<User>([
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
