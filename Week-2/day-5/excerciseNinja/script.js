


console.log('');
console.log('');
console.log('');
console.log('');
console.log('');
// var word='console';
// var letter='o';
// console.log('initials =',word,word.length,letter)

// TEST
// let test=''; let k=2; let a=4;
// test+=(k+', '+a);
// test=test.split(', ');
// console.log(test);

function checkLetterInWord (str,letter) {
	let pos='';
	for (let i=0; i<str.length; i++) {
		if (str[i]==letter) {
			if (pos=='') {
				pos+=(i);
			} else {
				pos+=(', '+i);
				// console.log('positn',i,pos);
			}
		}
	}
	if (pos!=='') {
		pos=pos.split(', ');
	}
	// console.log('positions are',pos);
	return(pos);
}

function makeStars (str) {
	let star='*';
	let stars=star.repeat(str.length);
	// console.log('here are stars', stars);
	return stars;
}

function replace (str,letter,positions) {
	for (let i of positions) {
		i=parseInt(i);
		str=str.substring(0,i)+letter+str.substring((i+1),str.length);
	}
	// console.log('replaced string', str);
	return (str);
}

function playGame () {
	
	word=prompt('Player1,  gib word');
	var newWord=makeStars(word);
	console.log('Here u go player2, the word u have to guess:', newWord);
	console.log('');
	var usedLetters='';
	var lossCount=0;
	var k=0;
	while (newWord!==word && lossCount<9) {
		letter=prompt('Playes2, give letter');
		usedLetters+=(letter+' ');
		var positions=checkLetterInWord(word,letter);
		if (positions=='') {
			lossCount++;
			alert('no match');
			console.log('So far uve tried:', usedLetters);
			console.log('Remaining chances to fail:', parseInt(10-lossCount));
			console.log(' ');
		} else {
			alert('match. Word updated');
			newWord=replace(newWord,letter,positions);
			console.log('Updated word:',newWord);
			console.log('So far u`ve tried:', usedLetters);
			console.log(' ');
		}
	}
	if (newWord==word) {
		alert('u win');
		console.log('u win');
		return;
	}
	else if (lossCount>9) {
		alert('u lost');
		console.log('u lost');
		return;
	}
}






