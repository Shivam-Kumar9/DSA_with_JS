// leetcode Q26
let ar = [0,0,1,1,1,2,3,3,4,4,5]

let j=1
 for(let i=0; i<ar.length-1; i++){
    if(ar[i] !== ar[i+1]){
        ar[j] =ar[i+1];
        j++;
    }
 }
//-- Time --
//-- flirt -- 
console.log(ar)