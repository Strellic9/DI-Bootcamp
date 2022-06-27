
// EXC 1 DONE
let FavFood =  'salmon';
let FavMeal = "lunch";

console.log('i love', FavFood, 'so much its unreal. i would eat', FavFood, 'at every', FavMeal, 'if i could.');
console.log('___________EXC 1 DONE________');


// EXC 2 DONE

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length
let myWatchedSeriesSentence = 'Though I didnt watch any of these if Im honest. I didnt watch much of any series in my life, apart from first 4 seasons of Game of the Thrones.';
console.log('one of the serials I watched was', myWatchedSeries[1], '. Ive only watched like', myWatchedSeriesLength, 'of these.', myWatchedSeriesSentence);

myWatchedSeries[3]='friends';
myWatchedSeries.push('Game of Thrones');
myWatchedSeries.unshift('Hellsing');
myWatchedSeries.splice(1,1)
console.log(myWatchedSeries[1][2]);
console.log(myWatchedSeries);
console.log('___________EXC 2 DONE________');

// EXC 3 

let tempC='10';
console.log(tempC, 'degrees Celsius is equal to', Number(tempC)*9/5+32, 'degrees Fahrenheit.' );
console.log('___________EXC 3 DONE________');

// EXC 4 

    let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: 55 cause why not. they are numbers
    // Actual: 55

    a = 2;

    console.log(a+b) //second expression
    // Prediction: 23 same
    // Actual: 23

    console.log('value of C if undefined since ut wasnt defined. Get a look:', c)
    console.log(3 + 4 + '5', '- we get it because the summary operation forms it into a string');
    console.log('___________EXC 4 DONE________');


// EXC 5 

	console.log(typeof(15))
	
	// Prediction: number
	// Actual:

	console.log(typeof(5.5))
	
	// Prediction: real? number
	// Actual: number

	console.log(typeof(NaN))
	
	// Prediction: object
	// Actual: number

	console.log(typeof("hello"))
	// Prediction: string
	// Actual: string

	console.log(typeof(true))
	
	// Prediction: boolean
	// Actual: boolean

	console.log(typeof(1 != 2))
	
	// Prediction: boolean
	// Actual: boolean

	console.log("hamburger" + "s")
	
	// Prediction:  hamburgers
	// Actual: hamburgers

	console.log("hamburgers" - "s")
	
	// Prediction: NaN
	// Actual: NaN

	console.log("1" + "3")
	
	// Prediction: 13
	// Actual: 13

	console.log("1" - "3")
	
	// Prediction: NaN
	// Actual: -2

	console.log("johnny" + 5)
	
	// Prediction: johny5
	// Actual: johny5

	console.log("johnny" - 5)
	
	// Prediction: NaN
	// Actual: NaN

	console.log(99 * "hello")
	
	// Prediction: hello 99 times
	// Actual: NaN

	console.log(1 != 1)
	
	// Prediction: false
	// Actual: false

	console.log(1 == "1")
	
	// Prediction: true
	// Actual: true 

	console.log(1 === "1")
	
	// Prediction: false
	// Actual: false
    console.log('___________EXC 5 DONE________');

// EXC 6 
	console.log();

	console.log(5 + "34");
	
	// Prediction: 534
	// Actual: 534

	console.log(5 - "4");
	
	// Prediction: 1
	// Actual: 1
 
	console.log(10 % 5);
	
	// Prediction: 0
	// Actual: 0

	console.log(5 % 10);
	
	// Prediction: 5
	// Actual: 5 

	console.log("Java" + "Script");
	
	// Prediction: JavaScript
	// Actual:JavaScript

	console.log(" " + " ");
	
	// Prediction: '  '
	// Actual: '  '

	console.log(" " + 0);
	
	// Prediction: ' 0'
	// Actual: ' 0'

	console.log(true + true);
	
	// Prediction: false
	// Actual: 2

	console.log(true + false);
	
	// Prediction: true
	// Actual: 1

	console.log(false + true);
	
	// Prediction: true
	// Actual: 1

	console.log(false - true);
	
	// Prediction: true
	// Actual: -1

	console.log(!true);
	
	// Prediction: false
	// Actual: false

	console.log(3 - 4);
	
	// Prediction: -1
	// Actual: -1

	console.log("Bob" - "bill");
	
	// Prediction: NaN
	// Actual: NaN

	    console.log('___________EXC 6 DONE________');
