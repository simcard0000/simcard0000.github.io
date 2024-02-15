/* ON LOAD */
let songTitle = "...loading";
let songArtist = "...loading";
let songCover = "...loading";
let songTime = "...loading";

var latestSongCover = document.getElementById("latestSongCover");
var latestSongTitle = document.getElementById("latestSongTitle");
var latestSongArtist = document.getElementById("latestSongArtist");
var latestSongTime = document.getElementById("latestSongTime");

var latestGameCover = document.getElementById("latestGameCover");
var latestGameTitle = document.getElementById("latestGameTitle");
var latestGameWeeks = document.getElementById("latestGameWeeks");
var latestGameAll = document.getElementById("latestGameAll");

var planetarium;

S(document).ready(function () {

    planetarium = S.virtualsky({
        id: 'starmap',
        projection: 'polar',
        longitude: -80.5204,
        latitude: 43.4643,
        fontsize: "15px",
        gradient: false,
        negative: true,
        color: "rgb(232,63,96)",
        keyboard: true,
        constellations: true,
        showstarlabels: true,
        scalestars: 1,
        magnitude: 5,
        cardinalpoints: false,
        live: true
    });

});

function startUp() {
    renderProjectsTable([]);
    getLatestSongInfo();
    getLatestGameInfo();
}

async function getLatestSongInfo() {
    // Getting latest song information:
    const response = await fetch("https://simranthind.me/.netlify/functions/last_fm");
    const response_json = await response.json();
    // Parsing latest song data:
    const latestSong = response_json.recenttracks.track[0];
    try {
        if (latestSong["@attr"].nowplaying === "true") {
            songTime = "now playing"
        }
    } catch (error) {
        songTime = latestSong.date["#text"] + " GMT";
    }
    if (latestSong.name.toLowerCase() === latestSong.album["#text"].toLowerCase()) {
        songTitle = latestSong.name;
    } else {
        songTitle = latestSong.name + " - " + latestSong.album["#text"];
    }
    songArtist = latestSong.artist.name;
    songCover = latestSong.image[3]["#text"];
    // Changing elements on website:
    latestSongCover.src = songCover;
    latestSongCover.alt = songTitle;
    latestSongTitle.innerHTML = "Latest song: <b>" + songTitle + "</b>";
    latestSongArtist.innerHTML = "Artist: <b>" + songArtist + "</b>";
    latestSongTime.innerHTML = "When: <b>" + songTime + "</b>";
}

async function getLatestGameInfo() {
    // Getting latest game information:
    const response = await fetch("https://simranthind.me/.netlify/functions/steam");
    const response_json = await response.json();
    console.log(response_json);
    // Parsing latest game data:
    const latestGame = response_json.response.games[0];
    const gameAppId = latestGame.appid;
    const gameImage = latestGame.img_icon_url;
    const gameName = latestGame.name;
    // The playtime numbers are in minutes:
    const gameWeeks = Math.round(parseInt(latestGame.playtime_2weeks) / 60);
    const gameAll = Math.round(parseInt(latestGame.playtime_forever) / 60);
    // Changing elements on website:
    latestGameCover.src = "http://media.steampowered.com/steamcommunity/public/images/apps/" + gameAppId + "/" + gameImage + ".jpg";
    latestGameCover.alt = gameName;
    latestGameTitle.innerHTML = "Latest game: <b>" + gameName + "</b>";
    latestGameWeeks.innerHTML = "Time played in the last 2 weeks: <b>" + gameWeeks + " hours</b>"
    latestGameAll.innerHTML = "Time played total: <b>" + gameAll + " hours</b>"
}

/* PROJECT SECTION */
//Project type checkboxes:
var cbCoding = document.getElementById("cbCoding");
var cbDesign = document.getElementById("cbDesign");
var cbWriting = document.getElementById("cbWriting");
var cbFont = document.getElementById("cbFont");
var cbArchival = document.getElementById("cbArchival");

