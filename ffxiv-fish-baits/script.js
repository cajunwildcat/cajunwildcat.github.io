//TODO: add regex match for text currently on clipboard so you don't paste random shit into the box

let api_URL = "https://xivapi.com/";
let request = new XMLHttpRequest;
request.onload = dataGot;
request.onerror = dataError;
let apiResults = []

let fish;
let bait
let baitIds;
let data;

let submitButton;
let textareaInput;
let resultsDiv;

window.onload = async (e) => {
    submitButton =  document.querySelector("#submit-button");
    textareaInput = document.querySelector("#textarea");
    resultsDiv = document.querySelector("#results");

    let response = await fetch('https://raw.githubusercontent.com/icykoneko/ff14-fish-tracker-app/master/js/app/data.js')
    if (!response.ok) return;
    const rawData = await response.text();
    data = JSON.parse(`\{${rawData.split("\n")[2].trim()}\}`);

    submitButton.onclick = requestBait;
    textareaInput.onfocus = async () => {
        textareaInput.value = "";
        try {
            const text = await navigator.clipboard.readText();
            textareaInput.value = text;
        } catch (err) {}
    }
}

function requestBait(e) {
    let completedfish = document.querySelector("#textarea").value;
    document.querySelector("#results").innerHTML = "";

    //filter fish down to uncaught fish
    fish = Object.values(data).filter((fish) => !completedfish.includes(fish._id));
    //map the fish to their best bait
    bait = [...new Set(fish.flatMap(fish => fish.bestCatchPath))];
    //filter out mooch fish
    bait = bait.filter(bait => !Object.keys(data).map(id => parseInt(id)).includes(bait))
    //reduce baits into a string to use for API request
    baitIds = Array.from(new Set(bait.flat())).reduce((total, bait) => total + bait + ',', '');

    url = api_URL + "item?ids=" + baitIds;
    request.open("GET", url);
    request.send();
    console.log(url);
}

function dataGot(e) {
    let response = JSON.parse(e.target.responseText);

    apiResults = response.Results;
    apiResults.sort((a, b) => b.ID - a.ID);

    addHTML();
}

function dataError(e) {
    //TODO: idk show an error message or something
    //HI CAJUN :D - PICTO
}

function addHTML() {
    apiResults.forEach(function (bait, index) {
        let baitBox = document.createElement('div');
        baitBox.className = "bait";
        let row = document.createElement("h2");
        let icon = document.createElement("img");
        icon.src = api_URL + bait.Icon;
        row.innerHTML = bait.Name;
        baitBox.appendChild(icon);
        baitBox.appendChild(row)
        resultsDiv.appendChild(baitBox);
    })
}