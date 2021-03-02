// prime calc
// source: https://stackoverflow.com/questions/40200089/number-prime-test-in-javascript
function isPrime(prime) {
    for (let i = 2n; i < prime; i++) {
        if (prime % i === 0n) {
            return false;
        }
    }
    self.postMessage(prime);
}

function generatePrimes() {
    let bigint = 2n;
    setInterval(()=>{isPrime(bigint++)}, 0.001);
}

generatePrimes();