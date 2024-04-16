const api_URL = "https://universalis.app/api";

let items = [];

const maps = {
    6688: {
        name: "Leather",
        location: "(Quarrying @ Bluefog, Northern Thanlan: 21.7, 27.9)"
    },
    6689: {
        name: "Goatskin",
        location: "(Mining @ Camp Bronze Lank, Upper La Noscea: 30.0, 25.2)"
    },
    6690: {
        name: "Toadskin",
        location: "(Mining @ Camp Bluefog, Northern Thanlan: 22.8, 24.3)"
    },
    6691: {
        name: "Boarskin",
        location: "(Mining @ Camp Bluefog, Northern Thanlan: 22.8, 24.3)"
    },
    6692: {
        name: "Peisteskin",
        location: "(Mining @ Camp Bluefog, Northern Thanlan: 22.8, 24.3)"
    },
    12241: {
        name: "Archaeoskin",
        location: "(Mining @ Tailfeather, Dravanian Forelands: 30.515.3)"
    },
    12242: {
        name: "Wyvernskin",
        location: "(Mining @ Anyx Trine, Dravanian Forelands: 18.8, 28.4)"
    },
    12243: {
        name: "Dragonskin",
        location: "(Mining @ Anyx Trine, Dravanian Forelands: 18.8, 28.4)"
    },
    17835: {
        name: "Gaganaskin",
        location: "(Mining @ Porta Praetoria, The Lochs: 11.2, 16.8)"
    },
    17836: {
        name: "Gazelleskin",
        location: "(Mining @ Porta Praetoria, The Lochs: 11.2, 16.8)"
    },
    26744: {
        name: "Gliderskin",
        location: "(Mining @ Fort Jobb, Lakeland: 35.4, 14.6)"
    },
    26745: {
        name: "Zonureskin",
        location: "(Mining @ Fort Jobb, Lakeland: 35.4, 14.6)"
    },
    36611: {
        name: "Saigaskin",
        location: "(Harvesting @ Reah Tahra, Ultima Thule: 14.0, 28.0)"
    },
    36612: {
        name: "Kumbhiraskin",
        location: "(Harvesting @ Reah Tahra, Ultima Thule: 14.0, 28.0)"
    },
    39591: {
        name: "Ophiotauroskin",
        location: "(Quarrying @ Poieten Oikos , Elips: 12.0, 18.5)"
    }
};
const whiteCrafterScrips = {
    8155: {
        name: "Mastercraft Demimateria",
        cost: 800
    },
    8150: {
        name: "Fieldcraft Demimateria III",
        cost: 200
    },
    23181: {
        name: "Kingcraft Demimateria",
        cost: 25
    },
    28718: {
        name: "Sublime Solution",
        cost: 125
    },
    31320: {
        name: "Slithersand",
        cost: 250
    },
    39595: {
        name: "Gripgel",
        cost: 500
    },
    5702: {
        name: "Craftsman's Competence Materia IV",
        cost: 25
    },
    5703: {
        name: "Craftsman's Competence Materia V",
        cost: 200
    },
    18025: {
        name: "Craftsman's Competence Materia VI",
        cost: 200
    },
    25194: {
        name: "Craftsman's Competence Materia VII",
        cost: 200
    },
    26735: {
        name: "Craftsman's Competence Materia VIII",
        cost: 250
    },
    33925: {
        name: "Craftsman's Competence Materia IX",
        cost: 250
    },
    5707: {
        name: "Craftsman's Cunning Materia IV",
        cost: 25
    },
    5712: {
        name: "Craftsman's Command Materia IV",
        cost: 25
    },
    5708: {
        name: "Craftsman's Cunning Materia V",
        cost: 200
    },
    5713: {
        name: "Craftsman's Command Materia V",
        cost: 200
    },
    18026: {
        name: "Craftsman's Cunning Materia VI",
        cost: 200
    },
    18027: {
        name: "Craftsman's Command Materia VI",
        cost: 200
    },
    25195: {
        name: "Craftsman's Cunning Materia VII",
        cost: 200
    },
    25196: {
        name: "Craftsman's Command Materia VII",
        cost: 200
    },
    26736: {
        name: "Craftsman's Cunning Materia VIII",
        cost: 250
    },
    26737: {
        name: "Craftsman's Command Materia VIII",
        cost: 250
    },
    33926: {
        name: "Craftsman's Cunning Materia IX",
        cost: 250
    },
    33927: {
        name: "Craftsman's Command Materia IX",
        cost: 250
    }
};
const purpleCrafterScrips = {
    37284: {
        name: 'Immutable Solution',
        cost: 125
    },
    38273: {
        name: 'Prime Loaghtan Rump',
        cost: 15
    },
    38263: {
        name: 'Sunset Carrot',
        cost: 15
    },
    38267: {
        name: 'Piennolo Tomato',
        cost: 15
    },
    38271: {
        name: 'Thundermelon',
        cost: 15
    },
    38275: {
        name: 'King Urchin',
        cost: 15
    },
    36099: {
        name: 'Butterbeef',
        cost: 10
    },
    36100: {
        name: 'Giant Pumpkin',
        cost: 10
    },
    36101: {
        name: 'White Peach',
        cost: 10
    },
    36102: {
        name: 'Subtle Cinnamon Sticks',
        cost: 10
    },
    36103: {
        name: 'Glass Scallop',
        cost: 10
    },
    33939: {
        name: "Craftsman's Cunning Materia X",
        cost: 500
    },
    33940: {
        name: "Craftsman's Command Materia X",
        cost: 500
    },
    33938: {
        name: "Craftsman's Competence Materia X",
        cost: 500
    }
};
const whiteGathererScrips = {
    5687: {
        name: "Gatherer's Guerdon Materia IV",
        cost: 25
    },
    5688: {
        name: "Gatherer's Guerdon Materia V",
        cost: 200
    },
    5692: {
        name: "Gatherer's Guile Materia IV",
        cost: 25
    },
    5693: {
        name: "Gatherer's Guile Materia V",
        cost: 200
    },
    5697: {
        name: "Gatherer's Grasp Materia IV",
        cost: 25
    },
    5698: {
        name: "Gatherer's Grasp Materia V",
        cost: 200
    },
    12712: {
        name: "Giant Crane Fly",
        cost: 1
    },
    18022: {
        name: "Gatherer's Guerdon Materia VI",
        cost: 200
    },
    18023: {
        name: "Gatherer's Guile Materia VI",
        cost: 200
    },
    18024: {
        name: "Gatherer's Grasp Materia VI",
        cost: 200
    },
    20616: {
        name: "Silkworm",
        cost: 1
    },
    20618: {
        name: "Bream Lure",
        cost: 15
    },
    20619: {
        name: "Suspending Minnow",
        cost: 15
    },
    12711: {
        name: "Brute Leech",
        cost: 1
    },
    20675: {
        name: "Stonefly Larva",
        cost: 1
    },
    20676: {
        name: "Blue Bobbit",
        cost: 1
    },
    21282: {
        name: "Songs of Salt and Suffering Orchestrion Roll",
        cost: 200
    },
    23898: {
        name: "Garden Gravel",
        cost: 75
    },
    24516: {
        name: "Fruit Stall",
        cost: 50
    },
    24517: {
        name: "Vegetable Stall",
        cost: 50
    },
    24519: {
        name: "Mineral Display",
        cost: 50
    },
    25063: {
        name: "Hope Forgotten Orchestrion Roll",
        cost: 200
    },
    25064: {
        name: "The Stone Remembers Orchestrion Roll",
        cost: 200
    },
    25065: {
        name: "Old Wounds Orchestrion Roll",
        cost: 200
    },
    25191: {
        name: "Gatherer's Guerdon Materia VII",
        cost: 200
    },
    25192: {
        name: "Gatherer's Guile Materia VII",
        cost: 200
    },
    25193: {
        name: "Gatherer's Grasp Materia VII",
        cost: 200
    },
    26732: {
        name: "Gatherer's Guerdon Materia VIII",
        cost: 250
    },
    26733: {
        name: "Gatherer's Guile Materia VIII",
        cost: 250
    },
    26734: {
        name: "Gatherer's Grasp Materia VIII",
        cost: 250
    },
    27298: {
        name: "Carpet of Flowers",
        cost: 75
    },
    27316: {
        name: "Firebloom",
        cost: 50
    },
    27317: {
        name: "Seastone Brazier",
        cost: 50
    },
    27588: {
        name: "Short Bill Minnow",
        cost: 30
    },
    27586: {
        name: "Jerked Ovim",
        cost: 3
    },
    27587: {
        name: "Robber Ball",
        cost: 3
    },
    27589: {
        name: "Baitbugs",
        cost: 5
    },
    27590: {
        name: "Squid Strip",
        cost: 5
    },
    28931: {
        name: "Small Angler's Canvas",
        cost: 150
    },
    28932: {
        name: "Medium Angler's Canvas",
        cost: 225
    },
    28933: {
        name: "Large Angler's Canvas",
        cost: 375
    },
    28934: {
        name: "Extra Large Angler's Canvas",
        cost: 600
    },
    32220: {
        name: "Major-General Cushion",
        cost: 200
    },
    33849: {
        name: "Freedom Orchestrion Roll",
        cost: 200
    },
    33922: {
        name: "Gatherer's Guerdon Materia IX",
        cost: 250
    },
    33923: {
        name: "Gatherer's Guile Materia IX",
        cost: 250
    },
    33924: {
        name: "Gatherer's Grasp Materia IX",
        cost: 250
    },
    36590: {
        name: "Sky Spoon Lure",
        cost: 50
    },
    36595: {
        name: "Chimera Worm",
        cost: 5
    },
    36596: {
        name: "Panic Jig",
        cost: 50
    }
}
const purpleGathererScrips = {
    36223: {
        name: "Moonlight Aethersand",
        cost: 100
    },
    36224: {
        name: "Endstone Aethersand",
        cost: 200
    },
    36225: {
        name: "Endwood Aethersand",
        cost: 200
    },
    36226: {
        name: "Endtide Aethersand",
        cost: 200
    },
    36591: {
        name: "Mayfly",
        cost: 5
    },
    36593: {
        name: "Mackerel Strip",
        cost: 5
    },
    36597: {
        name: "Stardust",
        cost: 5
    },
    38936: {
        name: "Earthbreak Aethersand",
        cost: 300
    },
    33935: {
        name: "Gatherer's Guerdon Materia X",
        cost: 500
    },
    33936: {
        name: "Gatherer's Guile Materia X",
        cost: 500
    },
    33937: {
        name: "Gatherer's Grasp Materia X",
        cost: 500
    }
}
const astronomyTomestones = {
    36218: {
        name: "Alchemical Charcoal",
        cost: 10
    },
    36220: {
        name: "Thavnairian Horsetail",
        cost: 10
    },
    36221: {
        name: "Thavnairian Thread",
        cost: 10
    },
    36222: {
        name: "Amynodon Hide",
        cost: 10
    },
    37823: {
        name: "Palaka Mistletoe",
        cost: 20
    },
    37825: {
        name: "Thavnairian Almandine",
        cost: 10
    },
    37826: {
        name: "Hannish Varnish",
        cost: 20
    },
    37827: {
        name: "Titanoboa Skin",
        cost: 20
    },
    37828: {
        name: "Vanadinite",
        cost: 20
    },
    37829: {
        name: "Palebloom Kudzu Cloth",
        cost: 20
    }
};
const islandCowries = {
    7621: {
        name: "Glamour Dispeller",
        cost: 150
    },
    21800: {
        name: "Glamour Prism",
        cost: 150
    },
    33925: {
        name: "Craftsman's Competence Materia IX",
        cost: 1750
    },
    33926: {
        name: "Craftsman's Cunning Materia IX",
        cost: 1750
    },
    33927: {
        name: "Craftsman's Command Materia IX",
        cost: 1750
    },
    33939: {
        name: "Craftsman's Cunning Materia X",
        cost: 3500
    },
    33940: {
        name: "Craftsman's Command Materia X",
        cst: 3500
    },
    33938: {
        name: "Craftsman's Competence Materia X",
        cost: 3500
    },
    33922: {
        name: "Gatherer's Guerdon Materia IX",
        cost: 1750
    },
    33923: {
        name: "Gatherer's Guile Materia IX",
        cost: 1750
    },
    33924: {
        name: "Gatherer's Grasp Materia IX",
        cost: 1750
    },
    33935: {
        name: "Gatherer's Guerdon Materia X",
        cost: 3500
    },
    33936: {
        name: "Gatherer's Guile Materia X",
        cost: 3500
    },
    33937: {
        name: "Gatherer's Grasp Materia X",
        cost: 3500
    },
    38589: {
        name: "Coconut Water",
        cost: 2500
    },
    38610: {
        name: "Farmer's Straw Bed",
        cost: 2500
    },
    38628: {
        name: "Chocobo Stable Essentials",
        cost: 2500
    }
};
const seafarerCowries = {
    30116: {
        name: "Ruby Red Dye",
        cost: 500
    },
    30117: {
        name: "Cherry Pink Dye",
        cost: 500
    },
    30118: {
        name: "Canary Yellow Dye",
        cost: 500
    },
    30119: {
        name: "Vanilla Yellow Dye",
        cost: 500
    },
    30120: {
        name: "Dragoon Blue Dye",
        cost: 500
    },
    30121: {
        name: "Turquoise Blue Dye",
        cost: 500
    },
    30122: {
        name: "Gunmetal Black Dye",
        cost: 2500
    },
    30124: {
        name: "Peal White Dye",
        cost: 2500
    },
    30123: {
        name: "Metallic Brass Dye",
        cost: 2500
    },
    33925: {
        name: "Craftsman's Competence Materia IX",
        cost: 750
    },
    33926: {
        name: "Craftsman's Cunning Materia IX",
        cost: 750
    },
    33927: {
        name: "Craftsman's Command Materia IX",
        cost: 750
    },
    33939: {
        name: "Craftsman's Cunning Materia X",
        cost: 1500
    },
    33940: {
        name: "Craftsman's Command Materia X",
        cst: 1500
    },
    33938: {
        name: "Craftsman's Competence Materia X",
        cost: 1500
    },
    33922: {
        name: "Gatherer's Guerdon Materia IX",
        cost: 750
    },
    33923: {
        name: "Gatherer's Guile Materia IX",
        cost: 750
    },
    33924: {
        name: "Gatherer's Grasp Materia IX",
        cost: 750
    },
    33935: {
        name: "Gatherer's Guerdon Materia X",
        cost: 1500
    },
    33936: {
        name: "Gatherer's Guile Materia X",
        cost: 1500
    },
    33937: {
        name: "Gatherer's Grasp Materia X",
        cost: 1500
    },
    38589: {
        name: "Coconut Water",
        cost: 1000
    },
    38610: {
        name: "Farmer's Straw Bed",
        cost: 1000
    },
    38628: {
        name: "Chocobo Stable Essentials",
        cost: 1000
    },
    39419: {
        name: "Low Garden Hedge",
        cost: 1000
    },
    39425: {
        name: "Lemonade Stand",
        cost: 1000
    },
    39427: {
        name: "Stone Garden Wall",
        cost: 1000
    },
    39428: {
        name: "Colorful Flower Patch",
        cost: 1000
    }
};
const gcSeals = {
    4567: {
        name: "Smelling Salts",
        cost: 1710
    },
    4568: {
        name: "Spine Drops",
        cost: 1010
    },
    5501: {
        name: "Potash",
        cost: 200
    },
    5530: {
        name: "Coke",
        cost: 200
    },
    5531: {
        name: "Animal Fat",
        cost: 200
    },
    6141: {
        name: "Cordial",
        cost: 500
    },
    6153: {
        name: "Filtered Water",
        cost: 20
    },
    6154: {
        name: "Voidsent Blood",
        cost: 20
    },
    6600: {
        name: "Miniature Aetheryte",
        cost: 14470
    },
    6662: {
        name: "Eorzean Map",
        cost: 1100
    },
    7596: {
        name: "Petrified Log",
        cost: 1500
    },
    7597: {
        name: "Scheelite",
        cost: 1500
    },
    7598: {
        name: "Raziqsand",
        cost: 1500
    },
    7600: {
        name: "Cashmere Fleece",
        cost: 1500
    },
    7601: {
        name: "Emery",
        cost: 1500
    },
    7621: {
        name: "Glamour Dispeller",
        cost: 200
    },
    7806: {
        name: "Tawny Latex",
        cost: 450
    },
    9356: {
        name: "Quick-hardening Sealant",
        cost: 2300
    },
    9357: {
        name: "Xelphatol Spring Water",
        cost: 2500
    },
    9367: {
        name: "Arachne Web",
        cost: 2250
    },
    9368: {
        name: "Wootz Ore",
        cost: 2250
    },
    9370: {
        name: "Dubbin",
        cost: 2250
    },
    10112: {
        name: "Urushi",
        cost: 600
    },
    13589: {
        name: "Adamantite Francesca",
        cost: 5000
    },
    13591: {
        name: "Titanium Alloy Mirror",
        cost: 5000
    },
    13593: {
        name: "Dispelling Arrow",
        cost: 5000
    },
    13595: {
        name: "Kingcake",
        cost: 5000
    },
    15649: {
        name: "Glass Fiber",
        cost: 7000
    },
    15855: {
        name: "Althyk Lavender Seeds",
        cost: 500
    },
    15856: {
        name: "Voidrake Seeds",
        cost: 500
    },
    21800: {
        name: "Glamour Prism",
        cost: 200
    }
};
const shbFateGems = {
    6141: {
        name: "Cordial",
        cost: 4
    },
    7621: {
        name: "Glamour Dispeller",
        cost: 6
    },
    21800: {
        name: "Glamour Prism",
        cost: 6
    },
    27276: {
        name: "Butterfly Specimen",
        cost: 100
    },
    27288: {
        name: "Crystarium Wall Chronometer",
        cost: 100
    },
    27294: {
        name: "Decadent Fruit Platter",
        cost: 100
    },
    27313: {
        name: "Stuffed Clionid",
        cost: 100
    },
    27732: {
        name: "Smilodon Skin",
        cost: 2
    },
    27733: {
        name: "Green Glider Skin",
        cost: 2
    },
    27734: {
        name: "Atrociraptor Skin",
        cost: 2
    },
    27735: {
        name: "Zonure Skin",
        cost: 2
    },
    27736: {
        name: "Sea Swallow Skin",
        cost: 2
    },
    27756: {
        name: "Ovim Fleece",
        cost: 2
    },
    27763: {
        name: "Hoptrap Leaf",
        cost: 1
    },
    27764: {
        name: "Silkmoth Scales",
        cost: 1
    },
    27774: {
        name: "Vampire Vine Sap",
        cost: 1
    },
    27797: {
        name: "Lorikeet Down",
        cost: 2
    },
    27798: {
        name: "Island Wolf Fang",
        cost: 1
    },
    27799: {
        name: "Cubus Flesh",
        cost: 2
    },
    27800: {
        name: "Hydrozoan Umbrella",
        cost: 2
    },
    27850: {
        name: "Rail Tenderloin",
        cost: 1
    },
    27851: {
        name: "Lorikeet Egg",
        cost: 1
    },
    27852: {
        name: "Ovim Meat",
        cost: 1
    },
    27893: {
        name: "The Dark Which Illuminates the World Orchestrion Roll",
        cost: 350
    },
    27894: {
        name: "Indulgence Orchestrion Roll",
        cost: 350
    },
    27895: {
        name: "The Source Orchestrion Roll",
        cost: 350
    },
    27896: {
        name: "A World Divided Orchestrion Roll",
        cost: 350
    },
    27897: {
        name: "Sands of Amber Orchestrion Roll",
        cost: 350
    },
    27898: {
        name: "Fierce and Free Orchestrion Roll",
        cost: 350
    },
    27899: {
        name: "Civilizations Orchestrion Roll",
        cost: 350
    },
    27900: {
        name: "Full Fathom Five Orchestrion Roll",
        cost: 350
    },
    28146: {
        name: "Allagan Tomestone of Frivolity",
        cost: 100
    },
    28635: {
        name: "Greatwood Planter",
        cost: 100
    },
    28878: {
        name: "Knowledge Never Sleeps Orchestrion Roll",
        cost: 350
    },
    28879: {
        name: "Masquerade Orchestrion Roll",
        cost: 350
    },
    28880: {
        name: "Unchanging, Everchanging Orchestrion Roll",
        cost: 350
    },
    28881: {
        name: "The Quick Way Orchestrion Roll",
        cost: 350
    },
    28882: {
        name: "Sands of Blood Orchestrion Roll",
        cost: 350
    },
    28883: {
        name: "The Faerie Ring Orchestrion Roll",
        cost: 350
    },
    28884: {
        name: "A Hopeless Race Orchestrion Roll",
        cost: 350
    },
    28885: {
        name: "Neath Dark Waters Orchestrion Roll",
        cost: 350
    },
    28967: {
        name: "Wine Rack",
        cost: 25
    },
    28968: {
        name: "Rope Stanchion",
        cost: 25
    },
    28969: {
        name: "Cardpaper Box",
        cost: 10
    },
    28972: {
        name: "Amaurot Wall Lamp",
        cost: 50
    },
    28988: {
        name: "Milk Carton",
        cost: 10
    },
    28999: {
        name: "Lakeland Elf Tree",
        cost: 30
    },
    29000: {
        name: "Lakeland Flower Garden",
        cost: 10
    },
    30263: {
        name: "Bedlam's Brink Orchestrion Roll",
        cost: 350
    },
    30264: {
        name: "A Reason to Live Orchestrion Roll",
        cost: 350
    },
    30265: {
        name: "No Greater Sorrow Orchestrion Roll",
        cost: 350
    },
    32232: {
        name: "Elemental Wheel",
        cost: 100
    },
    33269: {
        name: "Mushroom Lamp",
        cost: 100
    },
    33274: {
        name: "Akadaemia Prospectuses",
        cost: 50
    }
}

