export default class TwoSum {
    twoSumBruteForce(nums: number[], target: number): [number, number] | [] {
        for (let iCnt: number = 0; iCnt < nums.length; iCnt++) {
            for(let jCnt: number = iCnt + 1; jCnt < nums.length; jCnt++) {
                if (nums[jCnt] + nums[iCnt] === target) {
                    return [iCnt, jCnt];
                }
            }
        }
        return [];
    }

    twoSumHashMap(nums: number[], target: number): [number, number] | [] {
        const map: Map<number, number> = new Map();

        for (let i: number = 0; i < nums.length; i++) {
            const num = nums[i];

            const complement: number = target - num;

            if (map.has(complement)) {
                return [map.get(complement) as number, i];
            }

            map.set(num, i);
        }

        return [];
    }
}