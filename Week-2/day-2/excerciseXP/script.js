let x=0;
let y=30;

if (x>y) {
	console.log('X is the biggest number')
} else if (x==y) {
	console.log('X and Y are equal')
} else {
	console.log('Y is the biggest number')
}

console.log('_________EXC 1 DONE__________')

let newDog='Chihuahua';
console.log('in this word there are', newDog.length, 'letters');
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
if (newDog=='Chihuahua') {
	console.log('i love Chihuahuas, this is my favorite')
} else {
	console.log('I dont care, I prefer cats')
}

console.log('_________EXC 2 DONE__________')
// x1=prompt('Ok throw me some numbers');
let x1=4;
if (x1 % 2 == 0) {
	console.log(x1.toString(), 'is an even number')
} else {
	console.log(x1.toString(), 'is an odd number')
}

console.log('_________EXC 3 DONE__________')

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
if (users.length == 0) {
	console.log('the number of users is', users.length);
} else if (users.length == 1) {
	console.log('user', users[0], 'is online');
} else if (users.length == 2) {
	console.log('users', users[0], 'and', users[1], 'is online');
} else if (users.length > 2) {
	console.log(users[0], ',', users[1], 'and', users.length-2, 'more are online');
}

console.log('_________EXC 4 DONE__________')
	

