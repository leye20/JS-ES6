/**
 * Classes.
 * *** Check our import, thats how we're accessing this.
 * Note we are exporting it.
 */

export class Movie {
    constructor( name, genre, year ) { // We can use the constructor method to set up our properties. When we make a new Movie (object), we can pass in arguments this way!
        this.name = name;
        this.genre = genre;
        this.year = year;
    }
    get getName() { // How we retrieve the property. A GETTER.
        return this.name;
    }
    set setName( name ) { // How we store a new property value. A SETTER.
        if ( typeof name === 'string' ) {
            this.name = name;
        } else {
            this.name = name.toString();
        }
    }
    get getYear() {
        return 'y'+this.year;
    }
    set setYear( year ) {
        this.year = Number( year );
    }
    showPoster() { // This is a method! We can name them as we'd like.
        const info = `
            MOVIE INFO
            ==========
            Name:  ${this.name}
            Genre: ${this.genre}
            Year:  ${this.year}
        `;
        return info;
    }
 }