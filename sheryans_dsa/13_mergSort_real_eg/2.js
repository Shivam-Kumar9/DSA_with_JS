// recursion complete

 function divide(arr, first, last){ //log(n) 

    if(first>=last) return
    let mid = first+ Math.floor((last-first)/2);
    divide(arr, first ,mid )
    divide(arr, mid+1, last)
    conquor(arr, first, mid, last)
 }

   let ar= [8, 2, 1, 9, 5, 12, 4, 20] ;
divide(ar, 0, ar.length-1) // total timeC - n*log(n)


 
function conquor(arr, first, mid, last) { // O(n) timec
  let i = first,
    j = mid + 1,
    k = 0;
  let temp = new Array(last - first + 1);
  while (i <= mid && j <= last) {
    if (arr[i] < arr[j]) temp[k++] = arr[i++];
    else temp[k++] = arr[j++];
  }

  while (i <= mid) {
    temp[k++] = arr[i++];
  }
  while (j <= last) {
    temp[k++] = arr[j++];
  }
  // yaha se  jo temp me ha use arr me update/replace karnna ha .
  let p = 0 , t= first;
  while(p<temp.length){
    arr[t++] = temp[p++]
  }
  console.log(arr);
}
 