gsap.registerPlugin(ScrollTrigger);
/**
 * Toggle Nav
 */
ScrollTrigger.create({
    trigger: "header",
    start: "top center",
    endTrigger: ".overview",
    end: "bottom 70%",
    onEnter: () => {
        $('.menu li').removeClass('active');
        $('.menu li:nth-child(2)').addClass('active');
    },
    onEnterBack: () => {
        $('.menu li').removeClass('active');
        $('.menu li:nth-child(2)').addClass('active');
    }
})
ScrollTrigger.create({
    trigger: ".good",
    start: "top center",
    endTrigger: ".good",
    end: "bottom center",
    onEnter: () => {
        $('.menu li').removeClass('active');
        $('.menu li:nth-child(3)').addClass('active');
    },
    onEnterBack: () => {
        $('.menu li').removeClass('active');
        $('.menu li:nth-child(3)').addClass('active');
    }
})
ScrollTrigger.create({
    trigger: ".improve",
    start: "top center",
    endTrigger: ".improve",
    end: "bottom 70%",
    onEnter: () => {
        $('.menu li').removeClass('active');
        $('.menu li:nth-child(4)').addClass('active');
    },
    onEnterBack: () => {
        $('.menu li').removeClass('active');
        $('.menu li:nth-child(4)').addClass('active');
    }
})

/**
 * Intro ===
 */
//Left
gsap.from('#header-left', {
    opacity: 0,
    duration: 1,
    xPercent: -20,
    ease: "expo.out",
})

let chatroom = gsap.timeline({ duration: .3, ease: "back.out(1.7)" });

//Chatroom UI animation
chatroom.from(".chatroom", {
    opacity: 0,
    xPercent: 20,
    duration: .5,
})
    .from('.titlebar', {
        opacity: 0,
        duration: .5,
    }, "-=.5")
    .from('#time', {
        yPercent: -10,
        opacity: 0,
        duration: .2,
    }, "-=.5")
    .from('#id01', {
        opacity: 0,
        scale: .5,
        ease: "back.out(1.7)",
    })
    .from('#bubble01', {
        opacity: 0,
        xPercent: -10,
        ease: "expo.out",
    })
    .from('#dia01', {
        xPercent: -10,
        ease: "expo.out",
        duration: 1,
    }, "-=.5")
    .from('#stat01', {
        opacity: 0,
        duration: .2,
    }, "-=.5")
    .from('#id02', {
        opacity: 0,
        scale: .5,
        ease: "back.out(1.7)",
    }, "-=.75")
    .from('#bubble02', {
        opacity: 0,
        xPercent: -10,
        ease: "expo.out",
    }, "-=.3")
    .from('#dia02', {
        xPercent: -10,
        ease: "expo.out",
        duration: 1,
    }, "-=.5")
    .from('#stat02', {
        opacity: 0,
        duration: .2,
    }, "-=.5")
    .from('#id03', {
        xPercent: 25,
        opacity: 0,
        scale: .5,
        ease: "back.out(1.7)",
    })
    .from('#bubble03', {
        xPercent: 10,
        opacity: 0,
        duration: .2,
    })
    .from('#dia03', {
        xPercent: 10,
        ease: "expo.out",
        duration: 1,
    }, "-=.2")

//Pinning Understanding the 3'E's
ScrollTrigger.create({
    trigger: ".review",
    start: "top center",
    endTrigger: ".review",
    end: "bottom 70%",
    pinSpacing: false,
    pin: '#reviewing-header',
    // markers: true,
})
/**
 * Section animation settings
 */

//Header leaving each
$('header').each(function () {
    gsap.to(this, {
        scrollTrigger: {
            trigger: this,
            start: "bottom 40%",
            end: "bottom top",
            scrub: true,
        },
        opacity: 0,
    })
})

//Sections each
//Entering
$('section').each(function () {
    gsap.from(this, {
        scrollTrigger: {
            trigger: this,
            start: "top 80%",
            end: "+=500",
            scrub: 1,
            // markers: true,
        },
        opacity: 0,
    })
})

//3E's
$('.lefty-in').each(function () {
    gsap.from(this, {
        scrollTrigger: {
            trigger: this,
            start: "top 60%",
            end: "top 75%",
            scrub: .5,
        },
        xPercent: -10,
        opacity: 0,
    })
});

gsap.from(".keywords ul.bottom", {
    scrollTrigger: {
        trigger: ".keywords ul.top",
        start: "bottom 80%",
        end: "+=200",
        // markers: true,
        scrub: .5,
    },
    y: 100,
    opacity: 0,
})

//List 
//The Overview List
let amedia = document.querySelectorAll('#overview-list li:nth-child(odd) .media');
let bmedia = document.querySelectorAll('#overview-list li:nth-child(even) .media');

