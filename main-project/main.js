/* arrays are in this order [english/history, stem, community service, music/arts, religion, athletics, activism, culture]

Inside those arrays are the names of all clubs associated with it... the 2d array shows the club and name and all the associated information */
var obj = {
    ela: [["Book Club", "Emily Houston", "CRLS Library", ""],
          ["Literary Magazine Club", "Jennifer Sarmiento", "2212", ""],
          ["Poetry/Spoken Word Club", "AnneMarie Grover", "2320", ""],
          ["Register Forum", "Steven Matteo", "3401", ""],
          ["Speech and Debate Club", "Tiana Menon", "1105", ""],
          ["History Club", "Hannah Varden", "Barbara Weaver's", ""],
         ["Yearbook Club", "Jacqueline Cesario", "1606", ""]],
    stem: [["Aerospace Engineering/Astronomy", "Tal SebellShavit", "2412", ""],
        ["Biotechnology Club", "Hiroko Kazcmarek", "1303", ""],
        ["Health Care Club(Club Med)", "Gina Hughes", "1228", ""],
        ["Computer Science Club", "Doug McGlathery", "4402", ""],
        ["FIRST Robotics Club", "Conrad Hauck", "1201", ""],
        ["Math Club", "Nora Watson", "3610", ""],
        ["Science Team", "Kris Newton", "2405", ""],
        ["Underwater Robotics Team", "Paul McGuinness", "3402", ""]],
    communityService: [["Club 4", "Susie VanBlaricum", "CRLS Media Cafe", ""],
        ["Habitat for Humanity Club", "Tanya Augustine", "1609", ""],
        ["Student Government", "Susie VanBlaricum & Jackie Cesario", "1606", ""],
        ["National Honor's Society", "Robert Tynes", "N/A", ""]],

    musicArts: [
        ["A Capella Club", "Ivan Stefanov", "N/A(1st floor)", ""],
        ["Ceramics Club", "Jon Baring-Gould", "3602", ""],
        ["Chamber Music", "N/A", "N/A", ""],
        ["Henna Club", "Cindy Weisbart", "1609", ""],
        ["K-Pop Club", "Francisco Hernandez", "4121", ""],
        ["Media Arts Club", "Joshua Arevalo", "Media Arts Studio", ""],
        ["Step Team", "TBD", "TBD", ""],
        ["Improv Club", "Monica Murray", "Black Box Theatre", ""],
        ["Photo Club", "Deborah Milligan", "3622", ""],
        ["Drumline", "Guillermo Nojechowicz", "0606", ""]
    ],
    /* Actually a misture of religious and cultural clubs */
    religion: [["Christian Club", "Aboma Dirbaba", "2019", ""],
        ["Jewish Heritage Club", "Tal SebellShavit", "2412", ""],
        ["Arabic Club", "Ibrahim Dagher", "1613", ""],
        ["Asian Club", "Zuwei Shi", "2608", ""],
        ["Habashan Club", "David Saavedra", "3610", ""],
        ["Haitian Club", "Emie Michaud-Weinstock", "2112", ""],
        ["Hip Hop Culture Club", "Ed Walker", "2201", ""],
        ["LatinX Club", "Chris Montero", "5101", ""],
        ["Muslim Culture Club", "Ramazan Nigdellogh", "2411", ""]],
    politics: [
        ["Issues in Education Club", "Rachel Otty", "2314", ""],
        ["Junior State of America(JSA)", "Joshua Landwehr", "2135", ""],
        ["Model United Nations Club", "Greg Racki/Brendan Kells", "5401", ""],
        ["Political Action Club", "N/a", "N/a", ""]
    ],
    activism: [
        ["Bike Advocacy Club", "Laura Borrelli", "3409", ""],
        ["Black Students Union", "Kevin Dua", "1604", ""],
        ["Club 1 - Feminist", "Jennifer Sarmianto", "2212", ""],
        ["Environmental Action Club", "Cecelia Hylton", "2312", ""],
        ["#HerVote", "Marlin Kann", "4405", ""],
        ["Project 10 East", "Drake King", "2622"],
        ["Sisters on the Runway", "Jillian Hutt", "2313", ""],
        ["Sustainable Development Club", "Kristin Newton", "2405", ""],
        ["UNICEF", "Ibrahim Dagher", "1613", ""]
    ],
    miscellaneous: [
        ["Alpine Ski & Board", "Jon Baring-Gould & Jesse Kaplan", "3602", ""],
        ["American Sign Language Club", "N/a", "N/a", ""],
        ["Business Club", "Larry Rubin", "1108", ""],
        ["Chess Club", "N/a", "N/a", ""],
        ["Dungeons and Dragons", "Jessie Young", "3623", ""],
        ["Falcon Friends", "Lynette Belle", "2624 or CRLS Library", ""],
        ["Freshman Class", "N/a", "N/a", ""],
        ["Glocal", "N/a", "N/a", ""],
        ["Interact Club", "N/a", "N/a", ""],
        ["Junior Class", "N/a", "N/a", ""],
        ["Latin Club", "Maria Giacchino", "2321", ""],
        ["Peer Mentoring", "Sharon Lozada", "N/a", ""],
        ["Senior Class", "Marya Wegman", "2311", ""],
        ["Sophmore Class", "N/a", "N/a", ""],
        ["Spanish Club", "Eydie Ortiz", "2620", ""]
    ]
};


