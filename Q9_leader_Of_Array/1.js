// You are given an array arr of positive integers. Your task is to find all the leaders in the array. An element is considered a leader if it is greater than or equal to all elements to its right. The rightmost element is always a leader.

// Examples:

// Input: arr = [16, 17, 4, 3, 5, 2]
// Output: [17, 5, 2]
// Explanation: Note that there is nothing greater on the right side of 17, 5 and, 2.  

 function  leaders(a) {
   
  let leader =[];
  let max =-Infinity;
  for(let i=a.length-1; i>=0; i--){
    if(a[i]>max){
    //   console.log(a[i]);
        leader.unshift(a[i])
        max =a[i]
    }
  }

  return leader
}


console.log(leaders([16, 17, 4, 3, 5, 2]))

//  function  leaders(a) {
//     // code here
//     let q= [...a]
//   let leader =[];
//   let index = 0
//   let max =-Infinity;
//   let fresh 
//        function cb(){
//         for(let i=0; i<q.length; i++){
//             if(q[i]>max){ 
//                 max = q[i]
//                 index = i
//             }
//             if(i == (q.length-1) ){
//                 leader.push(max)
//                 max= 0
//                fresh = q.slice(index+1);
//             }
//        }
//     q=[...fresh];
//     index=0
//     cb()
//   }
//   console.log(leader,max,q);
//   return leader
// }


// console.log(leaders([16, 17, 4, 3, 5, 2]))

