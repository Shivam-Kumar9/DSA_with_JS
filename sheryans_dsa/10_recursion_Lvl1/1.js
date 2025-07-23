//  decending order
function temp(n){
    if( n === 0) return
    console.log('value is ',n);
    temp(--n)

}
temp(5)