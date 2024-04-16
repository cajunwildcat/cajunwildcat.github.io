let request = new XMLHttpRequest;
let searches = [
    "Cordial",
    "Glamour Dispeller",
    "Glamour Prism",
    "Rail Tenderloin",
    "Island Wolf Fang",
    "The Quick Way Orchestrion Roll",
    "A World Divided Orchestrion Roll",
    "Ovim Meat",
    "Ovim Fleece",
    "Zonure Skin",
    "Sands of Blood Orchestrion Roll",
    "Sands of Amber Orchestrion Roll",
    "Smilodon Skin",
    "Hoptrap Leaf",
    "Silkmoth Scales",
    "Lakeland Elf Tree",
    "Lakeland Flower Garden",
    "Unchanging, Everchanging Orchestrion Roll",
    "The Source Orchestrion Roll",
    "Lorikeet Egg",
    "Lorikeet Down",
    "Green Glider Skin",
    "Mushroom Lamp",
    "Elemental Wheel",
    "The Faerie Ring Orchestrion Roll",
    "A Reason to Live Orchestrion Roll",
    "Butterfly Specimen",
    "Fierce and Free Orchestrion Roll",
    "Atrociraptor Skin",
    "Vampire Vine Sap",
    "Greatwood Planter",
    "A Hopeless Race Orchestrion Roll",
    "Civilizations Orchestrion Roll",
    "Sea Swallow Skin",
    "Cubus Flesh",
    "Hydrozoan Umbrella",
    "Akadaemia Prospectuses",
    "Amaurot Wall Lamp",
    "Neath Dark Waters Orchestrion Roll",
    "Bedlam's Brink Orchestrion Roll",
    "Stuffed Clionid",
    "Full Fathom Five Orchestrion Roll",
    "Allagan Tomestone of Frivolity",
    "Cardpaper Box",
    "Milk Carton",
    "Crystarium Wall Chronometer",
    "The Dark Which Illuminates the World Orchestrion Roll",
    "Knowledge Never Sleeps Orchestrion Roll",
    "Wine Rack",
    "Rope Stanchion",
    "Decadent Fruit Platter",
    "Indulgence Orchestrion Roll",
    "Masquerade Orchestrion Roll",
    "No Greater Sorrow Orchestrion Roll"
]
let hits = {};

const dataGot = (e) => {
    let response = JSON.parse(e.target.responseText);


    const keys = Object.keys(response);
    for (const key in keys) {
        if (response[key]) {
            for (let i = 0; i < searches.length; i++) {
                if (searches[i].toLowerCase() === response[key]["en"].toLowerCase()) {
                    hits[key] = {
                        name: response[key]["en"],
                        cost: 0
                    };
                    //remove the search term from the array
                    searches.splice(i, 1);
                    i--;
                }
            };
        }
    }
    console.log(hits);
    console.log(searches);
}

request.onload = dataGot;
request.open("GET", "./rawData.json");
request.send();