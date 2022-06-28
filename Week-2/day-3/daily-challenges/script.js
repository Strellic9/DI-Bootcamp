let str='* '

for (let i=1;i<7;i++) {
	console.log(str.repeat(i));
}

console.log('__________part 1 done ______________')

let sum=[null];
for (let i=1;i<7;i++) {
	for (let k=0;k<i;k++){ 
		sum=sum+str;
	}
	console.log(sum);
	sum=[null];
}

console.log('__________part 2 done ______________')