let listTasks = [];

var input = document.getElementById('input');
var div = document.getElementById('listTasks')

function addTask() {
	if (input.value!=='') {
		let li = document.createElement('li');
		li.textContent = input.value;
		div.appendChild(li);
	} else {
		alert('u stoopid')
		return;
	}

}