let orangeSquare = document.getElementById('drop-container');
let pinkSquareContainer = document.getElementById('draggable-container');

let pinkSquare = document.getElementById('draggable-element');
console.log(orangeSquare);
console.log(pinkSquareContainer)
console.log(pinkSquare);

pinkSquare.addEventListener('dragstart', function (event) {
    // console.log('target', event.target);
    // console.log('id', event.target.id)
    event.dataTransfer.setData('pink-move', event.target.id);

})

orangeSquare.addEventListener('dragover', function (event) {
    event.preventDefault();
})

orangeSquare.addEventListener('dragdrop', function(event){
    event.preventDefault();
    let id = event.dataTransfer.getData('pink-move');
    let pinkBox = document.getElementById(id);
    event.target.appendChild(pink-move);

})

pinkSquareContainer.addEventListener('dragdrop', function (event){
    event.preventDefault();
    let id = event.dataTransfer.getData('pink-move');
    let pinkBox = document.getElementById(id);
    event.target.appendChild(pinkSquare);
})