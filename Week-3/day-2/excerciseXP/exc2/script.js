console.log('_____exc2______')

var form0 = document.forms["names"];
console.log(form0);

// var input0 = document.getElementById('fname');
// var input1 = document.getElementById('lname');

var input0 = document.getElementsByName('fname')[0];
var input1 = document.getElementsByName('lname')[0];
console.log(input0, input1);

var ul = document.getElementById('output');

function addLi(input) {
    var li = document.createElement("li");
    li.innerText = input.value;
    ul.append(li);
}

form0.addEventListener('submit', function(event) {
   event.preventDefault();
   if (input0.value!=='') { addLi(input0);  }
   if (input1.value!=='') { addLi(input1);  }
   console.log(ul);
})

