// created with the help of Fabian Stotz
fs = require('fs')

const limit = process.argv[2];
let content = "";
let newfile = 'generated_alpha.txt'

function getLine(i){
    let res = "";
    const charCodeAlphabetBegin = 65;
    const amountLetters = 26;
    let rest = i;

    while (rest >= amountLetters){
        rest -= amountLetters;
        res += String.fromCharCode(charCodeAlphabetBegin);
    }
    res += String.fromCharCode(charCodeAlphabetBegin + rest);
    return res;
}

let i=0;
while(i < limit){
    content +=  getLine(i) + "\n";
    i++;
}

fs.writeFile(newfile, content, function (err) {
    if (err) return console.log(err);
});
