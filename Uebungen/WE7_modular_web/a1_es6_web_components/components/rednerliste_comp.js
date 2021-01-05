customElements.define('speakers-list-component', class extends HTMLElement {
    constructor() {
        super();
        this._countMeasureTimeButton = 0;
        this._time = formatDate(0,0,0);
        this._hours = 0;
        this._minutes = 0;
        this._countedSeconds = 0;
        this._seconds = countedSeconds;
        this._unit = 1;
        this._speakingTime = "";
        this._speakingStatus = false;

        this.innerHTML = "<h1>Rednerliste</h1>\n" +
            "<form action=\"rednerEintragen\">\n" +
            "    <label for=\"enterNewSpeakerTextInput\">Neuer Redner: </label>\n" +
            "    <input type=\"text\" id=\"enterNewSpeakerTextInput\">\n" +
            "    <input id=\"enterSpeakerButton\" type=\"button\" value=\"Hinzufügen\">\n" +
            "</form>\n" +
            "\n" +
            "<ul id=\"rednerliste\">\n" +
            "</ul>";

    }
    connectedCallback(){
        let rednerliste = document.getElementById("rednerliste");
        let addSpeakerButton = document.getElementById("enterSpeakerButton");
        addSpeakerButton.addEventListener('click', function () {

            // get speaker
            let input = document.getElementById("enterNewSpeakerTextInput")
            let speaker = input.value;

            // create new list element
            let newListItem = document.createElement("li");
            newListItem.innerHTML = speaker;
            rednerliste.appendChild(newListItem);

            // add button to list element
            let measureTimeButton = document.createElement("button");
            measureTimeButton.setAttribute("id", "measureTimeButton_" + this._countMeasureTimeButton);
            this._countMeasureTimeButton += 1;
            let buttonText = document.createTextNode("Stop!");
            measureTimeButton.appendChild(buttonText);
            newListItem.appendChild(measureTimeButton);

            this._speakingTime = setInterval(myTimer, 1000);

            newListItem.innerHTML = speaker + " " + this._time;
            newListItem.appendChild(measureTimeButton);

            this._speakingStatus = true;

        })
    }
    attributeChangedCallback(){

    }
    myTimer(){
        this._countedSeconds = countedSeconds + unit;
        this._seconds, this._minutes, this._hours = calcDateTime(countedSeconds);
        this._time = formatDate(seconds, minutes, hours)
        newListItem.innerHTML = speaker + " " + time;
        newListItem.appendChild(measureTimeButton);
    }

    calcDateTime(input){
        console.log(input);
        this._seconds = input % 60;
        this._minutes = Math.floor(input/60) % 60;
        this._hours = Math.floor(input/3600) % 12;
        console.log("after sec calc timestamp:" + hours + ":" + minutes + ":" + seconds);
        return seconds, minutes, hours;
    }

    formatDate(seconds, minutes, hours){
        this._seconds = (seconds > 9) ? ":" + seconds : ":0" + seconds;
        this._minutes = (minutes > 9) ? ":" + minutes : ":0" + minutes;
        this._hours = (hours > 9) ? hours : "0" + hours;
        console.log("after format calc timestamp:" + this._hours + this._minutes + this._seconds);
        return this._hours + this._minutes + this._seconds;
    }
    disconnectedCallback(){
        this.removeEventListener('click');
    }
});