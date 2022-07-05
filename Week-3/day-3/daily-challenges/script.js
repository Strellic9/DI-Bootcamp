let str='* '

for (let i=1;i<7;i++) {
	console.log(str.repeat(i));
}

console.log('__________part 1 done ______________')

let sum='';
for (let i=1;i<7;i++) {
	for (let k=0;k<i;k++){ 
		sum+=str;
	}
	console.log(sum);
	sum='';
}

console.log('__________part 2 done ______________')