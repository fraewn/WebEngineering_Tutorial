const fs = require('fs').promises;
const {performance} = require('perf_hooks');
const t0 = performance.now();

const big_file1 = process.argv[2];
const big_file2 = process.argv[3];

const newfile = 'merged_file_files.txt';

fs.writeFile(newfile, "");

(async _=>{
    const[text1, text2] = await Promise.all([
        fs.readFile(big_file1, 'utf8'),
        fs.readFile(big_file2, 'utf8')
    ]);

    const lines1 = text1.split('\n');
    const lines2 = text2.split('\n');

    let count = 0;
    for(const line of lines1){
        const newValue = line.replace(/(\r\n|\n|\r)/gm, "");
        fs.appendFile(newfile, newValue + lines2[count++] + "\n");
    }
})();

console.log("Performance of merge_files.js: " + t0);