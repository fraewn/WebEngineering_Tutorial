document.getElementById("enterItemButton").onclick = function(){
    let einkaufsliste = document.getElementById("einkaufsliste");
    let newListItem = document.createElement("li");
    let input = document.getElementById("enterNewItemTextInput")
    let item = input.value;
    newListItem.innerHTML = item;
    einkaufsliste.appendChild(newListItem);
    addDeleteButton(newListItem);
    input.value = "";
}

let countDeleteButton = 0;
addDeleteButton = function (newListItem){
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "delBut" + countDeleteButton);
    countDeleteButton += 1;
    let buttonText = document.createTextNode("delete");
    deleteButton.appendChild(buttonText);
    newListItem.appendChild(deleteButton);
    deleteButton.onclick = function(){
        einkaufsliste.removeChild(newListItem);
    }
}