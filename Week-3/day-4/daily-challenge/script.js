let listTasks = [];

var input = document.getElementById('input');
var div = document.getElementById('listTasks')

var myNodelist = document.getElementsByTagName("li");


function createHideButton () {
	for (i = 0; i < myNodelist.length; i++) {
	var span = document.createElement("span");
	var xBox = document.createElement("i");
	xBox.classList = 'fa-solid fa-square-xmark'
	span.appendChild(xBox)
	span.className = "close";
	var textBox = document.createElement("span");

	var myNodeInside = myNodelist[i].innerText
	textBox.innerText = myNodeInside
	span.appendChild(textBox);

	myNodelist[i].innerText = ''
	myNodelist[i].appendChild(span);
	}
}

createHideButton ()

function newElement() {
	var li = document.createElement("li");
	var inputValue = document.getElementById("myInput").value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
	if (inputValue === '') {
	  alert("You must write something!");
	} else {
	  document.getElementById("myUL").appendChild(li);
	}
	document.getElementById("myInput").value = "";
  
	createHideButton ()
  
	for (i = 0; i < close.length; i++) {
	  close[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
	  }
	}
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function clearAll() {
	var lis = document.getElementsByTagName('li')
	for (i in lis) {
		lis[i].style.display = 'none';
	}
}

