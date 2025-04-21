//Q52 lc

let ar=[-2,1,-3,4,-1,2,1,-5,4]

let sum =  0
let total = -Infinity // -infi because in there are also number wo are smaller than 0   || what happend if all value would be negative the 0 will cause problem

for(let n of ar){
    sum+= n
    if(sum >total) total = sum
    if(sum <0) sum =0 // when adding neg become incrementing(that is doing opposite of sum techinally  || we want highest pos+v) & also it would cause trouble in adding positive (it will decre insted of add)  
}

console.log(total)