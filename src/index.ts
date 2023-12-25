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
  return id;
}
