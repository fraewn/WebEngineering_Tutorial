// Unfertig!

let content;
let html_content;
let css_content;
let js_content;
let activeTopic;

(async () => {
    let resultA = await fetch("webeng_info.json");
    let dataA = await resultA.text();
    content = JSON.parse(dataA);
    html_content = content['html'];
    css_content = content['css'];
    js_content = content['javascript'];
})();

document.getElementById("html").addEventListener("click", function () {manageTopContent("html")});
document.getElementById("css").addEventListener("click", function () {manageTopContent("css")});
document.getElementById("javascript").addEventListener("click", function () {manageTopContent("javascript")});
document.getElementById("sub0").addEventListener("click", function () {manageContent(activeTopic)});
document.getElementById("sub1").addEventListener("click", function () {manageContent(activeTopic)});
document.getElementById("sub2").addEventListener("click", function () {manageContent(activeTopic)});
document.getElementById("sub3").addEventListener("click", function () {manageContent( activeTopic)});

function manageTopContent(subject){
    activeTopic = subject;
    switch(subject) {
        case "html":
            fillSubTopics(html_content);
            // code block
            break;
        case "css":
            fillSubTopics(css_content);
            // code block
            break;
        case "javascript":
            fillSubTopics(js_content);
            break;
        default:
    }
}

function manageContent(activeTopic){
    for(let i = 0; i < Object.keys(activeTopic).length; i++){
        let currentKey = Object.keys(activeTopic)[i];
        fillContents(currentKey, activeTopic)
    }

}

function fillSubTopics(subject){
    for (let i = 0; i < 4; i++){
        document.getElementById("sub" + i).innerHTML = "";
    }
    for (let i = 0; i < Object.keys(subject).length; i++) {
        let currentKey = Object.keys(subject)[i];
        document.getElementById("sub" + i).innerHTML = currentKey;
    }
}

function fillContents(subtopic, activeContent){
    switch(activeContent) {
        case "html":
            document.getElementById("contents").innerHTML = "";
            document.getElementById("contents").innerHTML = html_content[subtopic]["content"];
            externalResources.innerHTML = "Additional Information: " + html_content[subtopic]["references"];
            // code block
            break;
        case "css":
            fillSubTopics(css_content);
            // code block
            break;
        case "javascript":
            fillSubTopics(js_content);
            break;
        default:
    }

}





/*document.getElementById("html").addEventListener("click", (async _=> { // Async IIFE
    const leftside = document.getElementById("leftside");
    const data = await fetchJson('webeng_info.json');
    for(const [html] of Object.entries(data)){
        const div = document.createElement('div');
        div.innerHTML = '<a class=links href="index.html"><h1>$html</h1></a>'
        leftside.appendChild(div);
    }
})());*/



async function fetchJson(url){
    const request = await fetch(url);
    return await request.text();
}

