let arr = [1,1,0,1,2,0,1,0,2,1,1]
//         i                   k
//         j
let i = 0;  // normal travesing ele
let j = 0;  // chek 0 to place order
let k = arr.length-1 // check 2 and iterate top to bottom

while(i!=k){
    // while conditon should be i<=k to check till equal
   if(arr[i] == 0){
     let temp = arr[i]
         arr[i] = arr[j] 
         arr[j] =  temp
      j++ 
      i++  
   }
   else if(arr[i] ==2){
      arr[i] = arr[i]+arr[k]
      arr[k] = arr[i]-arr[k]
      arr[i] = arr[i]-arr[k]
      //🔴 This fails when i == k, or if values repeat, and is harder to debug.
      // ✅ Use destructuring:
      k--
   }
   else i++
}

console.log(arr)

// else when work when i get 1 then it will skip 
/* =>loop doesn't end becuse of it is writen in conditon  
     ->there can be semnarios that it run infinite but not stop
*/