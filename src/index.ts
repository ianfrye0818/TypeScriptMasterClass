//type aliases

//example 1 - tuple
type rgb = [number, number, number];

function getRandomColor(): rgb {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();

console.log(colorOne, colorTwo);

//example 2 - object literal
type User = {
  name: string;
  score: number;
};

const user1: User = {
  name: 'mario',
  score: 75,
};

function formatUser(user: User): void {
  console.log(`Name ${user.name} has a score of: ${user.score}`);
}

formatUser(user1);
formatUser({ name: 'Yoshi', score: 100 });
