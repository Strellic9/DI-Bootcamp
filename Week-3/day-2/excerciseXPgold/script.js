let ask=prompt ('What language do u speak?');
ask1=ask.toLowerCase();
if (ask1=="english") {
	console.log("hello");
} else if (ask1 == 'hebrew') {
	console.log('shalom');
} else if (ask1 == 'french') {
	console.log ('bonjour')
} else {
	console.log('01110011 01101111 01110010 01110010 01111001');
}

console.log('_________EXC 1 DONE__________')

let grade=prompt('Give me that grade');
if (grade>90) {console.log("A")}
else if (grade>80) {console.log("B")}
else if (grade>70) {console.log("C")}
else {console.log("D")}

console.log('_________EXC 2 DONE__________')

let verb1=prompt('Give me a verb');
verb=verb1.toLowerCase();
if (verb.length<3) {
	console.log (verb)
} else if (verb.substring(verb.length-3,verb.length)=='ing') {
	console.log(verb.substring(0,verb.length)+'ly');
} else {
	console.log(verb.substring(0,verb.length)+'ing');
}

console.log('_________EXC 3 DONE__________')
