
// var animatedBox = document.getElementById('animate');
// console.log(animatedBox);

// function myMove () {
//     let start = Date.now();

//     let timer = setInterval(function () {
//         let timePassed = Date.now()-start;
//         console.log(timePassed);

//         let move = timePassed/10; 
//         animatedBox.style.left = move+'px';
//         if (move>350) {
//             clearInterval(timer)
//         }
//     }, 20);
// }

function allowDrop(event) {
    event.preventDefault(); 
  }


function allowEnter(event) {
    event.target.classList.add('over');
  }

function allowLeave(event) {
    event.target.classList.remove('over');
  }

function dragStart(event) {

    event.dataTransfer.setData("text", event.target.id);
}

function dragDrop(event) {
    event.preventDefault();

    let data = event.dataTransfer.getData("text");
    
    let box = document.getElementById(data)
    event.target.appendChild(box);
}



