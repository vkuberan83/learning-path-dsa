import { performance } from 'perf_hooks';
import TwoSum from '../../src/two-sum/two-sum'; // Adjust the path according to your structure

const twoSum = new TwoSum();


function measureExecutionTime(label: string, fn: () => void): void {
    const start = performance.now(); // Start timer
    fn(); // Execute the function
    const end = performance.now(); // End timer
    console.log(`${label}: ${(end - start).toFixed(4)} ms`);
}


function generateRandomArray(size: number): number[] {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 10000));
}


function runPerformanceTests() {
    const testCases = [
        { size: 100, target: 50 },
        { size: 1000, target: 500 },
        { size: 10000, target: 5000 },
        { size: 100000, target: 50000 }
    ];

    console.log('Running Performance Tests...\n');

    testCases.forEach(({ size, target }) => {
        const nums = generateRandomArray(size);

        console.log(`Array size: ${size}`);

        measureExecutionTime('Using Brute Force Algorithm', () => {
            twoSum.bruteForce(nums, target);
        });

        measureExecutionTime('Using HashMap Algorithm', () => {
            twoSum.hashMap(nums, target);
        });

        console.log('\n');
    });
}


runPerformanceTests();
