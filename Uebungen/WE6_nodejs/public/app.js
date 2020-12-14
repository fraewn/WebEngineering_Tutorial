const fs = require("fs");
const { pipeline } = require('stream/promises');

// add event listener for button "merge_button"
document.getElementById("merge_button").addEventListener("click", merge());

function merge(){
    console.log("test");
}

const big_file1 = document.getElementById("bf1").innerHTML;
const big_file2 = document.getElementById("bf2").innerHTML;

const newContent = document.createElement("p");

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
            newLine = document.createElement("div").innerHTML = newValue;
            newContent.appendChild(newLine);
        }
    }
    catch (e){
        console.log("first call is expected to fail - no error if you see this message only once");
    }
}

streamBigFile1().catch(console.error);
streamBigFile2().catch(console.error);