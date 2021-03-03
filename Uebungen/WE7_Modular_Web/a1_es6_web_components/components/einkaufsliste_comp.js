customElements.define('grocery-list-component', class extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = "<h1>Einkaufsliste</h1>\n" +
            "<form action=\"einkaufen\">\n" +
            "    <label for=\"enterNewItemTextInput\">Enter a new item: </label>\n" +
            "    <input type=\"text\" id=\"enterNewItemTextInput\">\n" +
            "<input id=\"enterItemButton\" type=\"button\" value=\"add Item\">\n" +
            "</form>\n" +
            "\n" +
            "<ul id=\"einkaufsliste\">\n" +
            "</ul>"
    }
    connectedCallback(){
        let button = document.getElementById("enterItemButton");
        button.addEventListener('click', function () {
            let input = document.getElementById("enterNewItemTextInput");
            let item = input.value;
            let newListItem = document.createElement("li");
            newListItem.innerHTML = item;
            let einkaufsliste = document.getElementById("einkaufsliste");
            einkaufsliste.appendChild(newListItem);
        })
    }
    disconnectedCallback(){
        this.removeEventListener('click');
    }
});