console.log('_____exc4______')

var input = document.getElementById('radius');
var output = document.getElementById('volume');
var button = document.getElementById('submit');
var form = document.getElementById('MyForm');


var body = document.body;

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     body.style.backgroundColor = 'red';
//     console.log(input.value);
    
// })

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(input.value);
    if (isNaN(parseInt(input.value))==true) alert('u stoopid');
    else {
        var volume=(4/3*Math.PI*(input.value**3)).toFixed(2);
        output.setAttribute('value', volume);
    }
    console.log('volume =', volume);
})


