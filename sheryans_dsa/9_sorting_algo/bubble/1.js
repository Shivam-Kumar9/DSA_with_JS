
let ar = [10,5,12,1,13]
  
let n = ar.length
for(let i=0; i<n-1; i++){
    
    for(let j=0; j<n-1-i;j++){
        if(ar[j]>ar[j+1]){
            let temp = ar[j]
            ar[j]    = ar[j+1]
            ar[j+1]  = temp
        }
    }

}
console.log(ar)

/*      if  j  is  BIGG then j+1 then swap || if not then j++
phase -1

--b
(10,5,12,1,13)
----b
[5,10,12,1,13]
-------b
[5,10,12,1,13]
---------b
[5,10,1,12,13]
-----------b
[5,10,1,12,13]
(largest 13 is now at the end)

// phase -2
-b
[5, 10, 1, 12, 13]
----b
[5, 10, 1, 12, 13]
------b
[5, 1, 10, 12, 13]
--------b
[5, 1, 10, 12, 13]
(12 is now in correct position)

// phase -3

--b
[5, 1, 10, 12, 13]
----b
[1, 5, 10, 12, 13]
------b
[1, 5, 10, 12, 13]
// (10 is now in correct position)

// phase -4
--b
[1, 5, 10, 12, 13]
----b
[1, 5, 10, 12, 13]
// (5 is now in correct position)

now one item will remain it get autometic fit 

*/