let atext = document.querySelectorAll('#overview-list li:nth-child(odd) .text');
let btext = document.querySelectorAll('#overview-list li:nth-child(even) .text');

$(atext).each(function () {
    gsap.from(this, {
        scrollTrigger: {
            trigger: this,
            start: "top 85%",
            end: "+=250",
            scrub: .5,
        },
        xPercent: -50,
        opacity: 0,
    })
})
$(bmedia).each(function () {
    gsap.from(this, {
        scrollTrigger: {
            trigger: this,
            start: "top 85%",
            end: "+=250",
            scrub: .5,
        },
        xPercent: -50,
        opacity: 0,
    })
})
$(amedia).each(function () {
    gsap.from(this, {
        scrollTrigger: {
            trigger: this,
            start: "top 85%",
            end: "+=250",
            scrub: .5,
        },
        xPercent: 50,
        opacity: 0,
    })
})
$(btext).each(function () {
    gsap.from(this, {
        scrollTrigger: {
            trigger: this,
            start: "top 85%",
            end: "+=250",
            scrub: .5,
        },
        xPercent: 50,
        opacity: 0,
    })
})

//The Good List
let cmedia = document.querySelectorAll('#good-list li:nth-child(odd) .media');
let dmedia = document.querySelectorAll('#good-list li:nth-child(even) .media');

let ctext = document.querySelectorAll('#good-list li:nth-child(odd) .text');
let dtext = document.querySelectorAll('#good-list li:nth-child(even) .text');


$(cmedia).each(function () {
    gsap.from(this, {
        scrollTrigger: {
            trigger: this,
            start: "top 85%",
            end: "+=250",
            scrub: .5,
        },
        xPercent: -50,
        opacity: 0,
    })
})
$(dtext).each(function () {
    gsap.from(this, {
        scrollTrigger: {
            trigger: this,
            start: "top 85%",
            end: "+=250",
            scrub: .5,
        },
        xPercent: -50,
        opacity: 0,
    })
})
$(ctext).each(function () {
    gsap.from(this, {
        scrollTrigger: {
            trigger: this,
            start: "top 85%",
            end: "+=250",
            scrub: .5,
        },
        xPercent: 50,
        opacity: 0,
    })
})
$(dmedia).each(function () {
    gsap.from(this, {
        scrollTrigger: {
            trigger: this,
            start: "top 85%",
            end: "+=250",
            scrub: .5,
        },
        xPercent: 50,
        opacity: 0,
    })
})

//The Improve List
let emedia = document.querySelectorAll('#improve-list li:nth-child(odd) .media');
let fmedia = document.querySelectorAll('#improve-list li:nth-child(even) .media');

let etext = document.querySelectorAll('#improve-list li:nth-child(odd) .text');
let ftext = document.querySelectorAll('#improve-list li:nth-child(even) .text');

$(etext).each(function () {
    gsap.from(this, {
        scrollTrigger: {
            trigger: this,
            start: "top 85%",
            end: "+=250",
            scrub: .5,
        },
        xPercent: -50,
        opacity: 0,
    })
})
$(fmedia).each(function () {
    gsap.from(this, {
        scrollTrigger: {
            trigger: this,
            start: "top 85%",
            end: "+=250",
            scrub: .5,
        },
        xPercent: -50,
        opacity: 0,
    })
})
$(emedia).each(function () {
    gsap.from(this, {
        scrollTrigger: {
            trigger: this,
            start: "top 85%",
            end: "+=250",
            scrub: .5,
        },
        xPercent: 50,
        opacity: 0,
    })
})
$(ftext).each(function () {
    gsap.from(this, {
        scrollTrigger: {
            trigger: this,
            start: "top 85%",
            end: "+=250",
            scrub: .5,
        },
        xPercent: 50,
        opacity: 0,
    })
})

/**
 * Quotes trigger
 */

gsap.from('.quote li', {
    scrollTrigger: {
        trigger: ".quote",
        start: "40% bottom",
        end: "center center",
        scrub: 1,
        markers: true,
    },
    opacity: 0,
    color: "#000",
})
gsap.to('body', {
    scrollTrigger: {
        trigger: ".quote",
        start: "30% center",
        end: "center center",
        scrub: 1,
        markers: true,
    },
    backgroundColor: "#000",
})

// let q1 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".quote",
//         start: "top center",
//         end: "bottom top",
//         scrub: 1,
//         markers: true,
//         // toggleActions: "play reverse none restart"
//     },
// })
//     .to('body', {
//         backgroundColor: "#000",
//     })
//     .from('.quote01 li', {
//         opacity: 0,
//     },)
//     .to('.quote01 li', {
//         color: "#ffffff",
//     })
//     .to('body', {
//         backgroundColor: "#fff"
//     })
