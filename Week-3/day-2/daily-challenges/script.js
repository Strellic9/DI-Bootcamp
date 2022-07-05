
console.log('_________EXC 1 DONE__________')

// let sentence = 'Self-taught, and not half bad. Still, your technique lacks something. Ahh! You deny your weapon its purpose!'
let sentence = 'Self-taught, and not half bad. Still, your technique lacks something. Ahh! You deny your weapon its purpose!'
console.log(sentence);
let wordNot = sentence.indexOf('not');
let wordBad = sentence.indexOf('bad');

if (wordNot<0) {
	console.log(sentence); 
} else if (wordBad<0) {
	console.log(sentence); 
} else if (wordNot<wordBad) {
	console.log(sentence.substring(0,wordNot-1),'good'+ sentence.substring(wordBad+3,sentence.length));
} else {
	console.log(sentence);
}