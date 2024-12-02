gsap.registerPlugin(ScrollTrigger);

gsap.from(".bar span", {
    width: "0%", // Start from 0 width
    scrollTrigger: {
        trigger: ".bar", // The element triggering the animation
        start: "top 80%", // Start animation when .bar enters the viewport
        end: "top 50%", // End animation when .bar reaches this position
        scrub: true, // Smooth animation tied to scroll
        markers: false, // Debugging markers- i switch true to false to remove the markers
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
        markers: false, 
    },
    ease: "power2.inOut",
    duration: 1,
    stagger: 0.1,
});

/* TIMELINE ANIMATION
let target = 0;
let current = 0;
let ease = 0.07;

const slider = document.querySelector(".slider");
const sliderWrapper = document.querySelector(".slider-wrapper");
const markerWrapper = document.querySelector(".marker-wrapper");
const activeSlide = document.querySelector(".active-slide");

let maxScroll = sliderWrapper.offsetWidth - window.innerWidth;

function lerp(start, end, factor){
    return start + (end - start) * factor;
}

function updateActiveSliderNumber(markerMove, markerMaxMove){
    const partWidth = markerMaxMove / 10;
    let currentPart = Math.round((markerMove - 70) / partWidth) + 1;
    currentPart = Math.min(10, currentPart);
    activeSlide.textContent = `${currentPart}/10`;
}

function update(){
    current = lerp(current, target, ease)

    gsap.set(".slider-wrapper", {
        x: -current,
    });

    let moveRatio = current / maxScroll;
    let markerMaxMove = window.innerWidth - markerWrapper.offsetWidth - 170;
    let markerMove = 70 + moveRatio * markerMaxMove;
    gsap.set(".marker-wrapper", {
        x: markerMove,
    })

    updateActiveSliderNumber(markerMove, markerMaxMove);

    requestAnimationFrame(update);
}
window.addEventListener("resize", () => {
    maxScroll = sliderWrapper.offsetWidth - window.innerWidth;
});

window.addEventListener("wheel", (e) => {
    target += e.deltaY;

    target = Math.max(0, target);
    target = Math.min(maxScroll, target);
})
update(); */



let target = 0;
let current = 0;
let ease = 0.05;

const slider = document.querySelector(".slider");
const sliderWrapper = document.querySelector(".slider-wrapper");
const markerWrapper = document.querySelector(".marker-wrapper");
const activeSlide = document.querySelector(".active-slide");

//1차: let maxScroll = sliderWrapper.offsetWidth - window.innerWidth;//
//2차// 
let maxScroll = sliderWrapper.scrollWidth - window.innerWidth;


function lerp(start, end, factor) {
  return start + (end - start) * factor;
}

function updateActiveSliderNumber(markerMove, markerMaxMove) {
  const partWidth = markerMaxMove / 10;
  let currentPart = Math.round((markerMove - 70) / partWidth) + 1;
  currentPart = Math.min(10, currentPart);
  activeSlide.textContent = `${currentPart}/10`;
}

function update() {
  current = lerp(current, target, ease);
  console.log("current:", current, "target:", target); // Debugging values

  gsap.set(".slider-wrapper", {
    x: -current,
  });

  let moveRatio = current / maxScroll;
  let markerMaxMove = window.innerWidth - markerWrapper.offsetWidth - 170;
  let markerMove = 70 + moveRatio * markerMaxMove;

  gsap.set(".marker-wrapper", {
    x: markerMove,
  });

  updateActiveSliderNumber(markerMove, markerMaxMove);

  requestAnimationFrame(update);
}

window.addEventListener("resize", () => {
  maxScroll = sliderWrapper.offsetWidth - window.innerWidth;
  console.log("maxScroll (resize):", maxScroll); // Debug resize
});

window.addEventListener("wheel", (e) => {
  target += e.deltaY * 0.5; // Adjust scroll speed
  target = Math.max(0, Math.min(target, maxScroll));
  console.log("target (wheel):", target); // Debug wheel events
});

update();