//Project types: coding, design, writing, font
const projectInfo = [
    {
        "title": "simranthind.me",
        "icon": "🌃",
        "website": "https://github.com/simcard0000/simcard0000.github.io",
        "about": "this very website; pure HTML + CSS + JS",
        "year": 2024,
        "type": ["coding"],
    },
    {
        "title": "LinguaFlow",
        "icon": "🖱️",
        "website": "https://github.com/simcard0000/click-crafters",
        "about": "CS 449: Human-Computer Interaction design project",
        "year": 2023,
        "type": ["design", "writing"]
    },
    {
        "title": "SE350 Examples",
        "icon": "🔩",
        "website": "https://github.com/simcard0000/se350-examples",
        "about": "sample code from SE 350: Operating Systems",
        "year": 2023,
        "type": ["coding", "archival"]
    },
    {
        "title": "Dotfiles",
        "icon": "☄️",
        "website": "https://github.com/simcard0000/dotfiles",
        "about": "configuration files and notes for my WSL/Windows systems",
        "year": 2023,
        "type": ["archival"],
    },
    {
        "title": "Ramp Frontend Challenge",
        "icon": "💸",
        "website": "https://codesandbox.io/s/github/simcard0000/ramp-frontend-challenge",
        "about": "tiny React app made while applying for a position",
        "year": 2022,
        "type": ["coding"],
    },
    {
        "title": "Cherry Picking",
        "icon": "🍒",
        "website": "https://cherrypicking.digital",
        "about": "ongoing curation of music between friends",
        "year": 2022,
        "type": ["coding", "design"],
    },
    {
        "title": "SE Webring",
        "icon": "💜",
        "website": "https://se-webring.xyz",
        "about": "collection of personal sites of software engineering students (w/ <a href=\"https://janakitti.com/\" target=\"_blank\">Janakitti Ratana-Rueangsri</a>)",
        "year": 2022,
        "type": ["coding", "design"],
    },
    {
        "title": "Imaginary Flowers",
        "icon": "🌼",
        "website": "https://github.com/simcard0000/imaginary-flowers",
        "about": "ongoing art created with <a href=\"https://www.kurtz-fernhout.com/PlantStudio/\" target=\"_blank\">Kurtz-Fernhout's PlantStudio Botanical Illustration application</a> and Paint3D",
        "year": 2022,
        "type": ["design"]
    },
    {
        "title": "Metaflop Font Derivations",
        "icon": "✒️",
        "website": "https://github.com/simcard0000/metaflop-font-derivations",
        "about": "group of custom fonts made through <a href=\"https://www.metaflop.com/modulator\" target=\"_blank\">Metaflop's modulator</a>",
        "year": 2022,
        "type": ["font"],
    },
    {
        "title": "Sims' Deep Pink",
        "icon": "💗",
        "website": "https://github.com/simcard0000/sims-deep-pink",
        "about": "dark theme for Firefox with pink highlights",
        "year": 2022,
        "type": ["design"],
    },
    {
        "title": "Theoretical Computer Science Cheat Sheet",
        "icon": "♾️",
        "website": "https://github.com/simcard0000/theoretical-computer-science-cheat-sheet",
        "about": "expanding out Steve Seiden's Theoretical Computer Science Cheat Sheet",
        "year": 2022,
        "type": ["archival"],
    },
    {
        "title": "Hack the North: Building projects effectively at hackathons",
        "icon": "🛠️",
        "website": "https://hackthenorth.medium.com/building-projects-effectively-at-hackathons-997e5b1c2b1d",
        "about": "post about tips & tricks for making hacks, with a resource repo",
        "year": 2020,
        "type": ["writing"],
    },
    {
        "title": "First Semester of Software Engineering at the University of Waterloo",
        "icon": "✏️",
        "website": "https://medium.com/@simran.thind/first-semester-of-software-engineering-at-the-university-of-waterloo-4151266e4520",
        "about": "article about my freshman experience",
        "year": 2020,
        "type": ["writing"],
    },
    {
        "title": "HSA_UFA With GIF Methods",
        "icon": "🗝️",
        "website": "https://github.com/simcard0000/hsa-ufa-with-gif-methods",
        "about": "version of a Java library from Holt Software Associates",
        "year": 2020,
        "type": ["archival"],
    },
    {
        "title": "JikoAi (ジコアイ)",
        "icon": "🐈",
        "website": "https://github.com/simcard0000/jiko-ai",
        "about": "self-care Tamagotchi™ hardware concept (w/ <a href=\"https://github.com/colemacphail\" target=\"_blank\">Cole MacPhail</a>, <a href=\"https://github.com/ZhengmaoOuyang\" target=\"_blank\">Zhengmao Ouyang</a>, <a href=\"https://github.com/wenyihu6\" target=\"_blank\">Wenyi Hu</a>)",
        "year": 2019,
        "type": ["coding"],
    },
    {
        "title": "Electromagnetic Wave Propagation Demo",
        "icon": "📊",
        "website": "https://github.com/simcard0000/electromagnetic-wave-propagation",
        "about": "3D visual of electromagnetic waves which can be manipulated",
        "year": 2019,
        "type": ["coding"],
    },
    {
        "title": "Stranger Things Lights",
        "icon": "✨",
        "website": "https://github.com/simcard0000/stranger-things-lights",
        "about": "'lil bit of hardware that takes a message and flashes it across LEDs",
        "year": 2018,
        "type": ["coding"],
    },
    {
        "title": "Google Code-In: An Introduction to Google Colaboratory",
        "icon": "✏️",
        "website": "https://medium.com/@simran.thind/an-introduction-to-google-colaboratory-e1d68b892519",
        "about": "guide to getting started with the Colab program",
        "year": 2018,
        "type": ["writing"],
    },
    {
        "title": "Google Code-In: Introduction to Selenium and Protractor",
        "icon": "✏️",
        "website": "https://medium.com/@simran.thind/introduction-to-selenium-and-protractor-d20466abdf99",
        "about": "comparison of two web testing tools",
        "year": 2018,
        "type": ["writing"],
    }
]

