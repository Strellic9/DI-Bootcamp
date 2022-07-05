
var h1text = document.getElementsByTagName('h1')[0].innerText;
console.log(h1text);

var lastPar = document.getElementsByTagName('p')[3];
lastPar.remove();


document.getElementsByTagName('h2')[0].addEventListener("click", function onClick(event) {
    event.target.style.backgroundColor='red';
});

document.getElementsByTagName('h3')[0].addEventListener("click", function onClick(event) {
    event.target.style.display='none';
});

var paragraphs = document.getElementsByTagName('p');
var btn0 = document.getElementsByClassName('btnBG')[0];

for (let i in paragraphs) {
    console.log(paragraphs[i]);
}

btn0.addEventListener('click', function changeBg () { 
    for (let i in paragraphs) {paragraphs[i].style.fontWeight='900'
}});

document.getElementsByTagName('h1')[0].addEventListener("mouseover", function onHover(event) {
    let random=parseInt(Math.random()*100);
    console.log('font size of h1 will be', random)
    event.target.style.fontSize=random+'px';
});

// document.getElementsByTagName('h2')[0].addEventListener("mouseover", function onHover(event) {
//     event.target.style.animation='fadeIn 2s';

// });


console.log('_____no 7th bonus______')
