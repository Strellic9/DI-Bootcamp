// 🌟 Exercise 1 : Information
// Instructions
// Part I : function with no parameters

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you 
// (ie. your name, age, hobbies ect…).
// Call the function.

console.log('__________EXC 1 ↓__done____________')

function infoAboutMe()  {
	console.log('Name`s Aleks, im 24, into cooking, sports of all kinds but especially power lifting, reading etc')
}
infoAboutMe();

// Part II : function with three parameters

// Create a function called  that takes 3 parameters.
// The function should console.log a sentence about the person 
// (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

function infoAboutPerson(personName, personAge, personFavoriteColor) {
	console.log('Ur name`s '+personName+', you are '+personAge+' years old, your pupuls color is ', personFavoriteColor);
}

infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

console.log('__________EXC 2 ↓__done____________')

// Instructions
// John created a simple tip calculator to help calculate how much to 
// tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.

// Inside the function, ask John for the amount of the bill.

// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

// Console.log the tip amount and the final bill (bill + tip).

// Call the calculateTip() function.

// x=0;
// function calculateTip() {
// 	bill=parseInt(prompt('Hey Johny what the bill says'));
// 	if (bill<50) x=(bill * 0.2);
// 	else if (bill<200) x=(bill * 0.15);
// 	else x=(bill * 0.1);
// 	console.log('bill is',bill);
// 	console.log('tip is',Math.round(x));
// }

// calculateTip();


console.log('__________EXC 3 ↓__done with bonus____________')

// 🌟 Exercise 3 : Find The Numbers Divisible By 23
// Instructions
// Create a function call isDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

function isDivisible(divisor) {
	var sum=0;
	var arr=[''];	
	for (let i=0; i<501; i++) {
		if (i % divisor==0) {
			arr=arr+String(i)+' ';
			sum=sum+i;
		}
	
	}
	console.log ('Outcome: ',String(arr))
	console.log ('Sum: ',String(sum))
}
isDivisible(23);

console.log('__________EXC 4 ↓_done with bonus_____________')

// 🌟 Exercise 4 : Shopping List
// Instructions
// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following
//  items: “banana”, “orange”, and “apple”. It means that 
//  you have 1 banana, 1 orange and 1 apple in your cart.

// Create a function called myBill() that takes no 
// parameters.

// The function should return the total price of your 
// shoppingList. In order to do this you must follow these 
// rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices
//  object.

// Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s 
// stock by 1

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1,
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10,
} 

let shoppingList = ['banana','orange','apple'];
console.log('ya wanna buy these:', shoppingList);
console.log('Thats what we have:', stock);

function MyBill() {
	let sum=0;
	for (let i of shoppingList)
		if (i in stock && stock[i]>0) {
			sum+=prices[i]
			stock[i]--
		}
	console.log('So your bill is', String(sum));
	console.log('And look what is left in stock:', stock);
}

MyBill();

console.log('__________EXC 5 ↓______________')

// Exercise 5 : What’s In My Wallet ?
// Instructions
// Note: Read the illustration (point 4), while reading
//  the instructions

// Create a function named changeEnough
// (itemPrice, amountOfChange) that receives two arguments:
// an item price
// and an array representing the amount of change in your 
// pocket.

// In the function, determine whether or not you can 
// afford the item.
// If the sum of the change is bigger or equal than the
//  item’s price (ie. it means that you can afford the item),
//  the function should return true
// If the sum of the change is smaller than the item’s 
// price (ie. it means that you cannot afford the item) 
// the function should return false

// Change will always be represented in the following 
// order: quarters, dimes, nickels, pennies.

let price = 4.25;
let change = [10, 5, 2, 3]; 
var value = [0.25,0.1,0.05,0.01];

function valueConv(value,change) {
	let change1=[...change];
	for (let i=0;i<change1.length;i++) {
		change1[i]=change[i]*value[i];
	}
	return change1;
}

console.log('here is the inital data:');
console.log('price',price);
console.log('change',change);
console.log('value of coins',value)

var change2=valueConv(value,change);
// console.log(change2);

function changeEnough(price, change) {
	let sum=0;
	let x=false;
	for (let i of change) sum+=i;
	if (price<sum) x=true;
	console.log('can u buy this?',x);
	console.log('price was',price+', and amount of ur money was', sum);
}

changeEnough(price,change2);

console.log('__________EXC 6 ↓______________')

// 🌟 Exercise 6 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s 
// costs:
// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the function totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.

