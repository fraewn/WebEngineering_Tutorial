// Erstellen Sie auf Ihrem Server www2.inf.h-brs.de (oder localhost) zwei Text-Dateien A.txt und B.txt mit
// ungefähr gleich vielen Zeilen. Laden Sie mit der fetch-API parallel beide Text-Dateien vom Server.
// Geben Sie auf einer Webseite den Inhalt beider Dateien zeilenweise aus, wobei der Anfang der Zeile aus A.txt
// und das Ende aus B.txt stammen soll. Die beiden Dateien sollen also zeilenweise konkateniert werden.
// Erzielen Sie max. Geschwindigkeit durch maximale Parallelität. Achten Sie gleichzeitig auf Korrektheit.
// Verwenden Sie dabei ausschließlich die Promise API ohne async / await.
// Text-Dateien: Siehe Ordner Resources, je 2423 Zeichen 'A' in A.txt und 'B' in B.txt (100 pro Zeile)


let pathA = "resources/A.txt";
let pathB = "resources/B.txt";

function splitAtLinebreak(t){
    return t.split(/\n/);
}

function organizePrint(arrA, arrB){
    for(let i=0; i < arrA.length; i++){
        placeholder = document.getElementById("concat");
        writeToDoc(placeholder,arrA[i].toString() + arrB[i].toString() + "<br>")
    }
}

function writeToDoc(elementId, text){
    newTextNode = document.createElement("p");
    newTextNode.innerHTML = text;
    placeholder = document.getElementById("concat");
    placeholder.appendChild(newTextNode);
}

Promise.all([fetch(pathA).then(response => response.text()).then(splitAtLinebreak),
    fetch(pathB).then(response => response.text()).then(splitAtLinebreak)])
    .then(([arrayA, arrayB]) => {organizePrint(arrayA, arrayB)});