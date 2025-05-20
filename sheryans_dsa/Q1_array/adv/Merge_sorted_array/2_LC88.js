//88 Merge Sorted Array

var merge = function (nu1, m, nu2, n) {
  let p1 = m - 1; // n1 valid  num not filler area
  let p2 = n - 1; // n2 last digit
  let p = m + n - 1; // n1 last empty digit

  while (p1 >=0 && p2 >=0) {
    if (nu2[p2] > nu1[p1]) {
      nu1[p--] = nu2[p2--];
    }
    else {
        nu1[p--] = nu1[p1--]
    }
  }
  return nu1;
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]



// var merge = function(nu1, m, nu2, n) {
//     // console.log(nu1.length )
//     let leng = nu1.length-1
//     while(n > 0){
//        nu1[leng] = nu2[n-1]
//        console.log(nu1 )
//        leng--
//        n--
//     }

//     console.log(nu1 )
// };
