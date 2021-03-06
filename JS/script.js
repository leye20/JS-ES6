import { Movie } from './Movies.Class.js'; // Bring in our file
// You'll have to use a server for this to work. brower 
/**
 * Lets see what some of our newer array methods are...
 */

 import { BuyableMovie } from './BuyableMovie.Class.js';

 import { Calculator } from './Calculator.Class.js';

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
var myOtherFunction = ( a, b ) => {
    const myAnswer = Number( a ) + Number( b );
    return myAnswer;
}
console.log( myOtherFunction( 34, 6 ) );

/**
 * Function default parameter values.
 */

// We can set defaults, to prevent errors in case nothing gets passed in for a parameter.
var addNums = ( x = 0, y = 0 ) => x + y;

console.log( addNums() ); // o arguments, but our default values kick in.

/**
 * Rest parameter.
 */

// Rest paramater MUST BE THE LAST PARAMETER.
var findHighNums = ( minNum = 0, ...args ) => { // ...args will capture any number of arguments that we pass!/ ... means we can pass in any amount of number.
    minNum = Number( minNum );
    if ( minNum === NaN ) minNum = 0;
    const highNums = args.filter( ( element ) => element > minNum );
    // console.log( args ); // It can be called by the name we had inbetween our parenthesis.
    return highNums;
}

console.log( findHighNums( 5, 2, 20, 50, 3, 0, 10, 24, -508 ) );

// Getting the sum of ALL numbers passed in!
var addAllNums = ( ...nums ) => nums.reduce( ( a, v ) => a + v );
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



const tron = new Movie( 'Disney\'s TRON', 'Adventure', 1982 );
const dragonheart = new Movie( 'DragonHeart', 'Medieval Fantasy', 1996 );
const godfather = new Movie( 'Godfather II', 'Action/Thriller', 1974 );

console.log( tron );
console.log( dragonheart );
console.log( godfather );

const billAndTedsExecellentAdventure = new BuyableMovie( 'Bill and Ted\'s Excellent Adventure', 'Comedy', 1989 );
billAndTedsExecellentAdventure.setPrice = '16.37';
console.log( billAndTedsExecellentAdventure );

// Using  regular (non-static) method. Called from OBJECTS.
console.log( billAndTedsExecellentAdventure.showPoster() );

console.log( Calculator.add( 3, 3, 3, 3, '3', 5 ) ); // 20
console.log( Calculator.subtract( 16, 5 ) ); // 11

/**
 * SETS
 */

let mySet = new Set();

mySet.add( 5 );
mySet.add( 5 );
mySet.add( 2 );

console.log( mySet );

console.log( mySet.size );

console.log( mySet.has( 5 ) );
console.log( mySet.has( 36 ) );

let mySetIterator = mySet.entries();
console.log( mySetIterator.next().value ); // show value 1...
console.log( mySetIterator.next().value ); // now value 2...
console.log( mySetIterator.next().value ); // now value 3...
// since sets contain only yunique values, there is no need for a proper
// "key", as the value is already unique!

mySet.delete( 'Hello, World :)' ); // remotes an element from your set
console.log( mySet );

/**
 * Maps
 */

const myValues = { // old workaround was objects... but these are properties.
    name: 'Billy',
    age: 95,
    greeting: 'Yo!'
}

console.log( myValues ); // Object... gross, not what this is intended for.

const myMap = new Map( [ // We can pass an array of arrays...
    [ 'name', 'Billy'], // [key, value]
    [ 'age', 95],
    [ 'greeting', 'Yo!']
    [ 7, 'We can even use numbers as keys, unlike objects.']
]);

console.log( myMap.size ); // How many items in the map?
console.log( myMap.has( 'age' ) ); // check for a key... // true
console.log( myMap.get( 'age' ) ); //Grab our value from the key! // 95
const myMapIterator = myMap.keys(); // gets an iterator
console.log( myMapIterator.next().value ); // First item's value...
console.log( myMapIterator.next().value ); // Second items value...
console.log( myMapIterator.next().value );
console.log( myMapIterator.next().value );
console.log( myMapIterator.next().value ); // Fifth items value...

console.log( myMap );

myMap.clear();
console.log( myMap.size );