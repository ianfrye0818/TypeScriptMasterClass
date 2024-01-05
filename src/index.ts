// Generic Interfaces

interface Collection<T> {
  data: T[];
  name: string;
}

const collection1: Collection<string> = {
  data: ['mario', 'yoshi', 'peach', 'toad'],
  name: 'Nintendo Characters',
};

const collection2: Collection<number> = {
  data: [20, 15, 256, 3456],
  name: 'Winning Lottery Numbers',
};

function randomCollectionItem<T>(c: Collection<T>): T {
  const i = Math.floor(Math.random() * c.data.length);
  return c.data[i];
}

const character = randomCollectionItem<string>(collection1);
const lottery = randomCollectionItem(collection2);

console.log(character, lottery);

//Generic Classes &&
//generic constraints

interface HasID {
  id: number;
}

class DataCollection<T extends HasID> {
  constructor(private data: T[]) {}

  loadOne() {
    const i = Math.floor(Math.random() * this.data.length);
    return this.data[i];
  }
  loadAll() {
    return this.data;
  }
  add(value: T): T[] {
    this.data.push(value);
    return this.data;
  }

  delete(id: number): void {
    this.data = this.data.filter((item) => item.id !== id);
  }
}
interface User {
  name: string;
  score: number;
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