let hoursSinceUpdateWarning = 4;
let hoursSinceSoldWarning = 24;

let homeServer;
let server;
let itemCat;

let homeServerBtn;
let serverSelect;
let itemsSelect;
let results;

let currentTime = Date.now();

let request = new XMLHttpRequest();
request.onload = dataGot;
request.onerror = dataError;

window.onload = (e) => {
    homeServer = localStorage.getItem("homeServer") || 0;
    server = localStorage.getItem("server") || "Adamantoise";
    itemCat = localStorage.getItem("itemCat") || "maps";

    homeServerBtn = document.querySelector("#home-server-btn");
    homeServerBtn.onclick = selectHomeServer;

    serverSelect = document.querySelector("#server-select");
    serverSelect.onchange = serverChange;
    serverSelect.value = server;

    itemsSelect = document.querySelector("#items-select");
    itemsSelect.onchange = itemsChange;
    itemsSelect.value = itemCat;

    results = document.querySelector("#results");

    downloadData(constructURL());
}

function constructURL() {
    let itemIDs;
    switch (itemCat) {
        case "maps": itemIDs = Object.keys(maps).join(','); break;
        case "wCScrips": itemIDs = Object.keys(whiteCrafterScrips).join(','); break;
        case "pCScrips": itemIDs = Object.keys(purpleCrafterScrips).join(','); break;
        case "wGScrips": itemIDs = Object.keys(whiteGathererScrips).join(','); break;
        case "pGScrips": itemIDs = Object.keys(purpleGathererScrips).join(','); break;
        case "shbFateGems": itemIDs = Object.keys(shbFateGems).join(','); break;
        case "astronomies": itemIDs = Object.keys(astronomyTomestones).join(','); break;
        case "gcseals": itemIDs = Object.keys(gcSeals).join(','); break;
        case "sCowries": itemIDs = Object.keys(seafarerCowries).join(','); break;
        case "iCowries": itemIDs = Object.keys(islandCowries).join(','); break;
        default: console.error("Invalid item category!"); break;

    }
    return `${api_URL}/${server}/${itemIDs}`;
}

