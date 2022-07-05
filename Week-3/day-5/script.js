
// reverse string

var str1='Your';
console.log(Math.ceil(5/2));
console.log(str1.charAt(1));

function reverse(str) {
    for (let i=0; i<str.length-1; i++) {
        let x1=str.charAt(str.length-2);
        str=str.substring(0,(str.length-i-2))+x1+((str.length-i-1),(str.length-i-2));
        console.log(str);
    }
    console.log(str);
}

reverse(str1);