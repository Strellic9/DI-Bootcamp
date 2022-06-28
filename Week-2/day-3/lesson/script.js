// 1. Write a JavaScript for loop that will go through the variable names.
// if the item is not a string, pass.
// if the item is a string, check if its first letter is in uppercase. 
// If not, change it to uppercase and then display the name.

// 2. Write a JavaScript for loop that will go through the variable names
// if the item is not a string, go out of the loop.
// if the item is a string, display it.


let names= ["john", "sarah", 23, "Rudolf", 34];


for (let i=0; i<names.length; i++) {
	let str = names[i];
	if (typeof str == 'string') {
		let fl=str.charAt(); 
	if (fl!==fl.toUpperCase) { str1 = fl.toUpperCase() + str.substring(1,str.length);
	console.log(str1);
	} else continue;
}}