function serverChange() {
    server = serverSelect.value;
    results.innerHTML = "";
    downloadData(constructURL());
    localStorage.setItem("server", server);
}

function itemsChange() {
    itemCat = itemsSelect.value;
    results.innerHTML = "";
    downloadData(constructURL());
    localStorage.setItem("itemCat", itemCat);
}

function downloadData(url) {
    console.log(url);
    request.open("GET", url);
    request.send();
}

function dataGot(e) {
    let response = JSON.parse(e.target.responseText);

    //fill items array with response results
    response.items.forEach(item => items.push(item));

    //switch HTML adding based on item category
    switch (itemCat) {
        case "maps":
            addHTML(
                "Hover over a map to see a quick gather location",
                (a, b) => b.minPrice - a.minPrice,
                (item) => `${item.minPrice} - ${maps[item.itemID].name}`,
                (item) => `${maps[item.itemID].location}`
            );
            break;
        case "wCScrips":
            addHTML(
                "Hover over an item to see the lowest marketboard price and scrip cost",
                (a, b) => (b.minPrice / whiteCrafterScrips[b.itemID].cost) - (a.minPrice / whiteCrafterScrips[a.itemID].cost),
                (item) => `${(item.minPrice / whiteCrafterScrips[item.itemID].cost).toFixed(3)}/scrip - ` + whiteCrafterScrips[item.itemID].name,
                (item) => `${item.minPrice} gil per ${whiteCrafterScrips[item.itemID].cost} scrips`
            );
            break;
        case "pCScrips":
            addHTML(
                "Hover over an item to see the lowest marketboard price and scrip cost",
                (a, b) => (b.minPrice / purpleCrafterScrips[b.itemID].cost) - (a.minPrice / purpleCrafterScrips[a.itemID].cost),
                (item) => `${(item.minPrice / purpleCrafterScrips[item.itemID].cost).toFixed(3)}/scrip - ` + purpleCrafterScrips[item.itemID].name,
                (item) => `${item.minPrice} gil per ${purpleCrafterScrips[item.itemID].cost} scrips`
            );
            break;
        case "wGScrips":
            addHTML(
                "Hover over an item to see the lowest marketboard price and scrip cost",
                (a, b) => (b.minPrice / whiteGathererScrips[b.itemID].cost) - (a.minPrice / whiteGathererScrips[a.itemID].cost),
                (item) => `${(item.minPrice / whiteGathererScrips[item.itemID].cost).toFixed(3)}/scrip - ` + whiteGathererScrips[item.itemID].name,
                (item) => `${item.minPrice} gil per ${whiteGathererScrips[item.itemID].cost} scrip`
            );
            break;
        case "pGScrips":
            addHTML(
                "Hover over an item to see the lowest marketboard price and scrip cost",
                (a, b) => (b.minPrice / purpleGathererScrips[b.itemID].cost) - (a.minPrice / purpleGathererScrips[a.itemID].cost),
                (item) => `${(item.minPrice / purpleGathererScrips[item.itemID].cost).toFixed(3)}/scrip - ` + purpleGathererScrips[item.itemID].name,
                (item) => `${item.minPrice} gil per ${purpleGathererScrips[item.itemID].cost} scrip`
            );
            break;
        case "shbFateGems":
            addHTML(
                "Hover over an item to see the lowest marketboard price and gemstone cost",
                (a, b) => (b.minPrice / shbFateGems[b.itemID].cost) - (a.minPrice / shbFateGems[a.itemID].cost),
                (item) => `${(item.minPrice / shbFateGems[item.itemID].cost).toFixed(3)}/gemstone - ` + shbFateGems[item.itemID].name,
                (item) => `${item.minPrice} gil per ${shbFateGems[item.itemID].cost} gemstone`
            );
            break;
        case "astronomies":
            addHTML(
                "Hover over an item to see the lowest marketboard price and tomestone cost",
                (a, b) => (b.minPrice / astronomyTomestones[b.itemID].cost) - (a.minPrice / astronomyTomestones[a.itemID].cost),
                (item) => `${(item.minPrice / astronomyTomestones[item.itemID].cost).toFixed(3)}/tomestone - ` + astronomyTomestones[item.itemID].name,
                (item) => `${item.minPrice} gil per ${astronomyTomestones[item.itemID].cost} tomestone`
            );
            break;
        case "gcseals":
            addHTML(
                "Hover over an item to see the lowest marketboard price and seal cost",
                (a, b) => (b.minPrice / gcSeals[b.itemID].cost) - (a.minPrice / gcSeals[a.itemID].cost),
                (item) => `${(item.minPrice / gcSeals[item.itemID].cost).toFixed(3)}/seal - ` + gcSeals[item.itemID].name,
                (item) => `${item.minPrice} gil per ${gcSeals[item.itemID].cost} seal`
            );
            break;
        case "sCowries":
            addHTML(
                "Hover over an item to see the lowest marketboard price and cowrie cost",
                (a, b) => (b.minPrice / seafarerCowries[b.itemID].cost) - (a.minPrice / seafarerCowries[a.itemID].cost),
                (item) => `${(item.minPrice / seafarerCowries[item.itemID].cost).toFixed(3)}/scrip - ` + seafarerCowries[item.itemID].name,
                (item) => `${item.minPrice} gil per ${seafarerCowries[item.itemID].cost} scrip`
            );
            break;
        case "iCowries":
            addHTML(
                "Hover over an item to see the lowest marketboard price and cowrie cost",
                (a, b) => (b.minPrice / islandCowries[b.itemID].cost) - (a.minPrice / islandCowries[a.itemID].cost),
                (item) => `${(item.minPrice / islandCowries[item.itemID].cost).toFixed(3)}/cowrie - ` + islandCowries[item.itemID].name,
                (item) => `${item.minPrice} gil per ${islandCowries[item.itemID].cost} cowrie`
            );
            break;
    }

    //clear out the items array for the next request
    items = [];
}

