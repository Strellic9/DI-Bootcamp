let color_col = 3;
let color_row = 8;
let color_count = color_col * color_row;

let main_col = 60;
let main_row = 50;
let main_count = main_col * main_row;

let sidebar = document.getElementById('sidebar');
let main = document.querySelector('#main');

var color = '';

for (let i = 0; i < color_count; i++) {
  let div = document.createElement('div');
  div.style.backgroundColor = generateRandomColor();

  console.log(div.style.backgroundColor);

  sidebar.appendChild(div);
  div.addEventListener('click', function (e) {
    color = div.style.backgroundColor;
    console.log(div.style.backgroundColor);
  })
}

// _____________________begin

var mouse = false;
function mousedown()
  {
    mouse = true;
  }
  function mouseup()
  {
    mouse =false;
  }

for (var i = 0; i < main_count; i++) {
  let div = document.createElement('div');
  div.className = 'boxInMain';
  // div.addEventListener('mousedown', function(e) {
  //   div.style.backgroundColor = color;

  // }); 

  div.addEventListener('mouseover', function (e) {
    if(mouse)
    {
      div.style.backgroundColor = color;
    }
    else
    return;
  })

  main.appendChild(div);
}

// _____________end

function generateRandomColor(){
  let letters = '0123456789ABCDEF'
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)]
  }
  return color;
}

function clearField () {
  console.log('clear activated');
  let boxes = document.getElementsByClassName('boxInMain');
  // boxes[0].style.backgroundColor = 'white';
  for (let i=0; i<boxes.length; i++) {
    boxes[i].style.backgroundColor = 'white';
  }
}




