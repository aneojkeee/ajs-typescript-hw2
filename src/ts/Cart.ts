import Buyable from "./Buyable";

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    const checkIn = this._items.find((elem) => elem.id === item.id);

    if (!checkIn) {
      this._items.push(item);
    }

    if (checkIn && checkIn.count === true) {
      checkIn.amount += 1;
    }
  }

  get getAll(): Buyable[] {
    return [...this._items];
  }
  price(): number {
    return this._items.reduce((acc, prev) => (acc += prev.price), 0);
  }

  discountPrice(discount: number): number {
    return (
      (this._items.reduce((acc, prev) => (acc += prev.price), 0) * discount) /
      100
    );
  }
  totalSum(discount: number): number {
    const rate = this.discountPrice(discount);
    return this.price() - rate;
  }

  deleteItemById(id: number): void {
    const index = this._items.findIndex((el) => el.id === id);
    const deleteItem = this._items[index];
    if (deleteItem.count && deleteItem.amount > 1) {
      deleteItem.amount -= 1;
    } else {
      this._items.splice(index, 1);
    }
  }
}