"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var perf_hooks_1 = require("perf_hooks");
var two_sum_1 = require("../../src/two-sum/two-sum"); // Adjust the path according to your structure
var twoSum = new two_sum_1.default();
/**
 * Utility function to measure execution time.
 */
function measureExecutionTime(label, fn) {
    var start = perf_hooks_1.performance.now(); // Start timer
    fn(); // Execute the function
    var end = perf_hooks_1.performance.now(); // End timer
    console.log("".concat(label, ": ").concat((end - start).toFixed(4), " ms"));
}
/**
 * Generate an array of random integers for testing.
 */
function generateRandomArray(size) {
    return Array.from({ length: size }, function () { return Math.floor(Math.random() * 10000); });
}
/**
 * Performance test cases for TwoSum algorithms.
 */
function runPerformanceTests() {
    var testCases = [
        { size: 100, target: 50 },
        { size: 1000, target: 500 },
        { size: 10000, target: 5000 },
        { size: 100000, target: 50000 }
    ];
    console.log('Running Performance Tests...\n');
    testCases.forEach(function (_a) {
        var size = _a.size, target = _a.target;
        var nums = generateRandomArray(size);
        console.log("Array size: ".concat(size));
        measureExecutionTime('Brute Force', function () {
            twoSum.twoSumBruteForce(nums, target);
        });
        measureExecutionTime('Hash Map', function () {
            twoSum.twoSumHashMap(nums, target);
        });
        console.log('\n');
    });
}
// Run performance tests
runPerformanceTests();
