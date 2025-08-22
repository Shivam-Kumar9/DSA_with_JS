
let ar = [1,4,2,4]

let i = 0;

while(i < ar.length) {
    let correctIndex = ar[i] - 1;
 if(ar[i] != ar[correctIndex]  && correctIndex < ar.length) {
    ar[i] = ar[i] + ar[correctIndex];
    ar[correctIndex] = ar[i] - ar[correctIndex];
    ar[i] = ar[i] - ar[correctIndex];
 } 
  else  i++    
}
let ep =[]

for (let i = 0; i < ar.length; i++) {
    if(ar[i] != i+1){
     ep.push(ar[i],i+1)
    }
    
}
console.log(ar);
console.log(ep);