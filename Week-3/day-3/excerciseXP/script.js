
function func () {
    alert('hey');
}

// setTimeout(func, 2000);

let divCont = document.getElementById('container');
function func2 () {
    var p1 = document.createElement('p');
    p1.textContent = 'Hey';
    divCont.appendChild(p1);
}

// setTimeout(func2, 2000);

var repeatHey = setInterval(func2, 1000);

function funcClear () {
    clearInterval (repeatHey);
}


function checkCount() {
    var pCount = document.getElementsByTagName('p');
    console.log(pCount.length);
    if (pCount.length>4) {
        funcClear();
        clearInterval(check);
    }
}

var check = setInterval(checkCount, 100);
