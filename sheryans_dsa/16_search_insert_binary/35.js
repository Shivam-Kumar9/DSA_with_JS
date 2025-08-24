// leetcode   Search insert position

let ar = [1,3,5,6] , t= 5;

let i = 0
let f= 0
let l = ar.length-1;
while(i<ar.length){
    let mid = Math.floor((f+l)/2);
   if(t == ar[mid] ){
    console.log(mid);
   } 
  else if(t < ar[mid] ) l = mid-1
  else if(t > ar[mid] ) f = mid+1
  else i++
}

