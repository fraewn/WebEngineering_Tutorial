// json object
// root (level 0)
let webKnowledge;
// level 1
let html_content;
let css_content;
let js_content;

// current set topic (out of level 1)
let activeTopic;

// html elements
// main menu
let html = document.getElementById("html");
let css = document.getElementById("css");
let javascript = document.getElementById("javascript");
// sub menu
let sub0 = document.getElementById("sub0");
let sub1 = document.getElementById("sub1");
let sub2 = document.getElementById("sub2");
let sub3 = document.getElementById("sub3");
let sub0Content;
let sub1Content;
let sub2Content;
let sub3Content;
// "article" element where content is displayed
let contentRoot = document.getElementById("contents");

// fetch json with content information
(async () => {
    let resultA = await fetch("webeng_info.json");
    let dataA = await resultA.text();
    webKnowledge = JSON.parse(dataA);
    html_content = webKnowledge['html'];
    css_content = webKnowledge['css'];
    js_content = webKnowledge['javascript'];
})();

// main menu (html, css, java script, other)
html.addEventListener("click", function () { manageTopContent("html")});
css.addEventListener("click", function () { manageTopContent("css")});
javascript.addEventListener("click", function () {manageTopContent("javascript")});

sub0.addEventListener("click", function () {
    contentRoot.innerText = "";
    fillContents(activeTopic, sub0Content)});
sub1.addEventListener("click", function () {
    contentRoot.innerText = "";
    fillContents(activeTopic, sub1Content)});
sub2.addEventListener("click", function () {
    contentRoot.innerText = "";
    fillContents(activeTopic, sub2Content)});
sub3.addEventListener("click", function () {
    contentRoot.innerText = "";
    fillContents(activeTopic, sub3Content)});


// manage top menu and fill submenu accordingly
function manageTopContent(subject){
    activeTopic = subject;
    if(activeTopic == "html"){
        fillSubTopics(html_content);
    }
    else if(activeTopic == "css"){
        fillSubTopics(css_content);
    }
    else if (activeTopic == "javascript"){
        fillSubTopics(js_content);
    }
    else {
        // other
    }
    // set global subContent variables
    sub0Content = sub0.innerText;
    sub1Content = sub1.innerText;
    sub2Content = sub2.innerText;
    sub3Content = sub3.innerText;
}

function fillSubTopics(subject){
    let countNecessarySubMenuEntries = 0;
    for (let i = 0; i < 4; i++){
        document.getElementById("sub" + i).innerHTML = "";
    }
    for (let i = 0; i < Object.keys(subject).length; i++) {
        let currentKey = Object.keys(subject)[i];
        document.getElementById("sub" + i).innerHTML = currentKey;
        countNecessarySubMenuEntries++;
    }
    console.log(countNecessarySubMenuEntries)
    removeSubMenuEntries(countNecessarySubMenuEntries);
}

// fill up content depending on which subtopic is selected
function fillContents(activeContent, subTopic){
    Object.entries(webKnowledge[activeContent][subTopic]).forEach((key, value) => {
        // content
        if(key[value] == "content"){
            let head = document.createElement("h2");
            let headContent = document.createTextNode("Erklärung:")
            let entry = document.createElement("p");
            let entryContent = document.createTextNode(key[value+1]);
            head.appendChild(headContent)
            entry.appendChild(head);
            entry.appendChild(entryContent);
            contentRoot.appendChild(entry);
        }
        // references is array and needs special treatment
        else {
            let head = document.createElement("small");
            let headContent = document.createTextNode("References: ")
            let entry = document.createElement("small");
            let entryContent = document.createTextNode(key[value]);
            head.appendChild(headContent)
            entry.appendChild(head);
            entry.appendChild(entryContent);
            contentRoot.appendChild(entry);
        }

    });
}

// removes elements, but obviously they are still removed when you click on the next top menu item
// better would be if they were added at the point where you click on a top menu item - in the necessary amount - and not before
function removeSubMenuEntries(necessaryEntries){
    console.log("hllo");
    let countSubMenuOptionsToRemove = 4 - necessaryEntries;
    let subMenu = document.getElementById("sideleft");
    for(let i = 0; i <= countSubMenuOptionsToRemove; i++){
        console.log("sub" + (necessaryEntries + i));
        let subMenuEntry = document.getElementById("subMenuOption" + (necessaryEntries + i));
        subMenu.removeChild(subMenuEntry);
        console.log("hllo"+i);
    }



}
