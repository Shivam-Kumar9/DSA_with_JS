//  ascending order
// back
function temp(n){ 
   if(n === 0) return 
  temp(--n)
  console.log(n);
}

temp(9)