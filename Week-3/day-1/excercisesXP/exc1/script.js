let div = document.getElementById('container')
console.log(div);

let pete = document.getElementsByTagName('li')[1];
pete.innerText = 'Richard';
console.log(pete.innerText)

document.getElementsByTagName('li')[0].innerText='Aleksei';
document.getElementsByTagName('li')[2].innerText='Aleksei';

// Element.remove(document.getElementsByTagName('li')[3]);
document.getElementsByTagName('li')[3].remove();

let uls = document.getElementsByTagName('ul');
console.log(uls[0].classList)
for (let i=0; i<2; i++) {
	uls[i].classList.add('student_list')
}

uls[0].classList.add('university', 'attendance');
