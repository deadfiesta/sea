gsap.registerPlugin(ScrollTrigger);



//Pinning Understanding the 3'E's
ScrollTrigger.create({
    trigger: "#reviewing-list",
    start: "5% center",
    endTrigger: "#reviewing-list",
    end: "82.5% center",
    pinSpacing: false,
    pin: '#reviewing-header',
    // markers: true,
})

gsap.from('#header-left', {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
})

gsap.from(".keywords ul.bottom", {
    scrollTrigger: {
        trigger: ".keywords ul.top",
        start: "bottom 90%",
        end: "+=300",
        markers: true,
        scrub: .5,
    },
    y: 100,
    opacity: 0,
})