// // 287. // find the dublicate number
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and using only constant extra space.

let ar = [3,1,3,4,2]

let i = 0;
while (i<ar.length) {
    let rightIndex = ar[i]-1;
    if (ar[i] != ar[rightIndex] && rightIndex < ar.length ){
        let temp = ar[rightIndex];
        ar[rightIndex] = ar[i];
        ar[i] = temp;
    }
    else i++
}
// console.log(ar);
for (let i = 0; i < ar.length; i++) {
    if (ar[i] != i + 1) {
console.log(ar[i]);    }
}

