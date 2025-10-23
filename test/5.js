// Given an array of integers, find the first missing positive integer.

// Example:
// Input: [3, 4, -1, 1]
// Output: 2

function firstMissingPositive(nums) {
	const n = nums.length;
	for (let i = 0; i < n; i++) {
		while (
			nums[i] > 0 &&
			nums[i] <= n &&
			nums[nums[i] - 1] !== nums[i]
		) {
			// Swap nums[i] with nums[nums[i] - 1]
			let temp = nums[nums[i] - 1];
			nums[nums[i] - 1] = nums[i];
			nums[i] = temp;
		}
	}
	for (let i = 0; i < n; i++) {
		if (nums[i] !== i + 1) {
			return i + 1;
		}
	}
	return n + 1;
}

// Example usage:
const arr = [3, 4, -1, 1];
console.log(firstMissingPositive(arr)); // Output: 2