function  isBalanced(s) {
    // code here

     if(s.length%2!==0) return false
          let arr =[]
 for(let k of s){
   if(k === '(' || k === '{' || k === '[') arr.push(k)

   else{
      if(arr.length===0) return false

      let lastBracket =  arr.pop()

      if((lastBracket === '(' && k !== ')') || 
         ((lastBracket === '{' && k !== '}') ) ||
         (lastBracket === '[' && k !== ']') 
        ) return false
   }
   
 }
  return arr.length===0
 
}
console.log(    isBalanced("[{()}]"))


// function check(a,b) {
//     if(a == b ) console.log('ys');
//     else console.log('no');
    
    
// }
// check('(',')')

// function  isBalanced(s) {
//     // code here
//     if(s.length%2!==0) return false
 
//  for(let i=0; i<s.length; i++){
//     if(s[i] === s[(s.length-1)-i]){
//         console.log(s[i],s[(s.length-1)-i])
//     }
//     else console.log('no',s[i],s[(s.length-1)-i]);
    
     
//  }

 
// }
// // console.log(    isBalanced("[{()}]"))

// console.log(    isBalanced( "[(])" ))
