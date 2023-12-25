//____________________
//  making a class
//____________________

type Base = 'classic' | 'thick' | 'thin' | 'garlic';

class Pizza {
  title: string;
  price: number;
  base: Base = 'classic';
  toppings: string[] = [];
  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }

  removeToppings(topping: string): void {
    this.toppings = this.toppings.filter((t) => t !== topping);
  }

  selectBase(b: Base): void {
    this.base = b;
  }
}

const pizza = new Pizza('Mario Special', 4.99);

pizza.addTopping('mushrooms');
pizza.addTopping('olives');
pizza.selectBase('thin');

console.log(
  `${pizza.title}: $${pizza.price}, (${pizza.base}) has ${pizza.toppings.join(
    ', '
  )} for toppings`
);
