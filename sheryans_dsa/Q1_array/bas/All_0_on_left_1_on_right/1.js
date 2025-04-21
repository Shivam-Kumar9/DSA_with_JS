let ar = [0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]

let sz = ar.length

let i =0;
let j=0;
 while(i<sz){
    if(ar[i] ==0){
       let te = ar[i]
       ar[i] = ar[j]
       ar[j] = te
       j++
    }
    i++
 }
 console.log(ar)