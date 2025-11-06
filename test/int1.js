//1. **Remove all duplicate elements from an array**
    let  Sample  =[1, 2, 2, 3, 4, 4, 5]
    let  Expected = [1, 2, 3, 4, 5]

   let obj ={}
   
 let i =0;
 while(Sample.length>i){
     console.log(Sample[i])
     i++
 }


//  ---------------

// Question:
// Given an array of integers nums, return the length of the longest subarray with at most two distinct elements.

// Example:
// Input: [1, 2, 1, 2, 3, 2, 2]
// Output: 5
// Explanation: The longest subarray with at most two distinct elements is [2, 1, 2, 3, 2] or [1, 2, 1, 2, 3].

function longestSubarrayWithTwoDistinct(nums) {
    let left = 0;
    let maxLen = 0;
    const count = new Map();

    for (let right = 0; right < nums.length; right++) {
        count.set(nums[right], (count.get(nums[right]) || 0) + 1);

        while (count.size > 2) {
            count.set(nums[left], count.get(nums[left]) - 1);
            if (count.get(nums[left]) === 0) {
                count.delete(nums[left]);
            }
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

// Example usage:
console.log(longestSubarrayWithTwoDistinct([1, 2, 1, 2, 3, 2, 2])); // Output: 5