//union types

let someId: number | string;

someId = 1;
someId = '2';

let email: string | null;

email: null;
email: 'Ian@ian.com';

type Id = number | string;

let anotherId: Id;

anotherId = '1234;oiwevj8923';
anotherId = 234239729387;

//union type downfalls

function swapIdType(id: Id): Id {
  //valid parse int code:
  parseInt('4');

  // can only use methods that are common between all types

  //not valid as typescript does not know this will for sure be a string
  // parseInt(id)

  // could check type of before running
  if (typeof id === 'string') {
    // can do anything specific to strings
    return parseInt(id);
  } else {
    //can use anything specific to numbers
    return id.toString();
  }
}
const idOne = swapIdType(1);
console.log('id one: ', typeof idOne); //id one: string
const idTwo = swapIdType('2');
console.log('id two: ', typeof idTwo); //id two: number

//tagged interfaces
interface User {
  type: 'user';
  username: string;
  email: string;
  id: Id;
}

interface Person {
  type: 'person';
  firstName: string;
  age: number;
  id: Id;
}

function logDetails(value: User | Person): void {
  if (value.type === 'user') {
    // typescript knows the type passed in is a User type
    console.log(value.email, value.username);
  }
  if (value.type === 'person') {
    //typescript knows the type passed in is the Person type
    console.log(value.firstName, value.age);
  }
}
