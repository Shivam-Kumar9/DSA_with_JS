// Given an array of integers, find the length of the longest subarray with a sum equal to zero.

// Example:
// Input: [15, -2, 2, -8, 1, 7, 10, 23]
// Output: 5
// Explanation: The longest subarray with sum 0 is [-2, 2, -8, 1, 7].

function maxLenZeroSumSubarray(arr) {
    let map = new Map();
    let maxLen = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sum === 0) {
            maxLen = i + 1;
        }

        if (map.has(sum)) {
            maxLen = Math.max(maxLen, i - map.get(sum));
        } else {
            map.set(sum, i);
        }
    }

    return maxLen;
}

// Example usage:
const arr = [15, -2, 2, -8, 1, 7, 10, 23];
console.log(maxLenZeroSumSubarray(arr)); // Output: 5