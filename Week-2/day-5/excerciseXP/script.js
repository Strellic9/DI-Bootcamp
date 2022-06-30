

function compareNumbers(userNumber,computerNumber) {
	for (let i=0; i<3; i++)	{
		if (userNumber==computerNumber) {
			alert('WINNER');
			return;
		} else if (userNumber>computerNumber) {
			userNumber=prompt('come again, make it lower');
		} else {
			userNumber=prompt('come again, make it bigger');
		}
	}
	alert('haha loser');
 }

function playTheGame() {
	let ans=confirm('wanna play?'); 
	if (ans==true)  {
		let num=parseInt(prompt('Throw me a number from 0 to 10'));
		if (isNaN(num)==true) {
			alert('Sorry not a number bye');
			return;
		} else if (num<0 || num>10) {
			alert('Sorry not a GOOD number bye');
			return;
		}
		// ↑ СЮДА ПРОМПТ С ПРОВЕРКОЙ
		let computerNumber=parseInt(Math.random()*10);
		compareNumbers (num,computerNumber);
	}
	else {
		alert('No problem, goodbye');
		return;
	}
 }

// playTheGame();
 