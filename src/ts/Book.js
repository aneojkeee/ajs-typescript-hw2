Object.defineProperty(exports, "__esModule", { value: true });
class Book {
  constructor(id, name, author, price, pages) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.price = price;
    this.pages = pages;
    this.count = false;
    this.amount = 1;
  }
}
exports.default = Book;
