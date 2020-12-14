const fs = require("fs");
const { pipeline } = require('stream/promises');

const big_file1 = process.argv[2];
const big_file2 = process.argv[3];

const newfile = 'merged_file_stream.txt';

fs.writeFileSync(newfile, "");

let lines1;
let lines2;

async function streamBigFile1(){
    await pipeline(
        fs.createReadStream(big_file1, "utf-8"),
        async function (source){
            for await (const chunk of source) {
                lines1 = chunk.split('\n');
                merge(lines1, lines2);
            };
        }
    );
    console.log("Pipeline -streamBigFile1- succeeded.");
    return lines1;
}

async function streamBigFile2(){
    await pipeline(
        fs.createReadStream(big_file2, "utf-8"),
        async function (source){
            for await (const chunk of source) {
                lines2 = chunk.split('\n');
                merge(lines1, lines2);
            };
        }
    );
    console.log("Pipeline -streamBigFile2- succeeded.");
    return lines2;
}

function merge(lines1, lines2){
    count=0;
    try {
        for (const line of lines1) {
            const newValue = line.replace(/(\r\n|\n|\r)/gm, "");
            fs.appendFileSync(newfile, newValue + lines2[count++] + "\n");
        }
    }
    catch (e){
        console.log("first call is expected to fail - no error if you see this message only once");
    }
}

streamBigFile1().catch(console.error);
streamBigFile2().catch(console.error);




