Object.defineProperty(exports, "__esModule", { value: true });
class MusicAlbum {
  constructor(id, name, author, price) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.price = price;
    this.count = false;
    this.amount = 1;
  }
}
exports.default = MusicAlbum;
