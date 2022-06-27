
// EXC 1

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice(0,1);
fruits.splice(1,3,'Blueberries', 'Oranges');
fruits.pop('Kiwi');
fruits.shift('Apple');
fruits.splice(0,3,"Kiwi", "Oranges", "Blueberries")
console.log(fruits);

console.log('___________EXC 1 DONE________');

// EXC 2
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0])


console.log('___________EXC 2 DONE________');
