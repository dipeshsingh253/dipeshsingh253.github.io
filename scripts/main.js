const hamburger = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-menu");


const home = document.querySelector(".home");
const about_me = document.querySelector(".about-me");
const tech = document.querySelector(".tech-stack");
const skills = document.querySelector(".skills");
const projects = document.querySelector(".projects");
const contact = document.querySelector(".contact");

const home_mobile = document.querySelector(".mobile-menu .home");
const about_me_mobile = document.querySelector(".mobile-menu .about-me");
const tech_mobile = document.querySelector(".mobile-menu .tech-stack");
const skills_mobile = document.querySelector(".mobile-menu .skills");
const projects_mobile = document.querySelector(".mobile-menu .projects");
const contact_mobile = document.querySelector(".mobile-menu .contact");


const home_id = document.querySelector("#home");
const about_me_id = document.querySelector("#about-me");
const tech_id = document.querySelector("#tech-stack");
const skills_id = document.querySelector("#skills");
const projects_id = document.querySelector("#projects");
const contact_id = document.querySelector("#contact");

hamburger.addEventListener("click", () => { hamburgerToggle(); })

home_mobile.addEventListener("click", () => {
    homeClickMobile();
});

about_me_mobile.addEventListener("click", () => {
    aboutMeClickMobile();
});

tech_mobile.addEventListener("click", () => {
    techStackClickMobile();
});

skills_mobile.addEventListener("click", () => {
    skillsClickMobile();
});

projects_mobile.addEventListener("click", () => {
    projectsClickMobile();
});

contact_mobile.addEventListener("click", () => {
    contactsClickMobile();
});

home.addEventListener("click", () => {

    homeClick();

});

about_me.addEventListener("click", () => {
    aboutMeClick();
});

tech.addEventListener("click", () => {
    techStackClick();
});

skills.addEventListener("click", () => {
    skillsClick();
});

projects.addEventListener("click", () => {
    projectsClick();
});

contact.addEventListener("click", () => {
    contactClick();
});

//Standard Menu Methods

function homeClick() {
    window.location.reload();
    home.classList.toggle("is-active");

    if (home_id.classList.contains("non-vis")) {
        home_id.classList.toggle("non-vis");
    }

    home_id.classList.toggle("vis");

    if (projects.classList.contains("is-active")) {
        projects.classList.toggle("is-active");
    }

    if (about_me.classList.contains("is-active")) {
        about_me.classList.toggle("is-active");
    }

    if (tech.classList.contains("is-active")) {
        tech.classList.toggle("is-active");
    }

    if (skills.classList.contains("is-active")) {
        skills.classList.toggle("is-active");
    }

    if (contact.classList.contains("is-active")) {
        contact.classList.toggle("is-active");
    }

    if (about_me_id.classList.contains("vis")) {
        about_me_id.classList.toggle("vis");
    }

    if (tech_id.classList.contains("vis")) {
        tech_id.classList.toggle("vis");
    }

    if (skills_id.classList.contains("vis")) {
        skills_id.classList.toggle("vis");
    }

    if (projects_id.classList.contains("vis")) {
        projects_id.classList.toggle("vis");
    }

    if (contact_id.classList.contains("vis")) {
        contact_id.classList.toggle("vis");
    }

    print();
}

function aboutMeClick() {
    about_me.classList.toggle("is-active");

    if (about_me_id.classList.contains("non-vis")) {
        about_me_id.classList.toggle("non-vis");
    }

    about_me_id.classList.toggle("vis");

    if (home.classList.contains("is-active")) {
        home.classList.toggle("is-active");
    }

    if (tech.classList.contains("is-active")) {
        tech.classList.toggle("is-active");
    }

    if (skills.classList.contains("is-active")) {
        skills.classList.toggle("is-active");
    }

    if (projects.classList.contains("is-active")) {
        projects.classList.toggle("is-active");
    }

    if (contact.classList.contains("is-active")) {
        contact.classList.toggle("is-active");
    }


    if (home_id.classList.contains("vis")) {
        home_id.classList.toggle("vis");
    }

    if (tech_id.classList.contains("vis")) {
        tech_id.classList.toggle("vis");
    }

    if (skills_id.classList.contains("vis")) {
        skills_id.classList.toggle("vis");
    }

    if (projects_id.classList.contains("vis")) {
        projects_id.classList.toggle("vis");
    }

    if (contact_id.classList.contains("vis")) {
        contact_id.classList.toggle("vis");
    }

    print();
}

