import NumberArray from "./array";

console.log(`Welcome to Arrays: \n`);

let arrays = new NumberArray([1, 2, 3]);
console.log(`Set values of arrays during constructor method call:`);
arrays.read();
console.log(`Set values of arrays using set method:`);
arrays.set([2, 4, 6, 8, 10]);
arrays.read();
console.log(`Insert Value '12' at the End of the Array: ${arrays.insertAtEnd(12)}\n`);
console.log(`Insert Value '5' at the position 3: ${arrays.insert(0, 5)}\n`);
