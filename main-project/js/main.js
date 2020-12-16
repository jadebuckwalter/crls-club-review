/* declaring global variable for later use in signUpClicked() function */
var clubName = "";


/* arrays are in this order [english/history[club name, advisor name, location, img, meet time, description], stem, community service, music/arts, religion, athletics, activism, culture]

Inside those arrays are the names of all clubs associated with it... the 2d array shows the club and name and all the associated information */
var obj = {
    ela: [["Book Club", "Emily Houston", "CRLS Library", "", "1-2 Wednesdays per month, 3pm", "The CRLS Library Book Club is for any and all students who like to read. The book club will meet during all three lunches and include book discussions, Skypes with authors, and lots of food!"],
          ["Literary Magazine Club", "Jennifer Sarmiento", "Google Classroom", "", "Fridays 4pm", "Description Not Provided"],
          ["Poetry/Spoken Word Club", "Emmanuel Yeboah", "2320", "", "Wednesdays 1pm", "Poetry Club is a place for students to create, share and listen to poetry! Each week there is a focus on a different poetic style and/or poetic device for students to explore and then practice. The students that run the club are passionate about helping others through the writing process and creating a comfortable environment to share written work. Poetry Club is a great place for students to express themselves creatively through writing and is always looking for new members to join!"],
          ["Register Forum", "Steven Matteo", "3401", "", "Thursdays 2:30-3:30pm", "Convey the message of social and civic responsibility to each reporter/writer and bring issues to the readership that are especially pertinent to the school community. Our motto, 'Listening to every voice, printing what you need to hear,' forms the core of our principles and demonstrates our responsiveness and responsibility to our readership. Editor - in -Chief: Sun - jung Yum and Cecilia Barron, Editors - in -Chief Managing Editors: Isabelle Agee - Jacobson and Vera Targoff. Established in 1891 as the C.M.T.S. Register. 'Listening to every voice, printing what you need to hear.' "],
          ["Debate Club", "Erik Scott", "1105", "", "Wednesdays and Saturdays 4-5pm", "Come become a quick thinker and an effective speaker, while winning a few trophies and becoming a part of our close-knit team! Members of the Speech and Debate are welcome to attend any or all of the tournaments that our team goes to (which are held once or twice a month). We guarantee you'll love it, so come just give it a try!"],
          ["History Club", "Lily Read", "", "", "Thursdays 7:15 - 8am", "As a student organization at CRLS, the History Club participates in the annual National History Day competition, sending a number of presentations each year. In addition the History Club makes an annual trip to participate in advocacy work or to explore places of historical relevance."],
         ["Yearbook Club", "Jacqueline Cesario", "1606", "", "Wednesdays and Thursdays, 2pm", "The yearbook staff is led by a dedicated group of seniors who oversee the yearbook concept, design, photography, editorial, sales and business. They work together as a team to capture the important moments of the school year in every page of our yearbook. The yearbook isn't just created by seniors; students in all grades participate in making the yearbook a success every year. The editors and senior leaders of the yearbook are supported by numerous freshmen, sophomores, juniors, and additional seniors who design the pages and photograph countless events, activities, and games at Rindge."]],

    stem: [
        ["Artificial Intelligence and Machine Learning Club", "Jose-Luis Martinez", "", "Fridays 3pm"],
        ["Aspine/CTF Club", "Eric Wu", "", "Wednesdays 1-2pm"],
        ["Aerospace Engineering/Astronomy", "Tal SebellShavit", "2412", "", "Thursdays 3-3:30pm", "Description not provided"],
        ["Biotechnology Club", "Hiroko Kazcmarek, Pei-Yun Chu", "1303", "", "Mondays 3-3:45pm", "Members learn research techniques and practice skills in the RSTA state-of-the-art Biotech Lab, meet scientists from the industry and learn about careers in science."],
        ["Club Med", "Gina Hughes", "1228", "", "Every other Wednesday 4pm", "Students volunteer and have school community members donate blood. The students take blood pressures at: the Public works Health Fair, Assisted Living at Youville Hospital, the staff at CRLS, and at the Cambridge school-wide Science Fairs. Junior and senior students educate the student body with eating a healthy breakfast, students plan events such as free breakfast promotion as well as education through Public Service Announcements."],
        ["Computer Science Club", "Doug McGlathery", "4402", "", "Wednesdays 3-4pm", "Students will learn about machine learning, web development, IOT, and more. Everyone is welcome and no experience is required. If there is something you want to learn within the realm of computer science then we will make sure to cover it during club time. We also participate in hackathons, app challenges, and helping our community using our tech skills."],
        ["Robotics Club", "Conrad Hauck, Jose-Luis Martinez", "1201", "", "Tuesdays 3-4pm", "The CRLS Robotics Club is for students interested in the exciting and growing field of robotics. The club will learn a variety of techniques to design, build, program robots and fundraise. They will then take that knowledge and apply it to compete in in the FIRST Robotics Boston Regional. There is no experience needed to join the club and new members are welcome. The club meets Thursday after school starting October 17 from 2:30 - 4PM. During our competition “build season” we will design and build a robot for this year’s competition based on the specification released in the first week of January. We will complete the robot by the February break. During this time the club will meet every day from 2:30 - 6PM."],
        ["Rocket Club", "Liza Hansel", "", "Wednesdays 3:30-4:30pm"],
        ["Math Club", "Nora Watson", "3610", "", "Tuesdays 3:15pm", "Do you like thinking? Do you want to learn creative and elegant ways to solve problems? Do you want to explore surprising connections between different ideas? Then Math Club is for you. The Math Club participates in the New England Math League, Harvard-MIT November Tournament, and the AMC/AIME. New England Math League contests happen six times per school year, starting in October, once per month. Everyone is welcome to join us. Math ClubContact Nora Watson to learn more. Or just stop by Room 3124. Everyone is welcome at Math Club!"],
        ["Origami Club: STEAM Integration", "Hiroko Kaczmarek", "", "Fridays 4-5pm"],
        ["Science Team", "Kris Newton", "2405", "", "Tuesdays 2:45pm", "The CRLS Science Team is an opportunity to compete in a wide variety of science events. Competitive events include all disciplines of science and can involve laboratory experiments, design projects, cooperative challenges, and paper and pencil tests. The CRLS Science Team participates in several major science competitions: North Shore Science League – The NSSL has seven meets throughout the school year (2nd Tuesday of the month in October, November, December, January, February, March, and April). Teams of four compete in one of three events each month. Women of Science Competition - This is a one-day event in December in which teams of three female students compete in four different events, one of which is a build-ahead event. Students must be 11th or 12th graders. MIT Science Olympiad Invitational - This is a one-day event in January consisting of most of the same events that will be at the Massachusetts State Olympiad Competition. Massachusetts State Science Olympiad – This is a one-day event in March consisting of 25 events. Each student participates in 2-4 events. To prepare, students are paired with mentors who meet with them weekly beginning in late fall. MIT Science Trivia Competition - This team trivia competition is part of the Cambridge Science Festival and happens during April vacation. Teams of up to 5 students and 5 alternates compete against teams from other schools. *A note about the meeting time: Tuesdays is the regular day we check in as a team. If Tuesday conflicts with another student activity, it is still possible to be a science team member!"],
        ["Underwater Robotics", "Paul McGuinness", "3402", "", "Thursdays 2:15-3:15pm", "The CRLS Underwater Robotics team is a group of students who are interested in designing, building, and flying underwater robots to meet specific mission requirements and challenges for a regional and international competition. We brainstorm engineering solutions to underwater challenges, we build and test different electrical and mechanical systems to meet the competition scenarios, and we spend time testing ‘bot designs in the test tank in the classroom and in the diving pool in the school pool. We have professional relationships with local engineering and research firms and institutions for additional extracurricular opportunities for interested and motivated students. All interested students are welcome."]],

    communityService: [["Club 4", "Susie VanBlaricum", "CRLS Media Cafe", "First Friday of the month 4pm"],
        ["Habitat for Humanity Club", "Tanya Augustine", "1609", ""],
        ["Student Government", "Molly Roach, Kiki Nakamura-Koyama", "1606", "Thursdays 7:45am"]],

    musicArts: [
        ["Chamber Music Collaboration", "Laura Umbro", "N/A", "1-2 Thursdays per month, 7pm"],
        ["CRLS Off Broadway Theatre Society", "Monica Murray, Brett Cramp", "", "Tuesdays 3:30-4:30pm"],
        ["Drumline Club", "Guillermo Nojechowicz", "", "Fridays 3pm"],
        ["Henna Club", "Ibrahim Dagher", "1609", "Every other Friday, 3:15pm"],
        ["K-Pop Club", "Dionne Campbell", "4121", "Wednesdays 3:15-3:45pm"],
        ["Media Arts Club", "Joshua Arevalo", "Media Arts Studio", "Wednesdays 3pm"],
        ["Improv Club", "Monica Murray", "Black Box Theatre", "Mondays 5-6:30pm"],
        ["Photo Club", "Deborah Milligan", "3622", "Every other Friday, 3-4pm"],
        ["Drumline", "Guillermo Nojechowicz", "0606", ""]],

    /* Actually a misture of religious and cultural clubs */
    religion: [
        ["Jewish Heritage Club", "Tal SebellShavit", "2412", "Thursdays 8-8:30am"],
        ["Arabic Club", "Ibrahim Dagher", "1613", "Every other Friday, 3pm"],
        ["Asian Club", "Jing Xiaoshu", "2608", "Every other Friday, 2:45-3:30pm"],
        ["Habasha Club", "Ayesha Wilson, Lena Solomon", "3610", "Every other Wednesday, 1:30-2:30pm"],
        ["Haitian Club", "Carmelle Philippe", "2112", "Thursdays 2:30pm"],
        ["Latinx Club", "Chris Montero", "5101", "Wednesdays 3-4pm"],
        ["Muslim Culture Club", "Ramazan Nigdelioglu", "2411", "Every other Monday 3-3:45pm"]],

    politics: [["Intersectional Socialist Student Union (ISSU)", "Chris Montero", "", "Wednesdays 3pm"],
        ["Junior State of America (JSA)", "Joshua Landwehr", "2135", "Fridays 3pm"],
        ["Model United Nations Club", "Nicholas Yeh", "5401", ""],
        ["Political Awareness Club", "Ross Benson", "N/a", "Wednesdays 2:30pm"]],

    activism: [
        ["Bike Advocacy Club", "Laura Borrelli", "3409", "Wednesdays 10:45am"],
        ["Black Student Union", "N/A", "1604", "Wednesdays 10am"],
        ["Environmental Action Club", "Nicholas Parsons", "2312", "Thursdays 8am"],
        ["Habitat for Humanity", "Tanya Augustine", "", "Tuesdays 8am"],
        ["#HerVote", "Marlin Kann", "4405", "Tuesdays and Thursdays 3pm"],
        ["Intersectional Feminism Club", "Caroline Berz", "", "Thursdays 3-4pm"],
        ["International & Sustainable Development Club (ISDC)", "Kris Newton", "Mondays 3-4pm"],
        ["Marine Conservation Club", "Paul McGuinness", "", "First and third Wednesdays, 2pm"],
        ["Project 10 East", "Drake King", "2622", "Tuesdays 3:15-4:15pm"],
        ["Sisters on the Runway", "Jillian Hutt", "2313", "Fridays 8:15-9am"],
        ["UNICEF", "Ibrahim Dagher", "1613", "Every other Wednesday 3pm"]],

    miscellaneous: [
        ["Business Club", "Jacqueline Cesario", "1108", "Wednesdays 10am"],
        ["Chess Club", "Rick McKinney", "N/a", "Thursdays 3-4pm"],
        ["Investment Club", "Denise Lee", "", "Tuesdays 3:30-4:30pm"],
        ["Latin Club", "Maria Giacchino", "2321", "Fridays 3-4pm"],
        ["Spanish Club", "Eydie Ortiz", "2620", "Thursdays 3pm"]]
};

