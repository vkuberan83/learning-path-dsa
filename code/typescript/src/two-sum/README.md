# 1. Two Sum

Problem Statement: If you are given a `sequence of integer numbers` and an `integer target`, return the _indices of the two numbers_ so that they add up to the `target`. Assume each input has exactly one solution, and do not repeat elements.

Answer may be returned in any order.

## How to run:

To run the two-sum code, follow these steps.

`npm run exec two-sum`

## How to Test:

### Unit Test

To run the two-sum tests, follow these steps. 

`npm run exec two-sum test`

**Result**

<pre><code style="font-size: 16px;"><span style="color: green;">PASS</span>  tests/two-sum/two-sum.test.ts
  TwoSum
    twoSumBruteForce
      <span style="color: green;">√</span> should return correct indices for a valid input (3 ms)
      <span style="color: green;">√</span> should return an empty array if no solution is found
    twoSumHashMap
      <span style="color: green;">√</span> should return correct indices for a valid input (1 ms)
      <span style="color: green;">√</span> should return empty array if no solution is found (1 ms)

Test Suites: <span style="color: green;">1 passed</span>, 1 total
Tests:       <span style="color: green;">4 passed</span>, 4 total
Snapshots:   0 total
Time:        4.697 s
</code></pre>


### Performance Test:

After the normal test has been completed, a performance test will be run automatically. Based on the capacity of your machine, you will receive a different performance test result.

**Result**

<pre><code style="font-size: 16px;"><span style="color: green;">Running Performance Tests...</span>

Array size: 100
Brute Force: 0.2548 ms
Hash Map: 0.1188 ms


Array size: 1000
Brute Force: 1.6086 ms
Hash Map: 0.0974 ms


Array size: 10000
Brute Force: 0.2277 ms
Hash Map: 0.0324 ms


Array size: 100000
Brute Force: 5225.7332 ms
Hash Map: 5.7995 ms
</code></pre>



