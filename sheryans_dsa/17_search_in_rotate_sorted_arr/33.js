//33 search in rotated sorted array
// 
let ar = [4,5,6,7,0,1,2], t=4;
let f=0;
let l= ar.length-1;
while(f<=l){
    let mid = f+ Math.floor((l-f)/2);
    if(t == ar[mid]){console.log(mid); break;}
    if (ar[f] <= ar[mid]) { // if left half is sorted
        if(ar[f] <=t && ar[mid] >= t ){ // if ----target---- is in the left sorted half
            l=mid  // why not mid +1 => because mid is also a candidate
        }
        else f=mid+1 // if not found in left half then search in right half
     // why mid+1 => because mid is not a candidate anymore
    } 
    else {
        if(ar[mid +1]<= t && ar[l]>= t){
            f=mid+1
        }
        else l=mid 
    }
} 

