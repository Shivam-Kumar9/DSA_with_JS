// Q2 
//  left and right rotation by k element
//https://www.youtube.com/watch?v=AaYggzBvD4Q 
// 29:45

let ar = [1,2,3,4,5]

let rep  = 7
  rep  = rep % 5  // remain to so rotate two
  //-------------------------------
// for(let k=1; k<=rep;k++){
//     let copy = ar[0]
//     for(let i=0; i<ar.length-1; i++){
//        ar[i] = ar[i+1]
//     }
//     ar[ar.length-1] = copy
//     // this brutforce 
// }
//---------------------------------------------
// let temp = new Array(ar.length)
// for (let i = 0; i < ar.length; i++) {
//      temp[i]= ar[(i+rep)%ar.length]
//      // this also bad taking extra new array space 
// }
//-----------------------------
let endVal = ar.length-1
 
reverse(0,rep-1)  // minus because to catch the indexing 
reverse(rep,endVal) // not minus here because to catch the next to little revesed array
reverse(0,endVal)  // this just reverse whole thing
function reverse(i,j){
    while(i<j){
     let temp = ar[i]
        ar[i] = ar[j]
        ar[j] = temp
     i++;
     j--
   } 
//     time comp == n(1) ✅ best
}

console.log(ar)
// one question   k agar big ho to use bhe mannage karna hoga 
// 5 rotation  =  0 rotation simplily console because it cycle back and return to same position
// we can use modulo  k% length to control it 
// 5 %5  = 0 rot
// 7% 5  = 2 rotate






// minie think

// for(let i=0; i<ar.length; i++){
//     for(let j =1; j<=k; j++){
//         ar[i] = ar[i+j]
//     }
// }
//scrap