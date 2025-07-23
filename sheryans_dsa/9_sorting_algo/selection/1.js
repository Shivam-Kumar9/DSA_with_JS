 let ar = [ 10,5,12,1,13]
let n = ar.length 

for (let i = 0; i <n-1; i++) {
    let min = i;
       for(let j=i+1; j<n; j++){
        if(ar[min] > ar[j]){
            min = j
         }
       }
       if(min !== i ){
          let temp = ar[i]
             ar[i] = ar[min] 
             ar[min] = temp
       }
}
console.log(ar)


/*
[ 10,5,12,1,13]

select  i 
*/ 