//what is quick sort?

// How does Quick Sort work?
// real world applications of Quick Sort
/* criteria                         Quick                 Merge
best timeComplex                O(n log n)               O(n log n)
Average  tC                O(n log n)                   O(n log n)
worst    TC        O(n^2) if pivot is poor chosen      O(n log n) (consistent) 
stability                         not stable           stable 

*/
// pivot & partition
// this also divide and conquror algo


 // merge - need space but it is fast ----------------------
 // quick - no need of space but it is slow------------------

 // inside while 


function findPivotTdx(arr, first, last) { // O(n) tc
    let pivot = arr[first]; 
    let i = first + 1 , j = last;
    while(i<=j){
        while(i<=last && arr[i]<=pivot) i++;  // these 2 not increasing time complexity done one by one
        while(j>=first && arr[j]>pivot) j--;  // and in side no operation to doo

        if(i<j){
            swap(arr, i, j);
        }
    }
    swap(arr,first,j)
    return j;
}
function  quickSort(arr, first , last){ // log(n)
    if(first>=last) return;
    let pIdx = findPivotIdx(arr, first , last)
    quickSort(arr, first, pIdx-1)
    quickSort(arr, pIdx+1, last)
} // worst case n^2 when all are accending or decending
//it create pivit in each step  backside  (n-1) , (n-2), (n-3) 
//so natural num ap series  (n-1) + (n-2) + (n-3) = n(n-1)/2
// n^2

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

let arr = [5, 3, 8, 100, 4, 2, 9, 10, 12];
quickSort(arr, 0, arr.length - 1);
console.log(arr);