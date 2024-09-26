<?php

use LearningPath\DataStructuresAndAlgorithms\TwoSum\TwoSum;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;

class TwoSumTest extends TestCase
{
    #[DataProvider('fail_data_for_two_sum')]
    #[Test]
    function generate_indexes_for_array_for_brute_force(array $numbers, int $target, array $expected): void
    {
        $twoSum = new TwoSum();
        $this->assertEquals($expected, $twoSum->bruteForce($numbers, $target));
    }

    #[DataProvider('success_data_for_two_sum')]
    #[Test]
    function generate_fails_to_find_index_for_array_for_brute_force(array $numbers, int $target, array $expected): void
    {
        $twoSum = new TwoSum();
        $this->assertEquals($expected, $twoSum->bruteForce($numbers, $target));
    }

    #[DataProvider('fail_data_for_two_sum')]
    #[Test]
    function generate_indexes_for_array_for_hashmap(array $numbers, int $target, array $expected): void
    {
        $twoSum = new TwoSum();
        $this->assertEquals($expected, $twoSum->hashMap($numbers, $target));
    }

    #[DataProvider('success_data_for_two_sum')]
    #[Test]
    function generate_fails_to_find_index_for_array_for_hashmap(array $numbers, int $target, array $expected): void
    {
        $twoSum = new TwoSum();
        $this->assertEquals($expected, $twoSum->hashMap($numbers, $target));
    }

    public static function fail_data_for_two_sum(): array
    {
        return [
            'test_case_1' => [[10, 20, 30], 51, []],
            'test_case_2' => [[101, -20, 120], 1001, []],
        ];
    }

    public static function success_data_for_two_sum(): array
    {
        return [
            'test_case_1' => [[2, 7, 11, 15], 9, [0, 1]],
            'test_case_2' => [[1, 2, 3, 4], 7, [2, 3]],
        ];
    }
}
