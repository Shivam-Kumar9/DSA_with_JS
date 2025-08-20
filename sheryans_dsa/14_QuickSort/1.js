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

function findPivotTdx(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}