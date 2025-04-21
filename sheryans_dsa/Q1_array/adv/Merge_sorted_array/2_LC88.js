//88 Merge Sorted Array


var merge = function(nu1, m, nu2, n) {
    // console.log(nu1.length )
    let leng = nu1.length-1
    while(n > 0){
       nu1[leng] = nu2[n-1] 
       console.log(nu1 )
       leng--
       n--
    }

    console.log(nu1 )
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3) // [1,2,2,3,5,6]