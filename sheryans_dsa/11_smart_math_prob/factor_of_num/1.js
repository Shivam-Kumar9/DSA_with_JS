let n = 30;

for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
        process.stdout.write(i + ' ');
    }
}

for (let i = Math.floor(Math.sqrt(n)); i >=1 ; i--) {
    if (n % i === 0) {
        process.stdout.write(n/i + ' ');
    }
}

//1 is for perfect squar of number divisble
//2 is for not perfect sqare of number. 

// find pure divider 
// you find common that only  till root  is sure divisible 
// afterward  those bigger then root  numbers is the  perfect square quotient