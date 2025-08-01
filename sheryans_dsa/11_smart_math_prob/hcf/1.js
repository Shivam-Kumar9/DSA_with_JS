// Q1    H.C.F   || G.C.D (Highest Common Factor || Greatest Common Divisor)

 // brutforce itteration 

  // a = 20  --> 1 2 4  5  10  20
  // b = 32  --> 1 2 4 8  16  32
  
   
  for(i = 20 ; i>=1; i--){
    if((20%i==0) && (32%i==0)  ) return console.log(i);
    }


    O ( min(a,b) )