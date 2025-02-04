// Code Started


let cards = document.querySelectorAll('.card');
let actionSection = document.querySelector('.actionSection');
let integrationSection = document.querySelector('.integrationSection');
let snippetSection = document.querySelector('.snippetsSection');
let heroSection = document.querySelector('.heroSection');


window.onload = () => {
    window.innerWidth = 1366;

    document.querySelector('.navbar').style.opacity = '1';
}


cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        let cardLight = card.querySelector('.light');
        cardLight.style.opacity = '0.1';
        cardLight.style.left = e.clientX - card.getBoundingClientRect().left - cardLight.offsetWidth / 2 + 'px';
        cardLight.style.top = e.clientY - card.getBoundingClientRect().top - cardLight.offsetHeight / 2 + 'px';


    });
    card.addEventListener('mouseout', () => {
        card.querySelector('.light').style.opacity = '0';
    });

});


document.addEventListener("DOMContentLoaded", (event) => {

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

    gsap.to('.animatedGroup', {
        scrollTrigger: {
            trigger: '.heroSection',
            start: 'top top',
            scrub: 0.5,
            end: '100% 50%',
            pin: true,
        },
        top: "-70%",
        duration: 10,
    });

    gsap.to('.integrationSection .imgContainer', {
        scrollTrigger: {
            trigger: ".integrationSection",
            start: "top 120%",
            end: "bottom 100%",
            scrub: 1,
        },
        top: "28%",
        duration: 3
    })

    gsap.to('.integrationAnimated', {
        scrollTrigger: {
            trigger: ".appSlider",
            start: "top 50%",
            end: "bottom 50%",
            scrub: 2,
            ease: "power1.inOut"
        },
        width: "100%",
        duration: 10
    })

});

const navLi = document.querySelectorAll('.navbar ul li');

window.addEventListener('scroll', () => {
    let actionSectionTop = actionSection.getBoundingClientRect().top;
    let actionSectionBottom = actionSection.getBoundingClientRect().bottom;

    let integrationSectionTop = integrationSection.getBoundingClientRect().top;
    let integrationSectionBottom = integrationSection.getBoundingClientRect().bottom;


    let snippetSectionTop = snippetSection.getBoundingClientRect().top;
    let snippetSectionBottom = snippetSection.getBoundingClientRect().bottom;


    if (actionSectionTop <= 0 && actionSectionBottom >= 0) {
        navLi.forEach(li => {
            li.classList.remove('active');
        });
        navLi[0].classList.add('active');
    } else if (integrationSectionTop <= 0 && integrationSectionBottom >= 0) {
        navLi.forEach(li => {
            li.classList.remove('active');
        });
        navLi[1].classList.add('active');
    }
    else if (snippetSectionTop <= 0 && snippetSectionBottom >= 0) {
        navLi.forEach(li => {
            li.classList.remove('active');
        });
        navLi[2].classList.add('active');
    }
    else {
        navLi.forEach(li => {
            li.classList.remove('active');
        });
    }
});


integrationSection.addEventListener('mousemove', (e) => {
    const mouseX = e.pageX - integrationSection.offsetLeft;
    const boxCenterX = integrationSection.offsetWidth / 2;

    gsap.to('.appSlider', {
        x: -(mouseX - boxCenterX) / 20,
        duration: 3,

    });
});

heroSection.addEventListener('mousemove', (e) => {
    const mouseX = e.pageX - heroSection.offsetLeft;
    const boxCenterX = heroSection.offsetWidth / 2;

    gsap.to('.heroSection .animatedGroup .imgContainer', {
        x: (mouseX - boxCenterX) / 50,
        duration: 3,
    });
    gsap.to('.heroSection .heroText', {
        x: -(mouseX - boxCenterX) / 50,
        duration: 3,
    });
});




// Code Ended