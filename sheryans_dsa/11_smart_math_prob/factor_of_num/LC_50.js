function myPow(x, n) {
    // Handle edge case of n = 0
    if (n === 0) {
        return 1.0;
    }
    
    // Handle negative exponents
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    
    // Binary exponentiation
    let result = 1.0;
    let currentProduct = x;
    
    while (n > 0) {
        // If n is odd, multiply result by currentProduct
        if (n % 2 === 1) {
            result *= currentProduct;
        }
        // Square the currentProduct
        currentProduct *= currentProduct;
        // Integer divide n by 2
        n = Math.floor(n / 2);
    }
    
    return result;
}