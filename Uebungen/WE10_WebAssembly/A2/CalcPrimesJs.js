// source: https://gist.github.com/Costava/df4ac5a1a6c78a8c539f44867e5ef464
/**
 * Returns a list of the prime numbers in range [0, max) in order
 * Implementation of the Sieve of Eratosthenes
 * https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 * @param {number} max
 * @returns {number[]}
 */
export function getPrimeNumbers(max) {
    // A list of booleans where index 2 being true corresponds to 2 being prime
    var isPrime = [];

    // Initial population of isPrime
    for (var i = 0; i < max; i += 1) {
        if (i != 0 && i != 1) {
            isPrime.push(true);
        }
        else {
            isPrime.push(false);
        }
    }

    // Iterate over entire list
    // Element => true if index is prime else false
    for (var i = 0; i < max; i += 1) {
        if (isPrime[i]) {
            for (var j = i + i; j < max; j += i) {
                isPrime[j] = false;
            }
        }
    }

    var primes = [];

    // Assemble list of primes
    for (var i = 0; i < max; i += 1) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    return primes;
}