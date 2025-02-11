
// checking sum zero -Problem 1
// [-5,-4,-3,-2,0,2,4,6,8] --> input
// [-4,4] ->output

function getSumPairZero(array){ //this is for off loop
    for(let number of array){
        for(let j=1; j<array.length; j++){
            if(number+array[j]===0){
                return [number , array[j]]
                
               
            }
        }
    }
}
const res =  getSumPairZero([-5,-4,-3,-2,0,2,4,6,8])
 console.log(res);

 // --> time complacity  == o(n^2) quadratic time complexity 