 

//  (function findmax(ar){
   
//   for(let i=0 ; i<ar.length; i++){
//       if(ar[i] < ar[i+1]){
//         ar[i+1]= ar[i]
//       }
//   }console.log(ar[ar.length-1])

//  })([1,9,14,8,4,2,78,0,5])

function findmax(arr){
//  let arr = [...org]
   
let temp
  for (i=0;i<arr.length;i++){
        for(k=i; k<arr.length; k++){
          temp =  arr[i]
          
        }
        
  }
  // console.log(arr)
  return arr
}

console.log(findmax([1,9,14,8,4,2,78,0,5]))

//  let max = -Infinity
//  for(let num of array){
//     if(num > max) max = num
//  }
//    console.log(object)