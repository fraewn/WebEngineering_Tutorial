//++++++++++++ variables +++++++++++++++
// json object
// root (level 0)
let webKnowledge;
// level 1
let html_content;
let css_content;
let js_content;

// internal states
// manage state of current set topic (out of json object level 1)
let activeTopic;
// manage state of current number of sub menu options
let currentNumberOfSubMenuOptions = 0;

// html elements
// main menu
let html = document.getElementById("html");
let css = document.getElementById("css");
let javascript = document.getElementById("javascript");
// "article" element where content is displayed
let contentRoot = document.getElementById("contents");


// +++++++++++ application code ++++++++++
// fetch json with content information
(async () => {
    let resultA = await fetch("webeng_info.json");
    let dataA = await resultA.text();
    webKnowledge = JSON.parse(dataA);
    html_content = webKnowledge['html'];
    css_content = webKnowledge['css'];
    js_content = webKnowledge['javascript'];
})();

// main menu
html.addEventListener("click", function () { manageTopContent("html")});
css.addEventListener("click", function () { manageTopContent("css")});
javascript.addEventListener("click", function () {manageTopContent("javascript")});

// manage top menu and create submenu depending on which top menu option is selected
function manageTopContent(subject){
    activeTopic = subject;
    if(activeTopic == "html"){
        createSubTopics(html_content);
    }
    else if(activeTopic == "css"){
        createSubTopics(css_content);
    }
    else if (activeTopic == "javascript"){
        createSubTopics(js_content);
    }
    else {
        // other
    }
    // everytime a new top menu option is selected, delete old content from article
    contentRoot.innerText = "";
}

// depending on which top menu item is selected, create the sub menu options
// and name them like the level-2 entries in json for this topic
function createSubTopics(subject){
    // how many sub menu options are needed (default 0)
    let countNecessarySubMenuEntries = 0;
    // remove all old sub menu options (that were needed for a different selected top menu option)
    removeSubMenuEntries(currentNumberOfSubMenuOptions);
    // read new sub menu options from json
    for (let i = 0; i < Object.keys(subject).length; i++) {
        let subMenuItemName = Object.keys(subject)[i];
        createSubMenuOption(i, subMenuItemName);
        countNecessarySubMenuEntries++;
    }
    currentNumberOfSubMenuOptions = countNecessarySubMenuEntries;
}

// create a sub menu item of this form (example sub menu item with number 0):
// <div class="stylized_left_side_links" id="subMenuOption0">
//      <a class="links">
//          <h1 id="sub0New">headings</h1>
//      </a>
// </div>
function createSubMenuOption(number, subMenuItemName){
    let sideleftRoot = document.getElementById("sideleft");
    let subMenuOptionElementId = "subMenuOption" + number;
    window["sub" + number + "New"] = document.createElement("div");
    window["sub" + number + "New"].className = "stylized_left_side_links";
    window["sub" + number + "New"].id = subMenuOptionElementId;
    window["sub" + number + "LinkNew"] = document.createElement("a");
    window["sub" + number + "LinkNew"].className = "links";
    window["sub" + number + "H1New"] = document.createElement("h1");
    let textElementId = "sub" + number + "New";
    window["sub" + number + "H1New"].id = textElementId;
    window["sub" + number + "ContentNew"] = document.createTextNode(subMenuItemName);
    window["sub" + number + "ContentNewNew"] = subMenuItemName;
    sideleftRoot.appendChild(window["sub" + number + "New"]);
    window["sub" + number + "New"].appendChild(window["sub" + number + "LinkNew"]);
    window["sub" + number + "LinkNew"].appendChild(window["sub" + number + "H1New"]);
    window["sub" + number + "H1New"].appendChild(window["sub" + number + "ContentNew"]);
    let newSubMenuOption = document.getElementById(textElementId);

    // add event listener for this submenu item
    newSubMenuOption.addEventListener("click", function(){
        // clear old content from article
        contentRoot.innerText = "";
        // depending on which sub menu item is clicked, fill article up with new content from json
        fillContents(activeTopic, window["sub" + number + "ContentNewNew"]);
    });
}

// fill up content depending on which subtopic is selected
function fillContents(activeContent, subTopic){
    Object.entries(webKnowledge[activeContent][subTopic]).forEach((key, value) => {
        // json "content"
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
        // json "references" (is array and needs special treatment)
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

// remove the old sub menu entries when a new top menu item is selected
function removeSubMenuEntries(entriesToBeRemoved) {
    // if there are no sub menu item yet, none need to removed
    if (!currentNumberOfSubMenuOptions == 0) {
        // root html element for all sub menu items
        let subMenu = document.getElementById("sideleft");
        // for all entries
        for (let i = 0; i < entriesToBeRemoved; ++i) {
            let subMenuEntry = document.getElementById("subMenuOption" + (i));
            subMenu.removeChild(subMenuEntry);
        }
    }
}
