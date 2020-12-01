let rednerliste = document.getElementById("rednerliste");
let countMeasureTimeButton = 0;
let speakingStatus = false;

document.getElementById("enterSpeakerButton").onclick = function(){
    let newListItem = document.createElement("li");
    let input = document.getElementById("enterNewSpeakerTextInput")
    let speaker = input.value;
    rednerliste.appendChild(newListItem);
    input.value = "";

    let measureTimeButton = document.createElement("button");
    measureTimeButton.setAttribute("id", "measureTimeButton_" + countMeasureTimeButton);
    countMeasureTimeButton += 1;
    let buttonText = document.createTextNode("Stop!");
    measureTimeButton.appendChild(buttonText);
    newListItem.appendChild(measureTimeButton);

    speakingStatus = true;

    measureTimeButton.onclick = function(){
        if(speakingStatus === true) {
            updateButtonName("Start!")
            speakingStatus = false;
            clearInterval(speakingTime);
            return;
        }
        updateButtonName("Stop!");
        speakingTime = setInterval(myTimer, 1000);
        speakingStatus = true;
        return;
    }

    function updateButtonName(name){
        measureTimeButton.removeChild(buttonText);
        buttonText = document.createTextNode(name);
        measureTimeButton.appendChild(buttonText);
    }

    hours = 0;
    minutes = 0;
    countedSeconds = 0;
    seconds = countedSeconds;

    time = formatDate(0,0,0);

    newListItem.innerHTML = speaker + " " + time;
    newListItem.appendChild(measureTimeButton);

    unit = 1;

    let speakingTime = setInterval(myTimer, 1000);

    function myTimer(){
        countedSeconds = countedSeconds + unit;
        seconds, minutes, hours = calcDateTime(countedSeconds);
        time = formatDate(seconds, minutes, hours)
        newListItem.innerHTML = speaker + " " + time;
        newListItem.appendChild(measureTimeButton);
    }

    function calcDateTime(input){
        console.log(input);
        seconds = input % 60;
        minutes = Math.floor(input/60) % 60;
        hours = Math.floor(input/3600) % 12;
        console.log("after sec calc timestamp:" + hours + ":" + minutes + ":" + seconds);
        return seconds, minutes, hours;
    }

    function formatDate(seconds, minutes, hours){
        seconds = (seconds > 9) ? ":" + seconds : ":0" + seconds;
        minutes = (minutes > 9) ? ":" + minutes : ":0" + minutes;
        hours = (hours > 9) ? hours : "0" + hours;
        console.log("after format calc timestamp:" + hours + minutes + seconds);
        return hours + minutes + seconds;
    }
}


