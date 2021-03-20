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
    $(".menu li").removeClass("active");
    $(".menu li:nth-child(2)").addClass("active");
  },
  onEnterBack: () => {
    $(".menu li").removeClass("active");
    $(".menu li:nth-child(2)").addClass("active");
  },
});
ScrollTrigger.create({
  trigger: ".good",
  start: "top center",
  endTrigger: ".good",
  end: "bottom center",
  onEnter: () => {
    $(".menu li").removeClass("active");
    $(".menu li:nth-child(3)").addClass("active");
  },
  onEnterBack: () => {
    $(".menu li").removeClass("active");
    $(".menu li:nth-child(3)").addClass("active");
  },
});
ScrollTrigger.create({
  trigger: ".improve",
  start: "top center",
  endTrigger: ".improve",
  end: "bottom 70%",
  onEnter: () => {
    $(".menu li").removeClass("active");
    $(".menu li:nth-child(4)").addClass("active");
  },
  onEnterBack: () => {
    $(".menu li").removeClass("active");
    $(".menu li:nth-child(4)").addClass("active");
  },
});

/**
 * Intro ===
 */
//Left
gsap.from("#header-left", {
  opacity: 0,
  duration: 1,
  xPercent: -20,
  ease: "expo.out",
});

let chatroom = gsap.timeline({ duration: 0.3, ease: "back.out(1.7)" });

//Chatroom UI animation
chatroom
  .from(".chatroom", {
    opacity: 0,
    xPercent: 20,
    duration: 0.5,
  })
  .from(
    ".titlebar",
    {
      opacity: 0,
      duration: 0.5,
    },
    "-=.5"
  )
  .from(
    "#time",
    {
      yPercent: -10,
      opacity: 0,
      duration: 0.2,
    },
    "-=.5"
  )
  .from("#id01", {
    opacity: 0,
    scale: 0.5,
    ease: "back.out(1.7)",
  })
  .from("#bubble01", {
    opacity: 0,
    xPercent: -10,
    ease: "expo.out",
  })
  .from(
    "#dia01",
    {
      xPercent: -10,
      ease: "expo.out",
      duration: 1,
    },
    "-=.5"
  )
  .from(
    "#stat01",
    {
      opacity: 0,
      duration: 0.2,
    },
    "-=.5"
  )
  .from(
    "#id02",
    {
      opacity: 0,
      scale: 0.5,
      ease: "back.out(1.7)",
    },
    "-=.75"
  )
  .from(
    "#bubble02",
    {
      opacity: 0,
      xPercent: -10,
      ease: "expo.out",
    },
    "-=.3"
  )
  .from(
    "#dia02",
    {
      xPercent: -10,
      ease: "expo.out",
      duration: 1,
    },
    "-=.5"
  )
  .from(
    "#stat02",
    {
      opacity: 0,
      duration: 0.2,
    },
    "-=.5"
  )
  .from("#id03", {
    xPercent: 25,
    opacity: 0,
    scale: 0.5,
    ease: "back.out(1.7)",
  }, "-=.5")
  .from("#bubble03", {
    xPercent: 10,
    opacity: 0,
    duration: 0.2,
  })
  .from(
    "#dia03",
    {
      xPercent: 10,
      ease: "expo.out",
      duration: 1,
    },
    "-=.2"
  );

/**
 * Section animation settings
 */

//Header leaving each
$("header").each(function () {
  gsap.to(this, {
    scrollTrigger: {
      trigger: this,
      start: "bottom 40%",
      end: "bottom top",
      scrub: true,
    },
    opacity: 0,
  });
});

//Sections each
//Entering
gsap.utils.toArray("section").forEach((sect) => {
  gsap.from(sect, {
    scrollTrigger: {
      start: "top bottom",
      end: "top center",
      // markers: true,
      scrub: 1,
      trigger: sect,
    },
    y: 200,
    opacity: 0,
  });
});

gsap.to("#reviewing-header", {
  scrollTrigger: {
    trigger: ".review",
    start: "top 40%",
    end: "bottom center",
    endTrigger: ".review",
    end: "bottom top",
    // markers: true,
    scrub: true,
  },
  y: $(".review").height()-$('#reviewing-header').height(),
});


//3E's
gsap.utils.toArray(".lefty-in").forEach((lefty) => {
  gsap.from(lefty, {
    scrollTrigger: {
      trigger: lefty,
      start: "top 70%",
      end: "top bottom",
      scrub: 0.5,
    },
    xPercent: -10,
    opacity: 0,
  });
});

//List
//The Overview List
let amedia = document.querySelectorAll(
  "#overview-list li:nth-child(odd) .media"
);
let bmedia = document.querySelectorAll(
  "#overview-list li:nth-child(even) .media"
);

let atext = document.querySelectorAll("#overview-list li:nth-child(odd) .text");
let btext = document.querySelectorAll(
  "#overview-list li:nth-child(even) .text"
);

$(atext).each(function () {
  gsap.from(this, {
    scrollTrigger: {
      trigger: this,
      start: "top 85%",
      end: "+=250",
      scrub: 0.5,
    },
    xPercent: -50,
    opacity: 0,
  });
});
$(bmedia).each(function () {
  gsap.from(this, {
    scrollTrigger: {
      trigger: this,
      start: "top 85%",
      end: "+=250",
      scrub: 0.5,
    },
    xPercent: -50,
    opacity: 0,
  });
});
$(amedia).each(function () {
  gsap.from(this, {
    scrollTrigger: {
      trigger: this,
      start: "top 85%",
      end: "+=250",
      scrub: 0.5,
    },
    xPercent: 50,
    opacity: 0,
  });
});
$(btext).each(function () {
  gsap.from(this, {
    scrollTrigger: {
      trigger: this,
      start: "top 85%",
      end: "+=250",
      scrub: 0.5,
    },
    xPercent: 50,
    opacity: 0,
  });
});

