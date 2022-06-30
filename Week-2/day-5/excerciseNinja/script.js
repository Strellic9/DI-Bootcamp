

var word='console';
var letter='o';
console.log('initials =',word,word.length,letter)


let word1=word.slice();
word1 = word.substring(0,1)+'*'+word.substring(2,word.length);
console.log(word1);
word1 = word1.substring(0,4)+'*'+word1.substring(5,word.length);
console.log(word1);


function checkLetterInWord (str,letter) {
	let pos=[null];
	for (let i=0; i<str.length; i++) {
		if (str[i]==letter) {
			pos+=i;
		}
	}
	pos=pos.split('');
	console.log('positions are',pos);
	return(pos);
}

function makeStars (str) {
	let star='*';
	let stars=star.repeat(str.length);
	console.log('here are stars', stars);
	return stars;
}

function replace (str,letter,positions) {
	// let str1=str.slice();
	for (let i of positions) {
		i=parseInt(i);
		str=str.substring(0,i)+letter+str.substring((i+1),str.length);
	}
	console.log('replaced string', str);
	return (str);
}

var positions=checkLetterInWord(word,letter);
var wordStars=makeStars(word);
var newWord=replace(wordStars,letter,positions);

// CHECKS ↓

// let str1=wordStars.slice();
// let str2=[null];
// for (let i of positions) {
// 	i=parseInt(i);
// 	str1=str1.substring(0,i)+letter+str1.substring((i+1),str1.length);
// 	console.log(i, str1);
// }


