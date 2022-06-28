// 1. Write a JavaScript for loop that will go through the variable names.
// if the item is not a string, pass.
// if the item is a string, check if its first letter is in uppercase. 
// If not, change it to uppercase and then display the name.

// 2. Write a JavaScript for loop that will go through the variable names
// if the item is not a string, go out of the loop.
// if the item is a string, display it.


let names= ["john", "sarah", 23, "Rudolf", 34];


for (let i of names) {
	// console.log(i);
	if (typeof i !=='string') continue;
	else if (i.charAt()==i.charAt().toUpperCase()) continue;
	else {i=i.charAt().toUpperCase()+i.substring(1,i.length);
		console.log(i); }
}

console.log('__________EXC1 DONE_____________');

for (let i of names) {
	if (typeof i=='string') {
		console.log(i)
	} else continue;
}

console.log('__________EXC2 DONE_____________');
