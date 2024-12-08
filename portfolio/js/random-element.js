gsap.registerPlugin(ScrollTrigger);

gsap.from(".bar span", {
  width: "0%", 
  scrollTrigger: {
    trigger: ".bar",
    start: "top 80%",
    end: "top 50%",
    scrub: true, 
  },
  duration: 1,
  ease: "power2.inOut",
});

gsap.from(".bar abbr", {
  opacity: 0, 
  scrollTrigger: {
    trigger: ".bar",
    start: "top 80%",
    end: "top 50%",
    scrub: true,
  },
  duration: 1,
  ease: "power2.inOut",
});

let scrollTarget = 0;
let currentScroll = 0;
let scrollEase = 0.05;

const slider = document.querySelector(".slider");
const sliderWrapper = document.querySelector(".slider-wrapper");
const marker = document.querySelector(".marker-wrapper");
const activeSlideLabel = document.querySelector(".active-slide");

if (sliderWrapper) {
  let maxScroll = sliderWrapper.scrollWidth - window.innerWidth;

  function smoothScroll(start, end, easing) {
    return start + (end - start) * easing;
  }

  function updateSlideNumber(markerPosition, maxMarkerMove) {
    const segmentWidth = maxMarkerMove / 10;
    let activeSlide = Math.round((markerPosition - 70) / segmentWidth) + 1;
    activeSlide = Math.min(10, activeSlide); 
    activeSlideLabel.textContent = `${activeSlide}/10`; 
  }

  function updateAnimation() {
    currentScroll = smoothScroll(currentScroll, scrollTarget, scrollEase);

    gsap.set(".slider-wrapper", {
      x: -currentScroll, 
    });

    let scrollRatio = currentScroll / maxScroll;
    let maxMarkerMove = window.innerWidth - marker.offsetWidth - 170;
    let markerPosition = 70 + scrollRatio * maxMarkerMove;

    gsap.set(".marker-wrapper", {
      x: markerPosition,
    });

    updateSlideNumber(markerPosition, maxMarkerMove);

    requestAnimationFrame(updateAnimation); 
  }

  window.addEventListener("resize", () => {
    maxScroll = sliderWrapper.scrollWidth - window.innerWidth;
  });

  window.addEventListener("wheel", (event) => {
    scrollTarget += event.deltaY * 0.5; 
    scrollTarget = Math.max(0, Math.min(scrollTarget, maxScroll)); 
  });

  updateAnimation();
} else {
  console.error("Slider wrapper not found!");
}
