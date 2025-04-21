
/*  
*logic 
place  index(i)  - in a   ||  place index(j) -in b   === in starting
create an array that merges both with total legnth of ele
start like   compare   i && j which is smaller then put in new array 
** catch - of any of array is short then 
          do traversing from there were no comparison needed  and push in array

*/
let arr1 = [2,5,6] ;
let arr2 = [1,3,4,7];

let arr = new Array(arr1.length + arr2.length)
// let i  = 0;
// let j = 0;
// let k = 0 ;
// let i = j = k = 0;
let i  = j = k =0 ; //
while(i<arr1.length && j<arr2.length){
   // arr[k]=arr1[i] 
   // i++;j++  ==> this step also can be done 
   // BUT  we know that  val++  do work first then increment so its fine 

   if(arr1[i] < arr2[j]){
    arr[k++] = arr1[i++] 
   }
   else  arr[k++] = arr2[j++]
}
/// if any of the  num left frm the arr 1||2 then they are added by while 
//beacuse  j  && i have grwn differently so not sure which  array has more ele
while(j<arr2.length){
   arr[k++] = arr2[j++]
}
while(i<arr1.length){
   arr[k++] = arr1[i++]
}

console.log(arr)