// source: https://expressjs.com/de/starter/hello-world.html
const express = require('express')
const { pipeline } = require('stream/promises');
const path = require('path')
const fs = require('fs');
const PDFDocument = require('pdfkit');
const app = express()
const port = 3001


// html is in 'public/index.html'
// java script code from merging task is in in 'public/app.js', referenced by the html code
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.set("Content-Type", 'text/html');
})

app.post('/merge', (req, res) => {
    res.set("Content-Type", 'text/html');
    console.log("merge request");
    const big_file1 = "big_file1.txt";
    const big_file2 = "big_file2.txt";
    streamBigFile1(big_file1).catch(console.error);
    streamBigFile2(big_file2).catch(console.error);
    setTimeout(function(){res.download("bigFile.pdf")}, 800);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


let lines1;
let lines2;

async function streamBigFile1(big_file1){
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

async function streamBigFile2(big_file2){
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
        let pdfDoc = new PDFDocument;
        let stream = fs.createWriteStream("bigFile.pdf");
        pdfDoc.fontSize(20);
        pdfDoc.text("Merged Files:",{align: "center"});
        pdfDoc.moveDown();
        pdfDoc.fontSize(5);
        for (const line of lines1) {
            const newValue = line.replace(/(\r\n|\n|\r)/gm, "");
            const text = newValue.toString() + lines2[count++].toString() + "\n";
            pdfDoc.text(text);
            pdfDoc.moveDown();
        }
        stream.on('finish', function() {

        });
        pdfDoc.pipe(stream);
        pdfDoc.end();

    }
    catch (e){
        console.log("first call is expected to fail - no error if you see this message only once");
    }
}






