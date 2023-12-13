const __importDefault = (this && this.__importDefault)
  || function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const Cart_1 = __importDefault(require("./Cart"));
const Movie_1 = __importDefault(require("./Movie"));
const Book_1 = __importDefault(require("./Book"));
const Music_1 = __importDefault(require("./Music"));

const movie = new Movie_1.default(
  1,
  "The Avengers",
  true,
  "Мстители",
  2012,
  "США",
  "Avengers Assemble!",
  ["фантастика", "боевик", "фэнтези", "приключения"],
  137,
  1000,
  "avengers.png",
);
const music = new Music_1.default(1008, "Meteora", "Linkin Park", 900);
const book = new Book_1.default(
  1001,
  "War and Piece",
  "Leo Tolstoy",
  2000,
  1225,
);
const cart = new Cart_1.default();
cart.add(movie);
cart.add(music);
cart.add(book);
console.log(cart);
