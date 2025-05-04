// 2
// 1 2 0 0 1 1 6 6 4 1 6 1

function run(over, run) {

    let ab = 0
    let vi = 0
    let Striker = 'ab'
    let count  = 0 
    for (i=0;i<run.length;i++){

        if(Striker === 'ab'){
          ab+=run[i]
        }else vi+=run[i]
        
        if(run[i] === 1 || run[i] || 3){
           Striker  = (Striker === 'ab') ? 'vi' : 'ab'
        }
        if( count %6 === 0)   Striker  = (Striker === 'ab') ? 'vi' : 'ab'
       
        count++
    }
    console.log(`Ab.deviller -->${ab} , Virat --> ${vi}`)
    if (ab > virat) {
        return "AB de Villiers";
    } else if (virat > ab) {
        return "Virat Kohli";
    } else {
        return "Tie";
    }

}
run(2, [1,2,0,0,1,1,6,6,4,1,6,1])





//  let a = 11  , b = 22 

//  let c = a + b + a++ + b++ + ++a + ++b 

// //  console.log(a ,b , c)

// let s = 6 , v='7'
// console.log(v+s)