function techStackClick() {
    tech.classList.toggle("is-active");

    if (tech_id.classList.contains("non-vis")) {
        tech_id.classList.toggle("non-vis");
    }

    tech_id.classList.toggle("vis");

    if (home.classList.contains("is-active")) {
        home.classList.toggle("is-active");
    }

    if (about_me.classList.contains("is-active")) {
        about_me.classList.toggle("is-active");
    }

    if (skills.classList.contains("is-active")) {
        skills.classList.toggle("is-active");
    }

    if (projects.classList.contains("is-active")) {
        projects.classList.toggle("is-active");
    }

    if (contact.classList.contains("is-active")) {
        contact.classList.toggle("is-active");
    }


    if (home_id.classList.contains("vis")) {
        home_id.classList.toggle("vis");
    }

    if (about_me_id.classList.contains("vis")) {
        about_me_id.classList.toggle("vis");
    }

    if (skills_id.classList.contains("vis")) {
        skills_id.classList.toggle("vis");
    }

    if (projects_id.classList.contains("vis")) {
        projects_id.classList.toggle("vis");
    }

    if (contact_id.classList.contains("vis")) {
        contact_id.classList.toggle("vis");
    }
    print();
}

function skillsClick() {
    skills.classList.toggle("is-active");

    if (skills_id.classList.contains("non-vis")) {
        skills_id.classList.toggle("non-vis");
    }

    skills_id.classList.toggle("vis");

    if (home.classList.contains("is-active")) {
        home.classList.toggle("is-active");
    }

    if (about_me.classList.contains("is-active")) {
        about_me.classList.toggle("is-active");
    }

    if (tech.classList.contains("is-active")) {
        tech.classList.toggle("is-active");
    }

    if (projects.classList.contains("is-active")) {
        projects.classList.toggle("is-active");
    }

    if (contact.classList.contains("is-active")) {
        contact.classList.toggle("is-active");
    }


    if (home_id.classList.contains("vis")) {
        home_id.classList.toggle("vis");
    }

    if (tech_id.classList.contains("vis")) {
        tech_id.classList.toggle("vis");
    }

    if (about_me_id.classList.contains("vis")) {
        about_me_id.classList.toggle("vis");
    }

    if (projects_id.classList.contains("vis")) {
        projects_id.classList.toggle("vis");
    }

    if (contact_id.classList.contains("vis")) {
        contact_id.classList.toggle("vis");
    }

    displayPercentage();
    print();
}

function projectsClick() {
    projects.classList.toggle("is-active");

    if (projects_id.classList.contains("non-vis")) {
        projects_id.classList.toggle("non-vis");
    }

    projects_id.classList.toggle("vis");

    if (home.classList.contains("is-active")) {
        home.classList.toggle("is-active");
    }

    if (about_me.classList.contains("is-active")) {
        about_me.classList.toggle("is-active");
    }

    if (tech.classList.contains("is-active")) {
        tech.classList.toggle("is-active");
    }

    if (skills.classList.contains("is-active")) {
        skills.classList.toggle("is-active");
    }

    if (contact.classList.contains("is-active")) {
        contact.classList.toggle("is-active");
    }


    if (home_id.classList.contains("vis")) {
        home_id.classList.toggle("vis");
    }

    if (tech_id.classList.contains("vis")) {
        tech_id.classList.toggle("vis");
    }

    if (skills_id.classList.contains("vis")) {
        skills_id.classList.toggle("vis");
    }

    if (about_me_id.classList.contains("vis")) {
        about_me_id.classList.toggle("vis");
    }

    if (contact_id.classList.contains("vis")) {
        contact_id.classList.toggle("vis");
    }
    loadProject();
    print();
}

