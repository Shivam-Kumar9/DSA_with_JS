 // sum in back tracking 


 function sum(n){
      if( n === 1) return 1
    return  n + sum(n-1)
 }
     
console.log(sum(5)) // 15

// recursion fun  me return tab likte he jab  tak prev value return na kar de taki age sum ho to  LIFO  use hoga  from tail.
  
// Q2 Factorial 

function factorial(m){
  if( m == 1) return m
   return m* factorial(m-1)
}
console.log(factorial(4));