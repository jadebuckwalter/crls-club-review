import {
    clubsArray
} from './data.js'
console.log(clubsArray)

var val = "";

/* clears the content section and creates a clean page */
function updateUI() {

    document.getElementById("welcome").style.display = "none";
    document.getElementById("cardDeck").style.display = "none";
    document.getElementById("indPage").style.display = "none";
    document.getElementById("tabName").style.display = "none";
    document.getElementById("classesFound").style.display = "none";
    document.getElementById("time").style.display = "none";
    document.getElementById("desc").style.display = "none";

    document.getElementById("invalidSearch").style.display = "none";

    /* This hides the knownSec element */
    document.getElementById("knownSec").style.display = "none";

    const classList = document.getElementsByClassName("navBtn");

    for (let i = 0; i < classList.length; i++) {
        classList[i].style.border = "none";
    }

    /* This clears the content section */
    document.querySelectorAll(".newCont").forEach(function (a) {
        a.remove();
    })

    document.querySelectorAll(".newElm").forEach(function (a) {
        a.style.display = "none";
    });
}

/* shows the list of clubs depending on what section a person clicked on */
function navFunction(elm) {
    updateUI();
    document.getElementById("tabName").style.display = "block";
    document.getElementById("classesFound").style.display = "block";
    document.getElementById("cardDeck").style.display = "block";

    document.getElementById("tabName").textContent = elm.textContent;
    elm.style.borderBottom = "2px solid #F2F7F2";

    /* For figuring out how many clubs are in the array */
    var count = 0;
    for (var i = 0; i < clubsArray.length; i++) {
        if (clubsArray[i].tags[0] === elm.id) {
            count++
        }
    }
    document.getElementById("classesFound").textContent = count + " Clubs Found";

    /* creates the content for the content section */
    /*
    Ask other clubs to send an image they want to go on the site as well as the description, times, advisor, and room num.
    */
    for (let i = 0; i < clubsArray.length; i++) {

        if (clubsArray[i].tags[0] === elm.id) {
            const newSec = document.getElementById('knownSec').cloneNode(true);
            newSec.className = "card allCards newCont";
            newSec.style.display = "inline-block";

            // display the club
            newSec.querySelector("#clubName").innerHTML = clubsArray[i].club;
            newSec.querySelector("#advName").innerHTML = "Advisor: " + clubsArray[i].advisor;
            newSec.querySelector("#roomNum").innerHTML = "Room: " + clubsArray[i].location;
            newSec.querySelector("img").src = "../Images/" + clubsArray[i].img;
            if (clubsArray[i].hasOwnProperty('desc')) {
                newSec.querySelector("#desc").innerHTML = clubsArray[i].desc;
                newSec.querySelector("#time").innerHTML = clubsArray[i].time;
            } else {
                newSec.querySelector("#desc").innerHTML = "Description not provided"
                newSec.querySelector("#time").innerHTML = "Not provided"
            }

            document.getElementById("cardDeck").appendChild(newSec);
        }
    }
    console.log(document.getElementById("cardDeck"));
}

/* Shows an individual page for the specific club that the user clicked on */
function indCoursePage(oneElm) {
    updateUI();
    const ind = document.getElementById("indPage");

    ind.querySelector("img").src = oneElm.querySelector("img").src;
    ind.querySelector("#name").innerHTML = oneElm.querySelector("#clubName").textContent;
    ind.querySelector("#advisor").innerHTML = oneElm.querySelector("#advName").textContent;
    ind.querySelector("#room").innerHTML = oneElm.querySelector("#roomNum").textContent;
    ind.querySelector("#time").innerHTML = "Meet time: " + oneElm.querySelector("#time").textContent;
    ind.querySelector("#description").innerHTML = oneElm.querySelector("#desc").textContent;

    document.getElementById("time").style.display = "block";
    document.getElementById("desc").style.display = "block";
    ind.style.display = "block";

}

/* Searches through our massive club array to find what the user is looking for
it only searches for the club name, room number, and advisor name */
function searchClubs() {
    var chosenClub = []

    upperVal = val.toUpperCase();

    for (i = 0; i < clubsArray.length; i++) {

        if (clubsArray[i].advisor.toUpperCase() == upperVal || clubsArray[i].advisor.toUpperCase().split(" ").includes(upperVal)) {
            chosenClub.push(clubsArray[i])
        } else if (clubsArray[i].club.toUpperCase() == upperVal || clubsArray[i].club.toUpperCase().split(" ").includes(upperVal)) {
            chosenClub.push(clubsArray[i])
        } else if (clubsArray[i].location == val.toLowerCase() || clubsArray[i].location.toLowerCase().split(" ").includes(val.toLowerCase())) {
            chosenClub.push(clubsArray[i])
        }
    }

    if (chosenClub.length == 0) {
        updateUI();

        document.getElementById("tabName").textContent = "You Searched For: " + val;
        document.getElementById("classesFound").textContent = "0 Clubs Found";
        document.getElementById("tabName").style.display = "block";
        document.getElementById("classesFound").style.display = "block";

        document.getElementById("invalidSearch").style.display = "block";
    } else {
        showSearchedClubs(chosenClub);
    }
}

/* Is called when the user press enter in the search bar */
function search(e, elm) {
    if (e.keyCode === 13) {
        e.preventDefault(); // Ensure it is only this code that runs
        updateUI();
        searchClubs();
        document.getElementById("searchBar").value = ""
        elm.blur();
    }
}

/* Actually displays the clubs that were found from the users search */
function showSearchedClubs(club) {
    updateUI();

    document.getElementById("tabName").textContent = "You Searched For: " + val;
    document.getElementById("classesFound").textContent = club.length + " Clubs Found";
    document.getElementById("tabName").style.display = "block";
    document.getElementById("classesFound").style.display = "block";

    /* creates the content for the content section */
    for (let i = 0; i < club.length; i++) {
        const newSec = document.getElementById('knownSec').cloneNode(true);
        newSec.className = "card allCards newCont";

        // display the club
        newSec.querySelector("#clubName").innerHTML = club[i].club;
        newSec.querySelector("#advName").innerHTML = "Advisor: " + club[i].advisor;
        newSec.querySelector("#roomNum").innerHTML = "Room: " + club[i].location;
        newSec.querySelector("img").src = "../Images/" + club[i].img;

        if (club[i].hasOwnProperty('desc')) {
            newSec.querySelector("#desc").innerHTML = club[i].desc;
            newSec.querySelector("#time").innerHTML = club[i].time;
        }

        newSec.style.display = "inline-block";

        document.getElementById("cardDeck").appendChild(newSec);
    }

}

/* assigns the search bars text value to a global variable defines above */
function setValue(txt) {
    val = txt.value
}

function loadMain() {
    updateUI();
    document.getElementById("welcome").style.display = "block";
}

/* Is run when the user clicks the sign up button for a club */
function signUpClicked() {

    /* allow students to open a google form that is specifically made for one club
    In order to do this maybe create another js object that has the urls for all the google forms
    */
    /* the url currently in this string will be replaced */
    window.open("https://www.retailmenot.com/blog/virtual-volunteer-opportunities.html", '_blank');
}
