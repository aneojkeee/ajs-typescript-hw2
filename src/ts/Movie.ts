import Buyable from "./Buyable";
export default class Movie implements Buyable {
  readonly id: number;
  readonly name: string;
  readonly isIMAX: boolean;
  readonly original_name: string;
  readonly jear: number;
  readonly state: string;
  readonly slogan: string;
  readonly style: string[];
  readonly timing: number;
  readonly price: number;
  readonly img: string;
  readonly count: boolean;
  readonly amount: number;

  constructor(
    id: number,
    name: string,
    isIMAX: boolean,
    original_name: string,
    jear: number,
    state: string,
    slogan: string,
    style: string[],
    timing: number,
    price: number,
    img: string,

  ) {
    this.id = id;
    this.name = name;
    this.isIMAX = isIMAX;
    this.original_name = original_name;
    this.jear = jear;
    this.state = state;
    this.slogan = slogan;
    this.style = style;
    this.timing = timing;
    this.price = price;
    this.img = img;
    this.count = false;
    this.amount = 1;
  }
}