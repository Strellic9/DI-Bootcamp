let bigDiv = document.createElement('div')
bigDiv.classList.add = 'container';
// bigDiv.style.backgroundColor = 'black';
// bigDiv.style.height = '600px'
bigDiv.style.width = '160px'

bigDiv.style.display = 'grid';
bigDiv.style.gridTemplateColumns = 'repeat(7, 1fr)'
bigDiv.style.gridTemplateRows = 'repeat(7, 1fr)'
bigDiv.style.rowGap = '1px'

for (let i=0; i<49; i++) {
	let div = document.createElement('div');
	div.style.height = '30px';
	div.style.width = '20px';
	div.style.backgroundColor = 'black';
	div.id = i;
	let starBox = [2,3,4,8,12,15,19,22,23,24,25,26,29,33,36,40,43,47];
	if (starBox.includes(i)) {
		div.innerText='*';
	}
	bigDiv.appendChild(div)
}

document.body.appendChild(bigDiv);

document.body.style.color = 'red'
document.body.style.fontSize = '20px'
document.body.style.textAlign = 'center'


