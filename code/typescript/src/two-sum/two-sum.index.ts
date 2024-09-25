import TwoSum from "./two-sum";

console.log(`Welcome to Two Sum Problem:\n`);

let twoSum = new TwoSum();

const numsFirst: number[] = [2, 7, 11, 15];
const targetFirst: number = 9;

const numsSecond: number[] = [1, 2, 3, 4];
const targetSecond: number = 7;

console.log(`Test 1: Array: [${numsFirst}], Target: ${targetFirst}, Result: ${twoSum.bruteForce(numsFirst, targetFirst)}`);
console.log(`Test 2: Array: [${numsSecond}], Target: ${targetSecond}, Result: ${twoSum.bruteForce(numsSecond, targetSecond)}\n`);