var desc = "";
var time = "";


function navFunction(elm) {
    let elmId = elm.id;

    document.getElementById("indPage").style.display = "none";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("signUp").style.display = "none";
    document.getElementById("desc").style.display = "none";
    document.getElementById("time").style.display = "none";


    var classList = document.getElementsByClassName("navBtn");
    for (i = 0; i < classList.length; i++) {
        classList[i].style.border = "none";
    }

    document.getElementById("tabName").textContent = elm.textContent;
    elm.style.borderBottom = "5px solid #F2F7F2";

    document.getElementById("classesFound").textContent = obj[elmId].length + " Clubs Found";

    document.getElementById("tabName").style.display = "block";
    document.getElementById("classesFound").style.display = "block";

    /* This clears the content section */
    document.querySelectorAll(".newElm").forEach(function (a) {
        a.remove();
    })

    /* This hides the knownSec element */
    document.getElementById("knownSec").style.display = "none";

    /* creates the content for the content section */
    /*
    Ask other clubs to send an image they want to go on the site as well as the description, meet times, advisor, and room num.
    */
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
            newSec.querySelector("#desc").innerHTML = obj.ela[i - 1][5];
            newSec.querySelector("#time").innerHTML = obj.ela[i - 1][4];
        } else if (elmId == "stem") {
            newSec.querySelector("h2").innerHTML = obj.stem[i - 1][0];
            newSec.querySelector("h3").innerHTML = "Advisor: " + obj.stem[i - 1][1];
            newSec.querySelector("h4").innerHTML = "Room: " + obj.stem[i - 1][2];
            /*newSec.querySelector("img").src = "Images/" + obj.stem[i - 1][3];*/
            newSec.querySelector("#desc").innerHTML = obj.stem[i - 1][5];
            newSec.querySelector("#time").innerHTML = obj.stem[i - 1][4];
        } else if (elmId == "communityService") {
            newSec.querySelector("h2").innerHTML = obj.communityService[i - 1][0];
            newSec.querySelector("h3").innerHTML = "Advisor: " + obj.communityService[i - 1][1];
            newSec.querySelector("h4").innerHTML = "Room: " + obj.communityService[i - 1][2];
            /*newSec.querySelector("img").src = "Images/" + obj.communityService[i - 1][3];
            newSec.querySelector("#desc").innerHTML = obj.communityService[i - 1][5];
            newSec.querySelector("#time").innerHTML = obj.communityService[i - 1][4];*/
        } else if (elmId == "musicArts") {
            newSec.querySelector("h2").innerHTML = obj.musicArts[i - 1][0];
            newSec.querySelector("h3").innerHTML = "Advisor: " + obj.musicArts[i - 1][1];
            newSec.querySelector("h4").innerHTML = "Room: " + obj.musicArts[i - 1][2];
            /*newSec.querySelector("img").src = "Images/" + obj.musicArts[i - 1][3];
            newSec.querySelector("#desc").innerHTML = obj.musicArts[i - 1][5];
            newSec.querySelector("#time").innerHTML = obj.musicArts[i - 1][4];*/
        } else if (elmId == "religion") {
            newSec.querySelector("h2").innerHTML = obj.religion[i - 1][0];
            newSec.querySelector("h3").innerHTML = "Advisor: " + obj.religion[i - 1][1];
            newSec.querySelector("h4").innerHTML = "Room: " + obj.religion[i - 1][2];
            /*newSec.querySelector("img").src = "Images/" + obj.religion[i - 1][3];
            newSec.querySelector("#desc").innerHTML = obj.religion[i - 1][5];
            newSec.querySelector("#time").innerHTML = obj.religion[i - 1][4];*/
        } else if (elmId == "politics") {
            newSec.querySelector("h2").innerHTML = obj.politics[i - 1][0];
            newSec.querySelector("h3").innerHTML = "Advisor: " + obj.politics[i - 1][1];
            newSec.querySelector("h4").innerHTML = "Room: " + obj.politics[i - 1][2];
            /*newSec.querySelector("img").src = "Images/" + obj.politics[i - 1][3];
            newSec.querySelector("#desc").innerHTML = obj.politics[i - 1][5];
            newSec.querySelector("#time").innerHTML = obj.politics[i - 1][4];*/
        } else if (elmId == "activism") {
            newSec.querySelector("h2").innerHTML = obj.activism[i - 1][0];
            newSec.querySelector("h3").innerHTML = "Advisor: " + obj.activism[i - 1][1];
            newSec.querySelector("h4").innerHTML = "Room: " + obj.activism[i - 1][2];
            /*newSec.querySelector("img").src = "Images/" + obj.activism[i - 1][3];
            newSec.querySelector("#desc").innerHTML = obj.activism[i - 1][5];
            newSec.querySelector("#time").innerHTML = obj.activism[i - 1][4];*/
        } /* miscellaneous clubs */
        else {
            newSec.querySelector("h2").innerHTML = obj.miscellaneous[i - 1][0];
            newSec.querySelector("h3").innerHTML = "Advisor: " + obj.miscellaneous[i - 1][1];
            newSec.querySelector("h4").innerHTML = "Room: " + obj.miscellaneous[i - 1][2];
            /*newSec.querySelector("img").src = "Images/" + obj.miscellaneous[i - 1][3];
            newSec.querySelector("#desc").innerHTML = obj.miscellaneous[i - 1][5];
            newSec.querySelector("#time").innerHTML = obj.miscellaneous[i - 1][4];*/
        }
        document.getElementById("content").appendChild(newSec);
    }
}


