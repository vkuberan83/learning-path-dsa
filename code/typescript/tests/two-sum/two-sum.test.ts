import TwoSum from 'two-sum/two-sum'; // Adjust the path according to your structure

describe('TwoSum', () => {
    let twoSum: TwoSum;

    // Setup: Create a new instance of TwoSum before each test
    beforeEach(() => {
        twoSum = new TwoSum();
    });

    describe('twoSumBruteForce', () => {
        it('should return correct indices for a valid input', () => {
            const nums: number[] = [2, 7, 11, 15];
            const target: number = 9;
            const result: [number, number] | [] = twoSum.twoSumBruteForce(nums, target);
            expect(result).toEqual([0, 1]); // Expect indices 0 and 1 to sum to 9
        });

        it('should return an empty array if no solution is found', () => {
            const nums: number[] = [1, 2, 3, 4];
            const target: number = 10;
            const result: [number, number] | [] = twoSum.twoSumBruteForce(nums, target);
            expect(result).toEqual([]); // Expect no solution
        });
    });

    describe('twoSumHashMap', () => {
        it('should return correct indices for a valid input', () => {
            const nums: number[] = [2, 7, 11, 15];
            const target: number = 9;
            const result: [number, number] | [] = twoSum.twoSumHashMap(nums, target);
            expect(result).toEqual([0, 1]); // Expect indices 0 and 1 to sum to 9
        });

        it('should return empty array if no solution is found', () => {
            const nums: number[] = [1, 2, 3, 4];
            const target: number = 10;
            const result: [number, number] | [] = twoSum.twoSumHashMap(nums, target);
            expect(result).toEqual([]); // Expect no solution
        });
    });
});
