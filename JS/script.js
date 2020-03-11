// import './Movies.Class.js';

/**
 * Lets see what some of our newer array methods are...
 */

 // .find() method:
var myArray = [ 'Hello, World', 2, 3, true, 5, null, 38 ];
var myValue = myArray.find ( function ( element ) { return element > 4; } );
console.log( myValue ); // Return 5, an element from our array!

var isMyStringInside = myArray.find ( function ( element ) { return element === 'Hello, World'; } );
console.log( isMyStringInside ); // We would get the matching element.

// Find is helpful for checking id an element exists in an array!
var isMyStringInside = myArray.find ( function ( element ) { return element === 'Goodbye, Everyone'; } );
console.log( isMyStringInside ); // Not found

/**
 * .findIndex()
 */

var findAnIndex = myArray.findIndex ( function ( element ) { return element === 2; } );
console.log( findAnIndex ); // But this time, it returned the value's INDEX.

/**
 * .entries
 */

var pairing = myArray.entries();
console.log( pairing ); // Returns an iterator.
console.log( pairing.next().value ); // We can keep bumping to the next item, getting a nice key/value array to let us know whats inside!
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );

/**
 * .from() method:
 */

// We can pass a string to Array's "from" method, and break
var fromArray = Array.from( 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' );
console.log( fromArray );
var fromArray2 = Array.from( 'Hello, World' );
console.log( fromArray2 ); // Even spaces and special characters will be captured as elements!

/**
 * .filter() method
 */

var filtered = myArray.filter( function ( element ) { return element > 4; } );
console.log( filtered ); // All matches returned! 5 and 38!

/**
 * .reduce() method:
 * We can add on to a value, returns only a single.
 */

var reduceResult = myArray.reduce( function ( accumulator, currentVal ) {
    return accumulator + currentVal;
});
console.log( reduceResult );

console.log( [ 1, 2, 3, 4 ].reduce( function ( a, v ) { return a + v; } ) ); // Because we have numbers in here, they are being added (mathematically.). the a, v is just a parameter and better to use discreptive names to doster understanding!

/**
 * Let and Const
 */

var x = 3; // Standard variable declaration. function-scoped.
let y = 7; // Let is blocked scope.
const z = 36; // Const is blocked-scope, but  re-assignment is not allowed.

// z = 16; Not allowed! var and let allow re-assignment.


for ( var myVar = 0; myVar < 10; myVar++ ) {
    console.log( 'For loop iteration...' );
}
console.log( 'myVar = '+myVar);


for ( let myNewVar = 0; myNewVar < 10; myNewVar++ ) {
    console.log( 'For loop iteration...' );
    console.log( 'myNewVar = '+myNewVar);
}

/**
 * Const cant be re-assigned... but its insides can be manipulated?
 */

const myObj = {
    name: 'Henry',
    age: 18
}

myObj.name = 'Sandy'; // Can we update properties or array elements inside of a const- declared variable?
myObj.hobbies = [];
myObj.hobbies.push( 'Mountain Climbing' );
console.log( myObj );

// myObj = {} // This would still give an error. Only insides for a const can be manipulated.

/**
 * Lets shake things up with: Functions
 * New syntax...
 */

// Classic function declaration...
function myFunction ( a, b ) {
    return Number( a ) + Number( b );
}
console.log( myFunction( 3, 7 ) );

// ES6 style:
myFunction = ( a, b ) => Number( a ) + Number( b );
console.log( myFunction( 3, 8 ) );

// Bigger function
myOtherFunction = ( a, b ) => {
    const myAnswer = Number( a ) + Number( b );
    return myAnswer;
}
console.log( myOtherFunction( 34, 6 ) );

/**
 * Function default parameter values.
 */

// We can set defaults, to prevent errors in case nothing gets passed in for a parameter.
addNums = ( x = 0, y = 0 ) => x + y;

console.log( addNums() ); // o arguments, but our default values kick in.

/**
 * Rest parameter.
 */

// Rest paramater MUST BE THE LAST PARAMETER.
findHighNums = ( minNum = 0, ...args ) => { // ...args will capture any number of arguments that we pass!/ ... means we can pass in any amount of number.
    minNum = Number( minNum );
    if ( minNum === NaN ) minNum = 0;
    const highNums = args.filter( ( element ) => element > minNum );
    // console.log( args ); // It can be called by the name we had inbetween our parenthesis.
    return highNums;
}

console.log( findHighNums( 5, 2, 20, 50, 3, 0, 10, 24, -508 ) );

// Getting the sum of ALL numbers passed in!
addAllNums = ( ...nums ) => nums.reduce( ( a, v ) => a + v );
console.log( addAllNums( 64, 6, 10, 20 ) );

/**
 * Template Literals
 */

const helloVar = 'Hello, World';
const sampleName = 'Sam';

const myNewString = `Hey there, my name is ${sampleName}; I\'d like to give you a big: "${helloVar}"!!`; // The syntax for templte literals is: ${variableName}
// Note: This only works inside of backticks!(`) But is super useful. It saves us from extra concatenation.
console.log( myNewString );

/**
 * Spread Operator
 * ***Don't get this confused with the rest parameter! Both are three dots...
 * ***Remember that rest parameter is always in PARAMETER area of a function, nowhere else. Spread is used ANYWHERE else, basically.
 */

const newArray = [ 'Hello', ',', ' ', 'World', '!', ];
console.log( newArray );
console.log( ...newArray ); // Brought the values in the array together a one (space-separated) string, or did it?

// Spread operator separates into separate values.
const aBunchOfNums = [ 5, 10, 36, 58 ];
console.log( addAllNums( 5, 10, 36, 58 ) ); // This and the below, are equivalent (our array gets broken up!)
console.log( addAllNums( ...aBunchOfNums ) ); // spreading an argument.

/**
 * String Methods
 */

/**
 * .search() Method:
 * 
 * Regex Learning Tool: https://regexone.com/
 */

const myTestString = 'Greetings, Program!';
console.log( myTestString.search( /gs/i ) ); // Regex match. i is case insensitive, which means it does not need to find the exact match. Retruns the Substring Position. TING is 4.

/**
 * .replace () Method:
 */

const myReplacedString = myTestString.replace( /Program/, 'World' ); // Find a string, and replace it! Super cool.
console.log( myReplacedString );

/**
 * Blocks:
 */

// Unnamed block.. we can use this to contain otherwise-global const and let variables.
{
    const myBlockNestedVar = 38;
}

// console.log( myBlockNestedVar );

let myFinalResult = 0;
// We can name blocks if we want.
myOrganiseName: { // This could be named anything... just a label
    // We can organize some code in here, and control scope of let.const.
    let myBlockNestedVar = 55; // We used the same name as in our unnamed block!? That's okay, it was born in a differently scoped block!.
    myBlockNestedVar++;
    console.log( myBlockNestedVar );
    myFinalResult - myBlockNestedVar
}

console.log( myFinalResult );

/**
 * Classes.
 * *** Check our import, thats how we're accessing this.
 */


class Movie {
    constructor( name, genre, year) {
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
    showPoster() { // This is a method! we can name them as we'd like.
        const info = `
            MOVIE INFO
            ==========
            Name: ${this.name}
            Genre: ${this.genre}
            Year: ${this.year}
        `;
        return info;
    }
}

const tron = new Movie( 'Disney\'s TRON', 'Adventure', 1982 );
const dragonheart = new Movie( 'DragonHeart', 'Medieval Fantasy', 1996 );
const godfather = new Movie( 'Godfather II', 'Action/Thriller', 1974 );

console.log( tron );
console.log( dragonheart );
console.log( godfather );