function indCoursePage(oneElm) {
    var ind = document.getElementById("indPage");

    /* elmDict["num"] = oneElm.id; */
    ind.querySelector("h1").innerHTML = oneElm.querySelector("h2").textContent;
    clubName = String(oneElm.querySelector("h2").textContent);
    ind.querySelector("img").src = oneElm.querySelector("img").src;
    ind.querySelector("#advisor").innerHTML = oneElm.querySelector("h3").textContent;
    ind.querySelector("#room").innerHTML = oneElm.querySelector("h4").textContent;
    ind.querySelector("#time").innerHTML = "Meet Time: " + oneElm.querySelector("#time").textContent;
    ind.querySelector("p").innerHTML = oneElm.querySelector("#desc").textContent;

    document.querySelectorAll(".newElm").forEach(function (a) {
        a.style.display = "none";
    })

    document.getElementById("tabName").style.display = "none";
    document.getElementById("classesFound").style.display = "none";

    ind.style.display = "block";
    document.getElementById("signUp").style.display = "block";
    document.getElementById("desc").style.display = "block";
    document.getElementById("time").style.display = "block";

}

function signUpClicked() {

    /* allow students to open a google form that is specifically made for one club
    In order to do this maybe create another js object that has the urls for all the google forms
    */
    /* the url currently in this string will be replaced */
    window.open("https://www.retailmenot.com/blog/virtual-volunteer-opportunities.html", '_blank');
}
