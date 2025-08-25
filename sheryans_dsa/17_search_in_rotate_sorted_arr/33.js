// search in rotated sorted array
// 
let ar = [4,5,6,7,0,1,2], t=0;
let f=0;
let l= ar.length-1;
while(f<=l){
    let mid = f+ Math.floor((l-f)/2);
    if(t == ar[mid]){
        console.log(mid);
        break;
    }
    // left side sorted
    else if(ar[f] <= ar[mid]){
        if(t >= ar[f] && t < ar[mid]) l = mid-1;
        else f = mid+1;
    }
    // right side sorted
    else{
        if(t > ar[mid] && t <= ar[l]) f = mid+1;
        else l = mid-1;
    }
}