//The Good List
let cmedia = document.querySelectorAll("#good-list li:nth-child(odd) .media");
let dmedia = document.querySelectorAll("#good-list li:nth-child(even) .media");

let ctext = document.querySelectorAll("#good-list li:nth-child(odd) .text");
let dtext = document.querySelectorAll("#good-list li:nth-child(even) .text");

$(cmedia).each(function () {
  gsap.from(this, {
    scrollTrigger: {
      trigger: this,
      start: "top 85%",
      end: "+=250",
      scrub: 0.5,
    },
    xPercent: -50,
    opacity: 0,
  });
});
$(dtext).each(function () {
  gsap.from(this, {
    scrollTrigger: {
      trigger: this,
      start: "top 85%",
      end: "+=250",
      scrub: 0.5,
    },
    xPercent: -50,
    opacity: 0,
  });
});
$(ctext).each(function () {
  gsap.from(this, {
    scrollTrigger: {
      trigger: this,
      start: "top 85%",
      end: "+=250",
      scrub: 0.5,
    },
    xPercent: 50,
    opacity: 0,
  });
});
$(dmedia).each(function () {
  gsap.from(this, {
    scrollTrigger: {
      trigger: this,
      start: "top 85%",
      end: "+=250",
      scrub: 0.5,
    },
    xPercent: 50,
    opacity: 0,
  });
});

//The Improve List
let emedia = document.querySelectorAll(
  "#improve-list li:nth-child(odd) .media"
);
let fmedia = document.querySelectorAll(
  "#improve-list li:nth-child(even) .media"
);

let etext = document.querySelectorAll("#improve-list li:nth-child(odd) .text");
let ftext = document.querySelectorAll("#improve-list li:nth-child(even) .text");

$(etext).each(function () {
  gsap.from(this, {
    scrollTrigger: {
      trigger: this,
      start: "top 85%",
      end: "+=250",
      scrub: 0.5,
    },
    xPercent: -50,
    opacity: 0,
  });
});
$(fmedia).each(function () {
  gsap.from(this, {
    scrollTrigger: {
      trigger: this,
      start: "top 85%",
      end: "+=250",
      scrub: 0.5,
    },
    xPercent: -50,
    opacity: 0,
  });
});
$(emedia).each(function () {
  gsap.from(this, {
    scrollTrigger: {
      trigger: this,
      start: "top 85%",
      end: "+=250",
      scrub: 0.5,
    },
    xPercent: 50,
    opacity: 0,
  });
});
$(ftext).each(function () {
  gsap.from(this, {
    scrollTrigger: {
      trigger: this,
      start: "top 85%",
      end: "+=250",
      scrub: 0.5,
    },
    xPercent: 50,
    opacity: 0,
  });
});

/**
 * Quotes Anim
 */

const bordee = getComputedStyle(document.querySelector("body"));
const colorOriginal = bordee.color;
const bgOriginal = bordee.backgroundColor;
//rams
const q1 = gsap.timeline();
q1.to("body", {
  color: "#fff",
  backgroundColor: "#000",
  duration: 1,
})
.to('.good', {
    opacity: 0,
    duration: 1,
}, "-=.5")
.from('.quote01', {
    opacity: 0,
    duration: .5,
}, "-=1")
.to("body", {
  color: colorOriginal,
  backgroundColor: bgOriginal,
  duration: 2,
}, 2)
.to('.quote01', {
    opacity: 0
}, "-=1.5");

ScrollTrigger.create({
  animation: q1,
  trigger: "#rams",
  start: "top 60%",
  end: "bottom 30%",
  scrub: true,
//   markers: true,
  onEnter: () => {
    $("nav").css('transform', 'translateY(-100%)');
  },
  onLeave: () => {
    $("nav").css("transform", 'translateY(0)');
  },
  onEnterBack: () => {
    $("nav").css('transform', 'translateY(-100%)');;
  },
  onLeaveBack: () => {
    $("nav").css("transform", 'translateY(0)');
  },
});
//leblanc
const q2 = gsap.timeline();
q2.to("body", {
  color: "#fff",
  backgroundColor: "#000",
  duration: 1,
})
.to('#overview-list', {
    opacity: 0,
    duration: 1,
}, "-=.5")
.from('.quote02', {
    opacity: 0,
    duration: .5,
}, "-=1.65")
.to("body", {
  color: colorOriginal,
  backgroundColor: bgOriginal,
  duration: 2,
}, 2.5)
.to('.quote02', {
    opacity: 0
}, "-=.5");

ScrollTrigger.create({
  animation: q2,
  trigger: "#leblanc",
  start: "top center",
  end: "bottom center",
  scrub: true,
//   markers: true,
  onEnter: () => {
    $("nav").css('transform', 'translateY(-100%)');
  },
  onLeave: () => {
    $("nav").css("transform", 'translateY(0)');
  },
  onEnterBack: () => {
    $("nav").css('transform', 'translateY(-100%)');;
  },
  onLeaveBack: () => {
    $("nav").css("transform", 'translateY(0)');
  },
});