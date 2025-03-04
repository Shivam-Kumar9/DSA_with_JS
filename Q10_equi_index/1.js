function findEquilibrium(arr) {
    // code here
    let max = 0
    for (const el of arr) {
     max+=el
    }

    let left =0
  for (let i = 0; i < arr.length; i++) {
      
      let right = max - left- arr[i]
      if(left === right) return i
      left += arr[i]
  }   
  return -1

}

console.log(findEquilibrium([1, 2, 0, 3]));