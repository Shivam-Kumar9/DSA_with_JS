// BBinary search
//  problem

//  Given a sorted array and a target value, return the index of the target value in the array.

// Ek logical point check karne layak hai:
// 👉  Math.floor((a+z)/2) use kiya hai.
// Lekin bahut bade numbers pe a+z integer overflow kar sakta hai (C++/Java me mainly problem hoti hai, JS me usually nahi hoti kyunki numbers 64-bit floating point hote hain).

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = left +Math.floor((right - left ) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Target not found
}

console.log(binarySearch([2, 3, 5, 7, 11, 13, 17, 19, 23, 29], 11))