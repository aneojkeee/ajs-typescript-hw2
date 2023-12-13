import Buyable from './Buyable';

export default class Phone implements Buyable {
  readonly id: number;
  readonly name: string;
  readonly price: number;
  readonly count: boolean;
  readonly amount: number;

    constructor(id: number, name: string, price: number) { 
    this.id = id;
    this.name = name;
    this.price = price;
    this.count = true;
    this.amount = 1;
  }
}