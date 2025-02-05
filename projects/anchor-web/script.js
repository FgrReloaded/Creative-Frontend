// Code Started

window.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const tl2 = gsap.timeline();

    tl2.from(".anm1", {
        transform: "translateY(-810px) translateX(-160px) rotate(30deg)",
        duration: 4,
        ease: "elastic.out(1,0.5)",
        delay: 0.5
    })

    tl2.from(".anm2", {
        transform: "translateY(-750px) translateX(-160px) rotate(50deg)",
        duration: 4,
        ease: "elastic.out(1,0.5)",
    }, '-=3.85')

    tl2.from(".anm3", {
        transform: "translateY(-860px) translateX(-70px) rotate(50deg)",
        duration: 4,
        ease: "elastic.out(1,0.5)",
    }, '-=3.85')

    tl2.from(".anm4", {
        transform: "translateY(-912px) translateX(200px) rotate(286deg)",
        duration: 4,
        ease: "elastic.out(1,0.5)",
    }, '-=4.1')

    tl2.from(".anm5", {
        transform: "translateY(-625px) translateX(15px) rotate(-6.8deg)",
        duration: 4,
        ease: "elastic.out(1,0.5)",
    }, '-=4.1')

    tl2.from(".heroText div h1", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power1.out",
    }, "-=3.5")

    tl2.from(".heroText p", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power1.out",
    }, "-=3")

    tl2.from(".heroText button", {
        opacity: 0,
        duration: 0.8,
        ease: "power1.out",
    }, "-=2.5")

    tl2.from(".navbar", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power1.out",
    }, "<")


    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: false,
        slidesPerView: "auto",
        allowTouchMove: true,
        spaceBetween: 30,
        speed: 1000,

        navigation: {
            nextEl: '.rightArrow',
            prevEl: '.leftArrow',
        },
        on: {
            slideChange: function () {
                animateSlides(this.slides[this.activeIndex]);
            }
        }
    });

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true
    });

    function setupScrollTrigger() {

        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy("[data-scroll-container]", {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
        });

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();
    }

    setupScrollTrigger();

    const tl = gsap.timeline();


    tl.to(".leftBox", {
        x: -500,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
            trigger: ".leftBox",
            scroller: "[data-scroll-container]",
            start: "top 75%",
            end: "top 68%",
            scrub: 3,
        }
    })

    tl.to(".rightBox", {
        x: 500,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".rightBox",
            scroller: "[data-scroll-container]",
            start: "top 75%",
            end: "top 68%",
            scrub: 3,
        }
    }, "<")

    tl.to(".anm4 , .anm3", {
        x: 1200,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".anm4",
            scroller: "[data-scroll-container]",
            start: "top 100%",
            end: "top 95%",
            scrub: 2,
        }
    })

    tl.to(".anm5", {
        x: -1200,
        rotate: "5deg",
        transform: "translateX(-800px) translateY(-15px) /rotate(-6.8deg)",
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".anm5",
            scroller: "[data-scroll-container]",
            start: "top 65%",
            end: "top 40%",
            scrub: 2,
        }
    })



    tl.to(".anm2", {
        x: -1200,
        duration: 2,
        rotate: "-2deg",
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".anm2",
            scroller: "[data-scroll-container]",
            start: "top 66.5%",
            end: "top 55%",
            scrub: 2,
        }
    })

    tl.to(".anm1", {
        x: -1000,
        duration: 2,
        rotate: "-5deg",
        ease: "back.in(0.4)",
        scrollTrigger: {
            trigger: ".anm1",
            scroller: "[data-scroll-container]",
            start: "top 82%",
            end: "top 76%",
            scrub: 2,
        }
    })

    // tl.to(".tiltedText", {
    //     display: "block",
    //     opacity: 1,
    //     duration: 0.5,
    //     ease: "power1.out",
    //     scrollTrigger: {
    //         trigger: ".tiltedText",
    //         scroller: "[data-scroll-container]",
    //         start: "top 62%",
    //         end: "top 55%",
    //         scrub: 1,
    //     }
    // })

    locoScroll.on("scroll", () => {
        if (locoScroll.scroll.instance.scroll.y > 400) {
            tl.to(".firstCard", {
                x: 0,
                stagger: 0.1,
                ease: "back.out(0.7)",
                duration: 1,
            })

            tl.to(".restCards", {
                x: 0,
                stagger: 0.2,
                ease: "back.out(1.5)",
                duration: 1,
            }, "<")
        }
    });

    tl.from(".heading h1", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power1.out",
        scrollTrigger: {
            trigger: ".heading",
            scroller: "[data-scroll-container]",
            start: "top 60%",
            end: "top top",
            scrub: 1,
        },
    })

    const animateSlides = (slide) => {
        let sliderContent = slide.children[0];
        let sliderImg = slide.children[1];

        let contentChildren = sliderContent.children;
        let imgContainer = contentChildren[3].children;
        let mainText = contentChildren[1];
        let mainH1 = mainText.children;

        // Resetting the values
        gsap.to(".smallImg", {
            y: -150,
            duration: 0.5,
            delay: 0.8,
            ease: "power1.out",
        })
        gsap.to(".subText", {
            opacity: 0,
            duration: 0.5
        })

        gsap.to(".mainText h1", {
            y: 50,
            opacity: 0,
            delay: 0.8,
            duration: 0.25,
            ease: "power1.out",
        })

        gsap.to(".bulletText", {
            opacity: 0,
            duration: 0.5,
            delay: 0.5
        })


        gsap.to(imgContainer, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.5,
            stagger: 0.2,
            ease: "elastic.out(1,0.75)",
        })

        gsap.from(sliderImg, {
            y: 400,
            delay: 0.8,
            duration: 1.25,
            ease: "power1.out",
        })

        gsap.to(contentChildren[0], {
            opacity: 1,
            duration: 0.5
        })

        gsap.to(mainH1, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.35,
            stagger: 0.2,
            ease: "power1.out",
        })

        gsap.to(contentChildren[2], {
            opacity: 1,
            duration: 1,
            delay: 0.6,
            ease: "power1.out",
        })

    }

    animateSlides(document.querySelector(".swiper-slide"))


});


