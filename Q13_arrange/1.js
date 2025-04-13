


function     sort012(arr) {
    let ch = 1
    let sort =[];
    for(let i=0; i<arr.length; i++){
      
        
        for(let i=0; i<arr.length; i++){
           if(ch>arr[i]) sort.push(arr[i])
             
        
        }
        ch++
    }
    return sort
}

console.log(sort012([0, 1, 2, 0, 1, 2]))