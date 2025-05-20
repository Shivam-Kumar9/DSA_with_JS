//Q42


var trap = function(height) {
     let left = new Array(height.length)
     let  left_largest =height[0]
     let right = new Array(height.length)
    let   right_largest = height[height.length-1]
    let water = 0   
   for(let i = 0; i<height.length; i++){
      left_largest = Math.max( left_largest, height[i])
       left[i] = left_largest 
   }
   for(let i = height.length-1;i>=0; i--){
      right_largest  = Math.max( right_largest, height[i])
      right[i] = right_largest 
   }
  
   for(let i = 0; i<height.length; i++){
     let base  = Math.min( left[i], right[i])
      water += (base - height[i])
   }
   return water
};

console.log(trap([4,2,0,3,2,5]))


// O(n)