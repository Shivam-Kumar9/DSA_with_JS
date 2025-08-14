// count prim num
// Seive of Eratosthenes
// ki sqar root  ka jitne bhe multiple ha  wo prime nahi hote 
// https://youtu.be/gnxhhRThlb8?si=frA7MWtoheFKNkaA
//52: 23

let n = 30;

let arr = new Array(n+1).fill(true)

// console.log(arr);

for(let i= 2; i<=Math.floor(Math.sqrt(n)); i++){
  if(arr[i]){
    for(let j=i*i; j<=n; j+=i){
      arr[j] = false
   }
  }
}

  for(let i=0; i<=n; i++){
      if(arr[i]){
        process.stdout.write(i+' ')
        // arr[i] = i
     }
   }

// console.log(arr);
// i*i se ye already mark ho chuke honge like 5*5  se pahle 10,15,20 already marked ho chulka hoga
// this does handle edge cases when sec loop run the back prime number is i=listed already so the jump is there