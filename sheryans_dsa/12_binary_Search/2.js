
let arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

let index = binarySearch(arr, 0, arr.length - 1, 5);
if(index== -1 ) console.log("not found");
else console.log('target found at ' + index + ' index');


function binarySearch(arr, low, high, target) {
 while(low <= high){
    let mid  = Math.floor((low + high) / 2);
    if(arr[mid] === target) return mid;
    if(arr[mid] < target) low = mid + 1;
    else high = mid - 1;
 }
 return -1; // target not found
}
