// recursive mode 
 // Euclidean
 function gcd( a,b){
    if(a == b) return a
    if( a>b) return gcd(a-b, b)
    return  gcd(a, b-a )    
 }

 let a= 32 , b = 20 ; 

 console.log(  'recursive',gcd(a,b));

// O ( log(min(a,b)) )