// Rendering the projects table based on selected types:
var tableHeader = document.getElementById("thead");

function renderProjectsTable(type) {
    let projectsArray = [];
    if (type.length === 0) {
        projectsArray = projectInfo;
    } else {
        projectsArray = projectInfo.filter(element => element.type.some(typeElm => type.includes(typeElm)));
    }
    if (document.getElementById("tbody")) {
        const oldTableBody = document.getElementById("tbody");
        oldTableBody.remove();
    }
    let tableBodyContent = [];
    tableBodyContent.push("<tbody id=\"tbody\">");
    for (let i = 0; i < projectsArray.length; i++) {
        tableBodyContent.push("<tr><td><div id=\"projectTitle\">" + projectsArray[i].icon + "<div><a href=\"" + projectsArray[i].website + "\" target=\"_blank\">" + projectsArray[i].title + "</a></div></div></td><td>" + projectsArray[i].about + "</td><td>" + projectsArray[i].year + "</td>");
    }
    tableBodyContent.push("</tbody>");
    tableHeader.insertAdjacentHTML(
        "afterend",
        tableBodyContent.join('')
    )
    return;
}

// Handling type selection changes:
function typeFilterChange() {
    let selectedTypes = [];
    if (cbCoding.checked) {
        selectedTypes.push("coding");
    }
    if (cbDesign.checked) {
        selectedTypes.push("design");
    }
    if (cbWriting.checked) {
        selectedTypes.push("writing");
    }
    if (cbFont.checked) {
        selectedTypes.push("font");
    }
    if (cbArchival.checked) {
        selectedTypes.push("archival");
    }
    renderProjectsTable(selectedTypes);
    return;
}