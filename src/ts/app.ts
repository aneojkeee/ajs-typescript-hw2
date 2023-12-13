import Cart from './Cart';
import Movie from './Movie';
import Book from './Book';
import Phone from './Phone';
import Music from './Music';


const movie = new Movie(
1,
'The Avengers',
true,
    'Мстители',
    2012,
    'США',
    'Avengers Assemble!',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    137,
    1000,
    'avengers.png',
);
const music = new Music(1008, "Meteora", "Linkin Park", 900);
const book = new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225);
const cart = new Cart();

cart.add(movie);
cart.add(music);
cart.add(book);

console.log(cart);