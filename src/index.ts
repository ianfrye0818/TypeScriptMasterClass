//____________________
//  making a class
//____________________

type Base = 'classic' | 'thick' | 'thin' | 'garlic';

class Pizza {
  //add private properties that can only be updated using setters
  // private title: string
  // private price: number
  private _base: Base = 'classic';
  private _toppings: string[] = [];
  // if they are declared in the constructor and are private  do not need to initialize ->
  constructor(private title: string, private price: number) {}
  // this.title = title
  // this.price = price

  //setter functions for adding or removing pizza toppings
  addTopping(topping: string): void {
    this._toppings.push(topping);
  }

  removeToppings(topping: string): void {
    this._toppings = this._toppings.filter((t) => t !== topping);
  }

  //setter function for updating the base
  selectBase(b: Base): void {
    this._base = b;
  }
}
