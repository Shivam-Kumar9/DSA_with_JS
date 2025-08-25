// leetcode   Search insert position
// where our last first index stop that is the real position or exact element get
let ar = [1,3,5,6,9] , t= 3;

 
let f= 0
let l = ar.length-1;
while(f<=l){
    let mid = f+ Math.floor((l-f)/2);
   if(t == ar[mid]  ){
    console.log(mid);
    break;
   } 
  else if(t < ar[mid] ) l = mid-1
  else if(t > ar[mid] ) f = mid+1
  
}  
 console.log(f);