function contactClick() {
    contact.classList.toggle("is-active");


    if (contact_id.classList.contains("non-vis")) {
        contact_id.classList.toggle("non-vis");
    }

    contact_id.classList.toggle("vis");

    if (home.classList.contains("is-active")) {
        home.classList.toggle("is-active");
    }

    if (about_me.classList.contains("is-active")) {
        about_me.classList.toggle("is-active");
    }

    if (tech.classList.contains("is-active")) {
        tech.classList.toggle("is-active");
    }

    if (skills.classList.contains("is-active")) {
        skills.classList.toggle("is-active");
    }

    if (projects.classList.contains("is-active")) {
        projects.classList.toggle("is-active");
    }

    if (home_id.classList.contains("vis")) {
        home_id.classList.toggle("vis");
    }

    if (tech_id.classList.contains("vis")) {
        tech_id.classList.toggle("vis");
    }

    if (skills_id.classList.contains("vis")) {
        skills_id.classList.toggle("vis");
    }

    if (projects_id.classList.contains("vis")) {
        projects_id.classList.toggle("vis");
    }

    if (about_me_id.classList.contains("vis")) {
        about_me_id.classList.toggle("vis");
    }
    print();
}


//Mobile Menu Methods 

function homeClickMobile() {
    window.location.reload();
    home_mobile.classList.toggle("is-active");

    if (home_id.classList.contains("non-vis")) {
        home_id.classList.toggle("non-vis");
    }

    home_id.classList.toggle("vis");

    if (about_me_mobile.classList.contains("is-active")) {
        about_me_mobile.classList.toggle("is-active");
    }

    if (tech_mobile.classList.contains("is-active")) {
        tech_mobile.classList.toggle("is-active");
    }

    if (skills_mobile.classList.contains("is-active")) {
        skills_mobile.classList.toggle("is-active");
    }

    if (projects_mobile.classList.contains("is-active")) {
        projects_mobile.classList.toggle("is-active");
    }

    if (contact_mobile.classList.contains("is-active")) {
        contact_mobile.classList.toggle("is-active");
    }


    if (about_me_id.classList.contains("vis")) {
        about_me_id.classList.toggle("vis");
    }

    if (tech_id.classList.contains("vis")) {
        tech_id.classList.toggle("vis");
    }

    if (skills_id.classList.contains("vis")) {
        skills_id.classList.toggle("vis");
    }

    if (projects_id.classList.contains("vis")) {
        projects_id.classList.toggle("vis");
    }

    if (contact_id.classList.contains("vis")) {
        contact_id.classList.toggle("vis");
    }

    hamburgerToggle();

    print();
}

function aboutMeClickMobile() {
    about_me_mobile.classList.toggle("is-active");

    if (about_me_id.classList.contains("non-vis")) {
        about_me_id.classList.toggle("non-vis");
    }

    about_me_id.classList.toggle("vis");

    if (home_mobile.classList.contains("is-active")) {
        home_mobile.classList.toggle("is-active");
    }

    if (tech_mobile.classList.contains("is-active")) {
        tech_mobile.classList.toggle("is-active");
    }

    if (skills_mobile.classList.contains("is-active")) {
        skills_mobile.classList.toggle("is-active");
    }

    if (projects_mobile.classList.contains("is-active")) {
        projects_mobile.classList.toggle("is-active");
    }

    if (contact_mobile.classList.contains("is-active")) {
        contact_mobile.classList.toggle("is-active");
    }


    if (home_id.classList.contains("vis")) {
        home_id.classList.toggle("vis");
    }

    if (tech_id.classList.contains("vis")) {
        tech_id.classList.toggle("vis");
    }

    if (skills_id.classList.contains("vis")) {
        skills_id.classList.toggle("vis");
    }

    if (projects_id.classList.contains("vis")) {
        projects_id.classList.toggle("vis");
    }

    if (contact_id.classList.contains("vis")) {
        contact_id.classList.toggle("vis");
    }

    hamburgerToggle();

    print();
}

