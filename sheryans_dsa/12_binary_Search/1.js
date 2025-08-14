// 
let arr = [0, 3, 6, ,8 ,10 , 14, 17, 19, 20, 30, 32, 37, 40, 45, 49, 50, 52, 53, 54, 59, 60 , 62, 65, 68, 69, 70  ]
 
let x = 32 ; 

let a = 0

let z = arr.length-1

let mid = Math.floor((a+z)/2)



while( z < a ){
   if( x == arr[mid] ) {
     console.log("middle",mid)
        }
   else if( arr[mid] > x ){
      z = mid-1
   }
   else if( arr[mid] < x ){
      a = mid+1
   }
   else console.log("not found");
}
// console.log('object');