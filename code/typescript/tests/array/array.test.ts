import NumberArray from "array/array";

describe('Array', () => {
    let array: NumberArray;

    // Setup: Create a new instance of TwoSum before each test
    beforeEach(() => {
        array = new NumberArray([2, 7, 11, 15]);
    });

    describe('Array: Insert new value at the end of the array', () => {
        it('should return the updated array with the new value at its last index.', () => {
            const result: number[] = array.insertAtEnd(-19);
            expect(result).toEqual([2, 7, 11, 15, -19]);
        });
    });

    describe('Array: Insert new value at the given position', () => {
        it('should return the updated array with the new value at the given position.', () => {
            const result: number[] = array.insert(2, 768);
            expect(result).toEqual([2, 7, 768, 11, 15]);
        });

        it('should throw an invalid array position error.', () => {
            expect(() => array.insert(111, 768)).toThrow("invalid array position");
        });
    });
});