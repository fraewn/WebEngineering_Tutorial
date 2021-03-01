// prime calc
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