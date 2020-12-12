// writeFileSync is obv. only available in the require('fs') module not in require('fs').promises
const fs = require('fs');

// get parameter
const lineAmount = process.argv[2]

// create file
fs.writeFileSync('generated_numbers.txt', "", function (err) {
    if (err) return console.log(err);
});

// append to file
// use Sync because otherwise the numbers are not necessarily in the right order!
for(let i=0; i<=lineAmount; ++i){
    fs.appendFileSync('generated_numbers.txt', i.toString() + ".\n", function (err) {
        if (err) return console.log(err);
    });
}




