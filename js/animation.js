gsap.registerPlugin(ScrollTrigger);

let navLink = gsap.timeline();

navLink.from(".nav1", {
    x: -30,
    opacity: 0,
    duration: 0.5,
    delay: 0.8,
    stagger: 0.3
})

navLink.from(".nav2", {
    x: -20,
    opacity: 0,
    duration: 0.6,
    delay: 0,
    stagger: 0.3
})

navLink.from(".nav3", {
    x: -20,
    opacity: 0,
    duration: 0.6,
    delay: 0,
    stagger: 0.3
})

navLink.from(".nav4", {
    y: -10,
    opacity: 0,
    duration: 0.6,
    delay: 0,
    scale: 0.3
})

gsap.from("#hero", {
    opacity: 0,
    duration: 1,
    x: -20,
    delay: 1,
    stagger: 0.3
})


let fadeInAnimations = [
    { selection: "#about", y: 200, delay: 0.5 },
    { selection: "#features", x: -200, delay: 0.5 },

    { selection: "#values", x: -200, delay: 0.5 },
    { selection: "#contact", y: 200, delay: 0.5 },
];

fadeInAnimations.forEach(({ selection: selector, x, y, delay }) => {
    gsap.from(selector, {
        opacity: 0,
        x: x || undefined,
        y: y || undefined,
        duration: 0.5,
        delay: delay,
        scrollTrigger: {
            trigger: selector,
            scroller: "body",
            start: "top 70%",
            end: "top 20%",
            // markers: true,
        },
    });
});