function dataError(e) {
    console.error("There was an error with the request, please check the api request");
    document.querySelector("#results").innerHTML = "There was an error, please look at the console log."
}

function getTimeSince(time) {
    //time difference in seconds 
    return (currentTime - time) / 1000;
}

function formatTimeSince(timeSince) {
    let result = "";
    let hours = Math.floor(timeSince / 3600);
    if (hours > 0) {
        timeSince -= hours * 3600;
        result += `${hours} hours `;
    }
    let minutes = Math.floor(timeSince / 60);
    if (minutes > 0) {
        timeSince -= minutes * 60;
        result += `${minutes} minutes `;
    }
    if (Math.round(timeSince > 1)) {
        result += `${Math.floor(timeSince)} seconds`
    }
    return result;
}

const makeEntry = (index) => {
    let entry;
    switch (index) {
        case 0:
            entry = document.createElement("h1");
            entry.style.color = "green";
            break;
        case 1:
            entry = document.createElement("h2");
            entry.style.color = "yellow";
            break;
        case 2:
            entry = document.createElement("h3");
            entry.style.color = "orange";
            break;
        default:
            entry = document.createElement("h4");
            entry.style.color = "red";
            break;
    };
    return entry;
}

const addHTML = (desc, sortFunction, innerHTMLFunc, hoverFunc) => {
    results.innerHTML += desc;
    //sort by minPrice descending
    items.sort(sortFunction)

    items.forEach(function (item, index) {
        let entry = makeEntry(index);

        let timeSinceUpdate = getTimeSince(item.lastUploadTime);
        entry.innerHTML = innerHTMLFunc(item);
        entry.title = hoverFunc(item) + `\nlast updated: ${formatTimeSince(timeSinceUpdate)}`;
        results.appendChild(entry);

        addWarningImages(entry, timeSinceUpdate, item);
    });
}

