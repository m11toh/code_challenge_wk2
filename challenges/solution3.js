function findprime(num) { 
    var sieve = [], i, x, prime = [];//initialize variables of i,x and primes

    for (i = 2;i <= num;i++){ //initialize i
        if(!sieve[i]){
                //if the number in sieve array = false; 
                //  the number is prime and add it to the prime array
            prime.push(i);
            for(x = i << 1; x <= num;x += i){
                sieve[x] = true;
            }
        }
    }
    return prime;  // Return the prime numbse
}

console.log (findprime(40));
console.log (findprime(70));
 // Find the prime numbers up to the given num