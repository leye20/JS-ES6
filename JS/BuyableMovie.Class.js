import { Movie } from './Movies.Class.js';
export class BuyableMovie extends Movie { 
    // constructor ( name, genre, year, price ) {
    //     this.name = name;
    //     this.genre = genre;
    //     this.year = year;
    //     this.price = price; // Set a price now, too.
    // }
    get getPrice () {
        return this.price;
    }
    set setPrice ( price ) {
        this.price = parseFloat( price );
    }
}