const addWarningImages = (entry, timeSinceUpdate, item) => {
    //if the last update was more than 4 hour agos, put an alert
    if (timeSinceUpdate > (3600 * hoursSinceUpdateWarning)) {
        createWarning(entry, () => "This item's marketboard data has not been updated in 4 hours or longer");
    }
    //if the item has not sold in more than 24 hours
    if (getTimeSince(item.recentHistory[0].timestamp * 1000) / 3600 > hoursSinceSoldWarning) {
        createWarning(entry, () => "This item has not had any purchases in 24 hours or more");
    }
}

const createWarning = (entry, hoverFunc) => {
    let warning = document.createElement("img");
    warning.src = "warning.svg";
    warning.style.height = entry.offsetHeight + "px"
    warning.title = hoverFunc();
    if (entry.childElementCount === 0) {
        warning.style.marginLeft = "0.75em"
    }
    entry.appendChild(warning);
}

const setHomeServer = (server) => {
    let servers = [...document.querySelector("#server-select").children].map(element => element.value);
    if (servers.includes(server)) {
        homeServer = servers.indexOf(server);
        localStorage.setItem("homeServer", homeServer);
    }
    else {
        console.log("not a valid server");
    }
}

const selectHomeServer = (e) => {
    if (e.shiftKey) {
        homeServer = serverSelect.selectedIndex;
        localStorage.setItem("homeServer", homeServer);
        return;
    }
    serverSelect.selectedIndex = homeServer;
    serverChange();
}