let solarSystem = [
	{name:'Mercury', moons:0, color:'orange', radius:2439},
	{name:'Venus', moons:0, color:'grey', radius:6051},
	{name:'Earth', moons:1, color:'blue', radius:6378},
	{name:'Mars', moons:2, color:'red', radius:3396},
	{name:'Jupiter', moons:79, color:'brown', radius:71492},
	{name:'Saturn', moons:82, color:'yellow', radius:60268},
	{name:'Uranus', moons:27, color:'darkblue', radius:25559},
	{name:'Nuptune', moons:14, color:'lightblue', radius:24764},
]

let root = document.getElementsByClassName('listPlanets')[0];

for (let i=0; i < solarSystem.length; i++) {
	let planet=document.createElement('div');
	planet.innerText= solarSystem[i].name;
	planet.style.color= '#fff';
	planet.style.backgroundColor=solarSystem[i].color;
	let x=0; 
		while (x <= solarSystem[i].moons) {
			let moon=document.createElement('div');
			moon.style.left=(x*10)+'px';
			moon.classList.add('moon');
			planet.appendChild(moon);
			x++;
		}
	root.appendChild(planet);
}