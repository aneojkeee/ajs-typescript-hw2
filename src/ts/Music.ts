import Buyable from "./Buyable";

export default class MusicAlbum implements Buyable {
  readonly id: number;
  readonly name: string;
  readonly author: string;
  readonly price: number;
  readonly count: boolean;
  readonly amount: number;

  constructor(
    id: number,
    name: string,
    author: string,
    price: number,

  ) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.price = price;
    this.count = false;
    this.amount = 1;
  }
}