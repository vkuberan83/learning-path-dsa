<?php

function removeDuplicates(&$nums) {
    $n = count($nums);
    if ($n == 0) {
        return 0;
    }
    
    $k = 1;  // This will track the index for the unique elements
    
    for ($i = 1; $i < $n; $i++) {
        if ($nums[$i] != $nums[$i - 1]) {
            // When a new unique element is found, place it at index k
            $nums[$k] = $nums[$i];
            $k++;
        }
    }
    
    return $k;
}

// Example usage:
$nums1 = [1, 1, 2];
$nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

echo removeDuplicates($nums1) . PHP_EOL; // Output: 2
print_r($nums1); // Output: [1, 2, _]

echo removeDuplicates($nums2) . PHP_EOL; // Output: 5
print_r($nums2); // Output: [0, 1, 2, 3, 4, _, _, _, _, _]

?>
