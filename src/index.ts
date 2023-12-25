//tuples
let person: [string, number, boolean] = ['mario', 34, true];

let hslaColor: [number, string, string, number];
hslaColor = [200, '100%', '65%', 67];

let xyCoords: [number, number];
xyCoords = [94.7, 20.1];

function userCoords(): [number, number] {
  return [34.2, 38.8];
}
const [lat, long] = userCoords();

//named tuples
let user: [name: string, age: number];
user = ['bob', 34];
console.log(user[0]);
