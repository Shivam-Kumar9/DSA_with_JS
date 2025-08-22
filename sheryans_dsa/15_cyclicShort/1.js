let arr = [4, 7, 9, 3, 6, 2, 1, 5, 8]
// if it is certain that n=9 means that there is 1 to 9 so ---- arr[0] -1 
// if it 0 to 9 then correct index sam as element

let i = 0;

while(i<arr.length){ //O(n) tc
    let correctIndex = arr[i]-1; // since elements are from 1 to n, we can use value as index
    if(arr[i] != arr[correctIndex] ) {
        // swap
        [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
    } else {
        i++;
    }
}
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// sc: O(1)