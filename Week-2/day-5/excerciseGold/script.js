console.log('_________EXC1 ↓ done_______________')

// Instructions
// Write a program to check whether a string is blank or not.

let str= '';


function isBlank(str) {
  let x=false;
  if (str==="" || str===" ") x=true;
  return x;  
}

let x1=isBlank(str);
console.log('string=',str);
console.log(x1);

console.log('_________EXC2 ↓ done_______________')

// Exercise 2 : Abbrev_name
// Instructions
// Write a JavaScript function to convert a string into an abbreviated form.

var str1= 'Sam Rodrigues';

function abbrevName(str) {
  let x=str.split(' ');
  let ss1=x[0], ss2=x[1];
  ss2=ss2.charAt()+'.';
  console.log('For short:',ss1,ss2);
}

console.log(str1);
abbrevName(str1);

console.log('_________EXC3 ↓ done_______________');
// Instructions
// Write a JavaScript function which takes a string as an argument and swaps the case of each character.

var str2='Making a mother of all omelets here, Jack. Can`t fret over every egg';
console.log('initial string:',str2);


function swap(str) {
  // let x=str.split(' ');
  let nstr='';
  for (let i=0; i<str.length; i++) {
    if (str.charAt(i)==str.charAt(i).toUpperCase()) {
      nstr+=str.charAt(i).toLowerCase()
    } else nstr+=str.charAt(i).toUpperCase()
  }
  console.log(nstr);
}

swap(str2);


console.log('_________EXC4 ↓ _______________');

var arr1= [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]];
var value1=3;

function omni(arr, value) {
    var res=true;
    for (let i of arr) {
      // console.log(i);
      if (i.includes(value)) continue;
      else { 
        res=false; 
        break;
      }
    }
  console.log(res);
}

console.log('array:', arr1);
console.log('omni value check:', value1);

omni(arr1, value1);