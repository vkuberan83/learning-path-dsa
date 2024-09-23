"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TwoSum = /** @class */ (function () {
    function TwoSum() {
    }
    TwoSum.prototype.twoSumBruteForce = function (nums, target) {
        for (var iCnt = 0; iCnt < nums.length; iCnt++) {
            for (var jCnt = iCnt + 1; jCnt < nums.length; jCnt++) {
                if (nums[jCnt] + nums[iCnt] === target) {
                    return [iCnt, jCnt];
                }
            }
        }
        return [];
    };
    TwoSum.prototype.twoSumHashMap = function (nums, target) {
        var map = new Map();
        for (var i = 0; i < nums.length; i++) {
            var num = nums[i];
            var complement = target - num;
            if (map.has(complement)) {
                return [map.get(complement), i];
            }
            map.set(num, i);
        }
        return [];
    };
    return TwoSum;
}());
exports.default = TwoSum;
