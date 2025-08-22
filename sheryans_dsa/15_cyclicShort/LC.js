// 268 . Missing Number
let ar = [0,1,2]
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(ar) {
    
let i = 0 ;

while(i<ar.length){
    let correctIndex = ar[i];
   if(ar[i] != ar[correctIndex] && correctIndex < ar.length){
         ar[i] = ar[i] + ar[correctIndex];
         ar[correctIndex] = ar[i] - ar[correctIndex];
         ar[i] = ar[i] - ar[correctIndex];
   }
   else i++
} 
 
for (let j = 0; j < ar.length; j++) {
  if(j != ar[j]) return j;
}
return ar.length
};
console.log(missingNumber(ar));
console.log(ar); // [0, 1, 3] 

// sc: O(1)