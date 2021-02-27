/**
 * Generates a random number between 1 and 100.
 */
function randTestNumber() {
    return Math.floor((Math.random() * 100) + 1);
}

WebAssembly.instantiateStreaming(fetch('ggt.wasm'), {})
    .then(obj => {
        let
            x = randTestNumber(),
            y = randTestNumber()
        ;
        document.getElementById('x').innerText = x;
        document.getElementById('y').innerText = y;
        document.getElementById('z').innerText = obj.instance.exports.gcd(x, y);
    })
    .catch(console.error)
;