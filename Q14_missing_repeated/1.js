// Input: arr[] = [2, 2]
// Output: [2, 1]
// Explanation: Repeating number is 2 and smallest positive missing number is 1.

function  findTwoElement(arr) {
    // code here
    let obj ={}
    let total =0
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] =(arr[i] || 0)+1
    
  }
   return obj
}

console.log(findTwoElement( [1, 3, 3]));
