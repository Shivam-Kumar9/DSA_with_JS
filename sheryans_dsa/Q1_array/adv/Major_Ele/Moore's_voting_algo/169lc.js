//Q169
let ar = [2,2,1,1,1,1,1,2,2]

let win = ar[0]
let count = 1
for(let i=1; i<ar.length; i++){
    if(count === 0 ){
        win = ar[i]
        count = 1
     }
   else  if(ar[i] === win){
        count++
     }
     else{
        count--
     }

}

console.log(win)



/*
  ----------my way n(1)  also ✅--------- 

let win 
let obj = {}
let l = ar.length
for(let i=0; i<l;i++){
    obj[ar[i]] = (obj[ar[i]] ||0)+1
}
for(let k in obj){
    let majorPara =  Math.floor(l/2)
    if(obj[k]>majorPara){
        win =  Number(k)
        
    }
}

console.log(win)
*/