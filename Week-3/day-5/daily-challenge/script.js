
// ACTIVATES ON BUTTON ON HTML PAGE

function bottlesLyrics () {
	let bottlesNumber=parseInt(prompt('Throw me a number of bottles'));
	for (let i=0; i<3; i++) {
		// console.log(bottlesNumber);
		if (isNaN(bottlesNumber)==true || (bottlesNumber<2)) {
			bottlesNumber=parseInt(prompt('Again. Only number, above 1'));
		} else break;
	}
	if (isNaN(bottlesNumber)==true || (bottlesNumber<2)) {
		alert('u stoopid');
		return;
	}
	
	// ↑ SUDA PROMPT S PROVERKOY
	console.log('we start a song with',bottlesNumber,'bottles');
	console.log('');

	let bottlesCount=1;
	console.log(' -> Take _'+bottlesCount+'_ down, pass it around');
	bottlesNumber-=bottlesCount;
	bottlesCount++;
	console.log(' -> we have now '+bottlesNumber+' bottles');
	console.log('');

	while (bottlesNumber>bottlesCount) {
		console.log(' -> Take _'+bottlesCount+'_ down, pass them around');
		bottlesNumber-=bottlesCount;
		bottlesCount++;
		console.log(' -> we have now '+bottlesNumber+' bottles');
		console.log('');
	}

	// console.log(bottlesNumber,bottlesCount)

	if (bottlesNumber==1) {
		console.log(' -> Take _'+bottlesNumber+'_ down, pass it around');
		console.log(' -> no bottle of beer on the wall');
		console.log('');
	} else {
		console.log(' -> Take _'+bottlesNumber+'_ down, pass it around');
		console.log(' -> no bottle of beer on the wall');
		console.log('');
	}

}

