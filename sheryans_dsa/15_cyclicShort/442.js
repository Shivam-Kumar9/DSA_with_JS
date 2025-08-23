// find all dublcates in an array

let ar = [4, 3, 2, 7, 8, 2, 3, 1];

let i=0;

while(i<ar.length){
    let rightIndex = ar[i]-1;
    if(ar[i] != ar[rightIndex] ){
        let temp = ar[rightIndex]
        ar[rightIndex] = ar[i]
        ar[i] = temp
    }
    else i++
}

let ep = []

for(let i=0; i<ar.length; i++){
    if(ar[i] != i+1) ep.push(ar[i])
}

console.log(ar)
console.log(ep)