function techStackClickMobile() {
    tech_mobile.classList.toggle("is-active");
    if (tech_id.classList.contains("non-vis")) {
        tech_id.classList.toggle("non-vis");
    }

    tech_id.classList.toggle("vis");

    if (about_me_mobile.classList.contains("is-active")) {
        about_me_mobile.classList.toggle("is-active");
    }

    if (home_mobile.classList.contains("is-active")) {
        home_mobile.classList.toggle("is-active");
    }

    if (skills_mobile.classList.contains("is-active")) {
        skills_mobile.classList.toggle("is-active");
    }

    if (projects_mobile.classList.contains("is-active")) {
        projects_mobile.classList.toggle("is-active");
    }

    if (contact_mobile.classList.contains("is-active")) {
        contact_mobile.classList.toggle("is-active");
    }


    if (home_id.classList.contains("vis")) {
        home_id.classList.toggle("vis");
    }

    if (about_me_id.classList.contains("vis")) {
        about_me_id.classList.toggle("vis");
    }

    if (skills_id.classList.contains("vis")) {
        skills_id.classList.toggle("vis");
    }

    if (projects_id.classList.contains("vis")) {
        projects_id.classList.toggle("vis");
    }

    if (contact_id.classList.contains("vis")) {
        contact_id.classList.toggle("vis");
    }

    hamburgerToggle();

    print();
}

function skillsClickMobile() {
    skills_mobile.classList.toggle("is-active");

    if (skills_id.classList.contains("non-vis")) {
        skills_id.classList.toggle("non-vis");
    }

    skills_id.classList.toggle("vis");
    if (about_me_mobile.classList.contains("is-active")) {
        about_me_mobile.classList.toggle("is-active");
    }

    if (tech_mobile.classList.contains("is-active")) {
        tech_mobile.classList.toggle("is-active");
    }

    if (home_mobile.classList.contains("is-active")) {
        home_mobile.classList.toggle("is-active");
    }

    if (projects_mobile.classList.contains("is-active")) {
        projects_mobile.classList.toggle("is-active");
    }

    if (contact_mobile.classList.contains("is-active")) {
        contact_mobile.classList.toggle("is-active");
    }


    if (home_id.classList.contains("vis")) {
        home_id.classList.toggle("vis");
    }

    if (tech_id.classList.contains("vis")) {
        tech_id.classList.toggle("vis");
    }

    if (about_me_id.classList.contains("vis")) {
        about_me_id.classList.toggle("vis");
    }

    if (projects_id.classList.contains("vis")) {
        projects_id.classList.toggle("vis");
    }

    if (contact_id.classList.contains("vis")) {
        contact_id.classList.toggle("vis");
    }

    hamburgerToggle();
    displayPercentage();
    print();
}

function projectsClickMobile() {
    projects_mobile.classList.toggle("is-active");

    if (projects_id.classList.contains("non-vis")) {
        projects_id.classList.toggle("non-vis");
    }

    projects_id.classList.toggle("vis");

    if (about_me_mobile.classList.contains("is-active")) {
        about_me_mobile.classList.toggle("is-active");
    }

    if (tech_mobile.classList.contains("is-active")) {
        tech_mobile.classList.toggle("is-active");
    }

    if (skills_mobile.classList.contains("is-active")) {
        skills_mobile.classList.toggle("is-active");
    }

    if (home_mobile.classList.contains("is-active")) {
        home_mobile.classList.toggle("is-active");
    }

    if (contact_mobile.classList.contains("is-active")) {
        contact_mobile.classList.toggle("is-active");
    }


    if (home_id.classList.contains("vis")) {
        home_id.classList.toggle("vis");
    }

    if (tech_id.classList.contains("vis")) {
        tech_id.classList.toggle("vis");
    }

    if (skills_id.classList.contains("vis")) {
        skills_id.classList.toggle("vis");
    }

    if (about_me_id.classList.contains("vis")) {
        about_me_id.classList.toggle("vis");
    }

    if (contact_id.classList.contains("vis")) {
        contact_id.classList.toggle("vis");
    }

    hamburgerToggle();
    loadProject();
    print();
}

