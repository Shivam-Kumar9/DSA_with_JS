function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
printNumbers(5);
// Time Complexity: O(n)

function printPairs(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            console.log(i, j);
        }
    }
}
printPairs(5);
// Time Complexity: O(n^2)
function printLog(n) {
    let i = 1;
    while (i <= n) {
        console.log(i);
        i *= 2;
    }
}
printLog(5);
// Time Complexity: O(log n)    

function printConstant(n) {
    console.log(1);
    console.log(2);
    console.log(3);
}
printConstant(5);
// Time Complexity: O(1)

function printMixed(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
printMixed(5);
// Time Complexity: O(n)        

function printNested(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            console.log(i, j);
        }
    }
    for (let k = 1; k <= n; k++) {
        console.log(k);
    }
}
printNested(5);
// Time Complexity: O(n^2) + O(n) = O(n^2) (dominant term)
function printLogLinear(n) {
    for (let i = 1; i <= n; i++) {
        let j = 1;
        while (j <= n) {
            console.log(i, j);
            j *= 2;
        }
    }
}
printLogLinear(5);
// Time Complexity: O(n log n)
function printFactorial(n) {    
    function factorial(num) {
        if (num === 0 || num === 1) {
            return 1;
        }
        return num * factorial(num - 1);
    }
    console.log(factorial(n));
}
printFactorial(5);
// Time Complexity: O(n)

function printExponential(n) {
    function fibonacci(num) {
        if (num <= 1) {
            return num;
        }
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
    console.log(fibonacci(n));
}
printExponential(5);
// Time Complexity: O(2^n)

function printLinearithmic(n) {
    function mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        const mid = Math.floor(arr.length / 2);
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));
        return merge(left, right);
    }           
    function merge(left, right) {
        const result = [];
        let i = 0, j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    }
    const arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    mergeSort(arr); 