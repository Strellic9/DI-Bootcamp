// 🌟 Exercise 1 : List Of People

// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.

// Write code to replace “James” to “Jason”.

// Write code to add your name to the end of the people array.

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this let people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

// Write code that gives the index of “Foo”. Why does it return -1 ?

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

let people = ["Greg", "Mary", "Devon", "James"];
people.splice(0,1);
people.splice(2,3,"Jason");
people.push('Aleksei');
console.log(people.indexOf("Mary")); 
console.log(people.slice(1,3));
console.log(people.indexOf("Foo"), "it returns -1 cause there is no such element");
let last=people[people.length-1]; 
console.log(last);


// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.

console.log("Part 2.1__________")


for (let i of people) {
	console.log(i);
}

console.log("Part 2.2__________")

// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.


for (let i of people) {
	console.log(i);
	if (i=='Jason') break;
}


console.log("__________EXC1 DONE_______________");

// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus


// let color=["black",'white','purple','red'];
// for (let i of color) {
// 	console.log('My #'+(color.indexOf(i)+1),'choice is',i)
// }

let color=["black",'white','purple','crimson','blue','pink'];
let suff=['st','nd','rd','th'];
for (let i=0; i<color.length; i++) {
	if (i<4) console.log('My',(i+1)+suff[i],'choice is',color[i]);
		else console.log('My',(i+1)+suff[3],'choice is',color[i]);
}

console.log("__________EXC2 DONE + BONUS_______________");

// 🌟 Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

let num=parseInt(prompt('Ok throw me some number'));
let check=((typeof (num)=='number') && (num<10));
let i=1;
while (check==false && i<3) {
	i++;
	num=parseInt(prompt('Throw some other one. Let it be under 10'));
	check=((typeof (num)=='number') && (num<10));
}
console.log(num);

console.log("__________EXC3 DONE_______________");

// 🌟 Exercise 4 : Building Management
// Review About Objects
// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.

// Console.log how many apartments are on the floors 1 and 3.

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}

console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);
console.log(building.nameOfTenants[1],building.numberOfRoomsAndRent.dan[0]);
let x1=building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1];
let x2=building.numberOfRoomsAndRent.dan[1];
if (x1>x2) {building.numberOfRoomsAndRent.dan[1]=1200};
console.log(String(building.numberOfRoomsAndRent.dan[1]), 'is Dans new rent. Press F');


console.log("__________EXC4 DONE_______________");

// 🌟 Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.

let family = {
	dad: 'Pavel',
	mom: 'Natalia',
	son: 'Aleksei',
	daughter: 'Nastya',
}

for (let i in family) {
	console.log(i);
}

for (let i in family) {
	console.log(family[i]);
}


console.log("__________EXC5 DONE_______________");

// Exercise 6
// Instructions
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

let str=['str','str','str'];
let k=0;
for (let i in details) {
	str[k]=i+' '+details[i];
	k++;
}
console.log(str[0],str[1],str[2])

console.log("__________EXC6 DONE_______________");

// Exercise 7 : Secret Group
// Instructions
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];


for (let i=0;i<names.length;i++) {
	for (let k=i+1;k<(names.length);k++) {
		if (names[i]<names[k]) continue;
		else {
			z1=names[i];
			z2=names[k];
			names.splice(i,1,z2);
			names.splice(k,1,z1);
		}
	}
}
console.log(names);

let soc=[null];
for (let i of names) {
	soc=soc+i.charAt()
}
console.log(soc);


console.log("__________EXC7 DONE_______________");
