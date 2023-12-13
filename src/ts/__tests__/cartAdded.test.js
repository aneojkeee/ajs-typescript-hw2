const __importDefault = (this && this.__importDefault)
  || function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const Cart_1 = __importDefault(require("../Cart"));
const Movie_1 = __importDefault(require("../Movie"));
const Book_1 = __importDefault(require("../Book"));
const Music_1 = __importDefault(require("../Music"));
const Phone_1 = __importDefault(require("../Phone"));

test("фильм добавляется в корзину", () => {
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
    "avengers_img.png",
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
  expect(cart.getAll.includes(movie)).toBeTruthy();
  expect(cart.getAll.includes(music)).toBeTruthy();
  expect(cart.getAll.includes(book)).toBeTruthy();
});
test("каждый фильм добавляется в корзину только 1 раз", () => {
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
    "avengers_img.png",
  );
  const cart = new Cart_1.default();
  cart.add(movie);
  cart.add(movie);
  cart.add(movie);
  expect(cart.getAll.length).toBe(1);
});
test("в корзину можно положить несколько единиц техники", () => {
  const cart = new Cart_1.default();
  const phone = new Phone_1.default(25, "IPhone XR 32Gb", 45990);
  cart.add(phone);
  cart.add(phone);
  expect(cart.getAll[0].amount).toBe(2);
  expect(cart.getAll.length).toBe(1);
});
test("price корректно считает цену", () => {
  const cart = new Cart_1.default();
  const music = new Music_1.default(1008, "Meteora", "Linkin Park", 900);
  const book = new Book_1.default(
    1001,
    "War and Piece",
    "Leo Tolstoy",
    2000,
    1225,
  );
  cart.add(music);
  cart.add(book);
  expect(cart.price()).toBe(2900);
});
test("price корректно считает скидку", () => {
  const cart = new Cart_1.default();
  const music = new Music_1.default(1008, "Meteora", "Linkin Park", 900);
  const book = new Book_1.default(
    1001,
    "War and Piece",
    "Leo Tolstoy",
    2000,
    1225,
  );
  cart.add(music);
  cart.add(book);
  expect(cart.discountPrice(30)).toBe(870);
});
test("price корректно считает цену со скидкой", () => {
  const cart = new Cart_1.default();
  const music = new Music_1.default(1008, "Meteora", "Linkin Park", 900);
  const book = new Book_1.default(
    1001,
    "War and Piece",
    "Leo Tolstoy",
    2000,
    1225,
  );
  cart.add(music);
  cart.add(book);
  expect(cart.totalSum(30)).toBe(2030);
});
test("price корректно удаляет элемент из корзины ", () => {
  const cart = new Cart_1.default();
  const music = new Music_1.default(1008, "Meteora", "Linkin Park", 900);
  const book = new Book_1.default(
    1001,
    "War and Piece",
    "Leo Tolstoy",
    2000,
    1225,
  );
  cart.add(music);
  cart.add(book);
  cart.deleteItemById(1001);
  expect(cart.getAll.includes(book)).toBeFalsy();
});
test("price корректно удаляет элемент из корзины ", () => {
  const cart = new Cart_1.default();
  const phone = new Phone_1.default(25, "IPhone XR 32Gb", 45990);
  const book = new Book_1.default(
    1001,
    "War and Piece",
    "Leo Tolstoy",
    2000,
    1225,
  );
  cart.add(phone);
  cart.add(phone);
  cart.add(book);
  cart.deleteItemById(25);
  cart.deleteItemById(1001);
  expect(cart.getAll[0].amount).toBe(1);
  expect(cart.getAll.length).toBe(1);
  expect(cart.getAll.includes(book)).toBeFalsy();
});