function navFunction(elm) {
    let elmId = elm.id;
    document.getElementById("content").style.visibility = "hidden";

    var classList = document.getElementsByClassName("navBtn");
    for (i = 0; i < classList.length; i++) {
        classList[i].style.border = "none";
    }

    document.getElementById("tabName").textContent = elm.textContent;
    elm.style.borderBottom = "5px solid #F2F7F2";

    document.getElementById("classesFound").textContent = obj[elmId].length + " Clubs Found";

    /* This clears the content section */
    document.querySelectorAll(".newElm").forEach(function (a) {
        a.remove();
    })
    /* This hides the knownSec element */
    document.getElementById("knownSec").style.display = "none";

    for (i = 1; i < obj[elm.id].length + 1; i++) {
        var newSec = document.getElementById('knownSec').cloneNode(true);
        newSec.setAttribute('id', i);
        newSec.setAttribute('class', 'newElm'); /*Used to delete the elms when new tab is clicked*/
        newSec.style.display = "block";

        if (elmId == "ela") {
            newSec.querySelector("h2").innerHTML = obj.ela[i - 1][0];
            newSec.querySelector("h3").innerHTML = "Advisor: " + obj.ela[i - 1][1];
            newSec.querySelector("h4").innerHTML = "Room: " + obj.ela[i - 1][2];
            /*newSec.querySelector("img").src = "Images/" + obj.ela[i - 1][3];*/
        } else if (elmId == "stem") {
            newSec.querySelector("h2").innerHTML = obj.stem[i - 1][0];
            newSec.querySelector("h3").innerHTML = "Advisor: " + obj.stem[i - 1][1];
            newSec.querySelector("h4").innerHTML = "Room: " + obj.stem[i - 1][2];
            /*newSec.querySelector("img").src = "Images/" + obj.stem[i - 1][3];*/
        } else if (elmId == "communityService") {
            newSec.querySelector("h2").innerHTML = obj.communityService[i - 1][0];
            newSec.querySelector("h3").innerHTML = "Advisor: " + obj.communityService[i - 1][1];
            newSec.querySelector("h4").innerHTML = "Room: " + obj.communityService[i - 1][2];
            /*newSec.querySelector("img").src = "Images/" + obj.communityService[i - 1][3];*/
        } else if (elmId == "musicArts") {
            newSec.querySelector("h2").innerHTML = obj.musicArts[i - 1][0];
            newSec.querySelector("h3").innerHTML = "Advisor: " + obj.musicArts[i - 1][1];
            newSec.querySelector("h4").innerHTML = "Room: " + obj.musicArts[i - 1][2];
            /*newSec.querySelector("img").src = "Images/" + obj.musicArts[i - 1][3];*/
        } else if (elmId == "religion") {
            newSec.querySelector("h2").innerHTML = obj.religion[i - 1][0];
            newSec.querySelector("h3").innerHTML = "Advisor: " + obj.religion[i - 1][1];
            newSec.querySelector("h4").innerHTML = "Room: " + obj.religion[i - 1][2];
            /*newSec.querySelector("img").src = "Images/" + obj.religion[i - 1][3];*/
        } else if (elmId == "politics") {
            newSec.querySelector("h2").innerHTML = obj.politics[i - 1][0];
            newSec.querySelector("h3").innerHTML = "Advisor: " + obj.politics[i - 1][1];
            newSec.querySelector("h4").innerHTML = "Room: " + obj.politics[i - 1][2];
            /*newSec.querySelector("img").src = "Images/" + obj.politics[i - 1][3];*/
        } else if (elmId == "activism") {
            newSec.querySelector("h2").innerHTML = obj.activism[i - 1][0];
            newSec.querySelector("h3").innerHTML = "Advisor: " + obj.activism[i - 1][1];
            newSec.querySelector("h4").innerHTML = "Room: " + obj.activism[i - 1][2];
            /*newSec.querySelector("img").src = "Images/" + obj.activism[i - 1][3];*/
        } /* miscellaneous clubs */
        else {
            newSec.querySelector("h2").innerHTML = obj.miscellaneous[i - 1][0];
            newSec.querySelector("h3").innerHTML = "Advisor: " + obj.miscellaneous[i - 1][1];
            newSec.querySelector("h4").innerHTML = "Room: " + obj.miscellaneous[i - 1][2];
            /*newSec.querySelector("img").src = "Images/" + obj.miscellaneous[i - 1][3];*/
        }

        document.getElementById("content").appendChild(newSec);
    }

    document.getElementById("content").style.visibility = "visible";
}
