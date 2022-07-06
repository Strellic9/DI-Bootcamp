let color_col=3;
var color_row=8;
let color_count=color_col*color_row;

let main_col=60;
let main_row=50;
let main_count = main_row*main_col;

let sidebar = document.getElementById('sidebar');
let main = document.querySelector('#main');


for (let i=0; i<color_count; i++) {
	let div = document.createElement('div');
	div.style.backgroundColor = generateRandomColor ();
	sidebar.appendChild(div);
}


for (let i=0; i<main_count; i++) {
	let div = document.createElement('div');
	// div.style.backgroundColor = generateRandomColor ();
	main.appendChild(div);

}

function generateRandomColor () {
	let letters='0123456789ABCDEF';
	let color= '#';
	for (let i=0; i<6; i++) {
		color += letters[Math.floor(Math.random*16)]
	}
	return color;
}