function contactsClickMobile() {
    contact_mobile.classList.toggle("is-active");

    if (contact_id.classList.contains("non-vis")) {
        contact_id.classList.toggle("non-vis");
    }

    contact_id.classList.toggle("vis");

    if (about_me_mobile.classList.contains("is-active")) {
        about_me_mobile.classList.toggle("is-active");
    }

    if (tech_mobile.classList.contains("is-active")) {
        tech_mobile.classList.toggle("is-active");
    }

    if (skills_mobile.classList.contains("is-active")) {
        skills_mobile.classList.toggle("is-active");
    }

    if (projects_mobile.classList.contains("is-active")) {
        projects_mobile.classList.toggle("is-active");
    }

    if (home_mobile.classList.contains("is-active")) {
        home_mobile.classList.toggle("is-active");
    }


    if (home_id.classList.contains("vis")) {
        home_id.classList.toggle("vis");
    }

    if (tech_id.classList.contains("vis")) {
        tech_id.classList.toggle("vis");
    }

    if (skills_id.classList.contains("vis")) {
        skills_id.classList.toggle("vis");
    }

    if (projects_id.classList.contains("vis")) {
        projects_id.classList.toggle("vis");
    }

    if (about_me_id.classList.contains("vis")) {
        about_me_id.classList.toggle("vis");
    }

    hamburgerToggle();

    print();
}

function hamburgerToggle() {
    hamburger.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-open");
}


function displayPercentage() {
    displayPercentageAccountability();
    displayPercentageCreativity();
    displayPercentageCriticalThinking();
    displayPercentageTeamWrok();
}


function displayPercentageCriticalThinking() {
    let count = document.getElementById("criticalThinking");
    let temp = 0;

    setInterval(() => {
        if (temp == 85) {
            clearInterval();
        } else {
            temp++;
            count.innerHTML = temp + " % ";
        }
    }, 33);

}

function displayPercentageAccountability() {
    let count = document.getElementById("accountability");
    let temp = 0;

    setInterval(() => {
        if (temp == 90) {
            clearInterval();
        } else {
            temp++;
            count.innerHTML = temp + " % ";
        }
    }, 33);

}

function displayPercentageTeamWrok() {
    let count = document.getElementById("team-wrok");
    let temp = 0;

    setInterval(() => {
        if (temp == 80) {
            clearInterval();
        } else {
            temp++;
            count.innerHTML = temp + " % ";
        }
    }, 33);

}

function displayPercentageCreativity() {
    let count = document.getElementById("creativity");
    let temp = 0;

    setInterval(() => {
        if (temp == 95) {
            clearInterval();
        } else {
            temp++;
            count.innerHTML = temp + " % ";
        }
    }, 33);

}

function loadProject() {

    $(function () {
        $('.carousel-item').eq(0).addClass('active');
        var total = $('.carousel-item').length;
        var current = 0;
        $('#moveRight').on('click', function () {
            var next = current;
            current = current + 1;
            setSlide(next, current);
        });
        $('#moveLeft').on('click', function () {
            var prev = current;
            current = current - 1;
            setSlide(prev, current);
        });
        function setSlide(prev, next) {
            var slide = current;
            if (next > total - 1) {
                slide = 0;
                current = 0;
            }
            if (next < 0) {
                slide = total - 1;
                current = total - 1;
            }
            $('.carousel-item').eq(prev).removeClass('active');
            $('.carousel-item').eq(slide).addClass('active');
            setTimeout(function () {

            }, 800);



            console.log('current ' + current);
            console.log('prev ' + prev);

            if (current == prev) {
                alert("No More Projects Available ...");
            }

        }
    });
}

function print() {
    console.log(home_id.classList);
    console.log(projects_id.classList);
    console.log(tech_id.classList);
    console.log(skills_id.classList);
    console.log(contact_id.classList);
    console.log(about_me_id.classList);
}

