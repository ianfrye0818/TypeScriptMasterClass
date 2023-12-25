//____________________
//extending interfaces
//____________________

interface HasFormatter {
  format(): string;
}

// any properties included in HasFormatter are avail in bill when extended
interface Bill extends HasFormatter {
  id: string | number;
  amount: number;
  server: string;
}

const user = {
  id: 1,
  format(): string {
    return `this user has an id of ${this.id}`;
  },
};

const bill: Bill = {
  id: 2,
  amount: 50,
  server: 'mario',

  //extends so this will require a format function
  format(): string {
    return `Bill with id${this.id} has $${this.amount} to pay`;
  },
};

function printFormatted(val: HasFormatter): void {
  console.log(val.format());
}

function printBill(bill: Bill): void {
  console.log('server:', bill.server);
  console.log(bill.format);
}

//valid
printFormatted(user);
printFormatted(bill);

//error user does not conform to bill interface
// printBill(user)

//valid -> bill object conforms to bill interface
printBill(bill);
