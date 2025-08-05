// better then brut force 
 // Euclidean
  
//   a    = 32         20 = b
//   32-b= 12          20
//          12         8  = 20-a    
//   12-8 = 4          8
//        4            4  = 8-a  
let a =20 , b =32

while(a != b  ){
  if(a >b ) a = a-b
  else b = b-a
}
console.log(a,b);