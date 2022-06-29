// Instructions
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]


// let str=prompt('gib me words, separated by commas and whitespace');
// INSERT: sus, sus, sus, sus, Amogus
let str='sus1, sus2, sus3, sus4, Amogus';
var arr=str.split(', ');
console.log(arr);

var max=0;

for (let i of arr) {
	if (i.length>max) max=i.length;
}

var star='*';
var ws=' ';

for (let i=-1; i<arr.length+1; i++) {
	if (i==-1 || i==(arr.length)) {
		console.log(star.repeat(max+4));
	} else {
		let dl=arr[i].length;
		console.log(star,arr[i],ws.repeat(max-dl)+star);
	}
}