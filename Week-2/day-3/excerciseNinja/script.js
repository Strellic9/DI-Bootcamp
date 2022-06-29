// Exercise 1 : Checking The BMI
// Instructions
// Hint:
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// Create two objects, each object should hold a person’s details. Here are the details:
// FullName
// Mass
// Height

// Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person


function bmi (height, mass) {
	let x=mass/((height/100)^2);
	return x;
}

let jack = {
	FullName: 'Jack the Ripper',
	Mass: 120,
	Height: 178,
	BMI: bmi(178,120),
}

let sam = {
	FullName: 'Samuel Rodrigues',
	Mass: 90,
	Height: 184,
	BMI: bmi(184,90),
}

console.log(jack.BMI, 'jack`s BMI');
console.log(sam.BMI, 'sam`s BMI');

// Outside of the objects, create a JS function that compares 
// the BMI of both objects.

// Display the name of the person who has the largest BMI.

let x1=jack.BMI, x2=sam.BMI;
if (x1>x2) console.log('jack has the largest BMI');
else console.log ('sam has the largest BMI');

console.log('____________EXC1 DONE______________')

// Exercise 2 : Grade Average
// Instructions
// Hint:
// - This Exercise is trickier then the others. You have to think about its structure before you start coding.
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

// Create a function called findAvg(gradesList) that takes an argument called gradesList.

let gradesList = [43,87,56,89,98,65,85,51,99];

function findAvg(gradesList) {
	let sum=0, n=0;
	for (let i of gradesList) {
		sum=sum+i;
		n=n+1;
	}
	let avg=parseInt(sum/n);
	return avg;
}

function test(a) {
	if (a>=65) console.log(String(a),', u passed');
	else console.log(String(a),', no luck for you, come again');
}

test(findAvg(gradesList));


console.log('____________EXC2 DONE______________')
