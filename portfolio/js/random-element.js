gsap.registerPlugin(ScrollTrigger);

gsap.from(".bar span", {
    width: "0%", // Start from 0 width
    scrollTrigger: {
        trigger: ".bar", // The element triggering the animation
        start: "top 80%", // Start animation when .bar enters the viewport
        end: "top 50%", // End animation when .bar reaches this position
        scrub: true, // Smooth animation tied to scroll
        markers: true, // Debugging markers
    },
    ease: "power2.inOut",
    duration: 1,
    stagger: 0.1,
});

gsap.from(".bar abbr", {
    opacity: 0, // Start with invisible abbr
    scrollTrigger: {
        trigger: ".bar",
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        markers: true, // Debugging markers
    },
    ease: "power2.inOut",
    duration: 1,
    stagger: 0.1,
});

