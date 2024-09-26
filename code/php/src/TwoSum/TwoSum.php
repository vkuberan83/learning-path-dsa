<?php

namespace LearningPath\DataStructuresAndAlgorithms\TwoSum;

class TwoSum
{
    public function bruteForce(array $nums, int $target): array
    {
        $numsLength = count($nums);

        for ($i = 0; $i < $numsLength; $i++) {
            for ($j = $i + 1; $j < $numsLength; $j++) {
                if ($nums[$i] + $nums[$j] === $target) {
                    return [$i, $j];
                }
            }
        }

        return [];
    }

    public function hashMap(array $nums, int $target): array
    {
        $map = [];
        $numsLength = count($nums);

        for ($i = 0; $i < $numsLength; $i++) {
            $num = $nums[$i];

            $complement = $target - $num;

            if (isset($map[$complement])) {
                return [$map[$complement], $i];
            }

            $map[$num] = $i;
        }

        return [];
    }
}
