
// Q5 fibanooci series 

  //       ------------ basic  iteration

let n=10

let fir =0 ,sec=1

process.stdout.write(fir + " " + sec)

for( let i = 0 ; i <= n-2 ; i++){
    let third = fir  +  sec  ;
        fir = sec , sec = third
    process.stdout.write(" "+ third)    
}

//         ----------- recursive
   
function fiboTerm(n, first, sec){
  if(n == 0) return
   let third  = first + sec
  process.stdout.write(" " + third )

  fiboTerm(n-1, sec, third)


}

let num = 10
process.stdout.write("0" + " " + "1")

fiboTerm(num-2, 0, 1)


// Q6  n - th term ka sum

let sumOf = 7

function nthTerm(n){
    if( n == 1 || n == 0 ) return n
    return  nthTerm(n-1) + nthTerm(n-2)
}

console.log(' nthTermSum' , nthTerm(sumOf));