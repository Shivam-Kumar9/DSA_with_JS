 // better then Q3.js

function gcd(a,b){
    if(b == 0) return a
    return gcd(b , a%b)
}

console.log(gcd(16,14));

// console.log(2%12); 
// console.log(12%2); 

// O ( log(man(a,b)) )

 //      a = 16 , b = 14
 //      a = 14 , (16%14 =2)    --- swaping happen  
 //      a = 2 , (14%2 = 0)     
 //      gcd(16,14) = 2          --- the last non-zero remainder is the GCD


 //% gives the remainder of the division