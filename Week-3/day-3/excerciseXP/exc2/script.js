
// function checkCount() {
//     var pCount = document.getElementsByTagName('p');
//     console.log(pCount.length);
//     if (pCount.length>4) {
//         funcClear();
//         clearInterval(check);
//     }
// }

// var check = setInterval(checkCount, 100);
var animatedBox = document.getElementById('animate');
console.log(animatedBox);

function myMove () {
    let start = Date.now();

    let timer = setInterval(function () {
        let timePassed = Date.now()-start;
        console.log(timePassed);

        let move = timePassed/10; 
        animatedBox.style.left = move+'px';
        if (move>350) {
            clearInterval(timer)
        }
    }, 20);
}