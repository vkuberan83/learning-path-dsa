import Arrays from "./arrays";

console.log(`Welcome to Arrays: \n`);

let arrays = new Arrays([1, 2, 3]);
console.log(`Set values of arrays during constructor method call:`);
arrays.read();
console.log(`Set values of arrays using set method:`);
arrays.set([2, 4, 6, 8, 10]);
arrays.read();
console.log(`Insert Value '12' at the End of the Array: ${arrays.insertAtEnd(12)}\n`);
