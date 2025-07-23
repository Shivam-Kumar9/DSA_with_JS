let ar = [10,5,1,8,13,7]
let n  = ar.length
for(let i =1; i<n; i++){  // n times loop 
   let key  = ar[i]
   let j = i-1
   while(j>=0 && key < ar[j] ){ // near n times loop worst case 
        ar[j+1] = ar[j]
        j-- 
   }
   ar[j+1] = key
} 
console.log(ar)


// n ^ 2 time complexity in worst case
// n time complexity in best case