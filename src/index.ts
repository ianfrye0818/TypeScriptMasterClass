//____________________
//extending type aliases
//____________________

type Person = {
  id: string | number;
  firstName: string;
};

//extending
type User = Person & {
  email: string;
};

const person1: Person = {
  id: 1,
  firstName: 'mario',
};

const person2: User = {
  id: 2,
  firstName: 'Yoshi',

  //required since User extends the Person other type
  email: 'Yoshi@Yoshi.com',
};

//does not conform to either type
const person3 = {
  email: 'peach@peach.com',
};

function printUser(user: User) {
  console.log(user.id, user.email, user.firstName);
}
//not valid -> no email property
// printUser(person1)
//not valid ->
// printUser(person3)

//valid
printUser(person2);
