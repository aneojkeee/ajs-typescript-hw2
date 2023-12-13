Object.defineProperty(exports, "__esModule", { value: true });
class Cart {
  constructor() {
    this._items = [];
  }

  add(item) {
    const checkIn = this._items.find((elem) => elem.id === item.id);
    if (!checkIn) {
      this._items.push(item);
    }
    if (checkIn && checkIn.count === true) {
      checkIn.amount += 1;
    }
  }

  get getAll() {
    return [...this._items];
  }

  price() {
    return this._items.reduce((acc, prev) => (acc += prev.price), 0);
  }

  discountPrice(discount) {
    return (
      (this._items.reduce((acc, prev) => (acc += prev.price), 0) * discount) /
      100
    );
  }

  totalSum(discount) {
    const rate = this.discountPrice(discount);
    return this.price() - rate;
  }

  deleteItemById(id) {
    const index = this._items.findIndex((el) => el.id === id);
    const deleteItem = this._items[index];
    if (deleteItem.count && deleteItem.amount > 1) {
      deleteItem.amount -= 1;
    } else {
      this._items.splice(index, 1);
    }
  }
}
exports.default = Cart;
