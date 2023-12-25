//------------------
//function signatures
//------------------

//define the argument and then define the return type
type Calculator = (numOne: number, numTwo: number) => number;

//conforms type Calculator
function addTwoNumbers(a: number, b: number) {
  return a + b;
}
//conforms type Calculator
function multipyTwoNumbers(first: number, second: number) {
  return first * second;
}

//does conform to calculator -> return and at least one of the arugments are the cooret type
function squareNumber(num: number) {
  return num * num;
}
//does not conform to Calculator -> arguments are a string
function convertToNumber(str: string) {
  return parseInt(str);
}
//does not conform to Calculator -> returning a string
function joinTwoNumbers(numOne: number, numTwo: number) {
  return `${numOne}${numTwo}`;
}

let calcs: Calculator[] = [];

//valid
calcs.push(addTwoNumbers);
calcs.push(multipyTwoNumbers);
calcs.push(squareNumber);

//not valid:
// calcs.push(joinTwoNumbers)
// calcs.push(convertToNumber)

//------------------
//function signatures on interfaces
//------------------

interface HasArea {
  name: string;
  calcArea: (a: number) => number;
}

const shapeOne: HasArea = {
  name: 'square',
  calcArea(l: number): number {
    return l * l;
  },
};

const shapeTwo: HasArea = {
  name: 'circle',
  calcArea(r: number): number {
    return (Math.PI * r) ^ 2;
  },
};

console.log(shapeOne.calcArea(3));
console.log(shapeTwo.calcArea(4));
